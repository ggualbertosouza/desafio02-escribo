/* eslint-disable no-unused-vars */
import { prisma } from "../context/dbContext.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const createUser = async(data) => {
    // Por padrão, a validação do email já foi feito no schema do banco
    const { nome, email, senha, ddd, numero } = data;

    // Criptografar senha
    const senhaHash = await bcrypt.hash(senha, 10);

    // criar usuário no banco
    const newUser = await prisma.user.create({
        data: {
            nome: nome,
            email: email,
            senha: senhaHash
        }
    });

    const newPhone = await prisma.telefones.create({
        data: {
            numero: numero,
            ddd: ddd
        }
    });

    const { senha: pass, ...user } = newUser;

    return user;
};


export const login = async(data) => {

    // Usuário do banco
    const user = await prisma.user.findFirst({ where: { email: data.email } });

    // Descriptar e verificar se a senha está correta
    const senhaHash = await bcrypt.compare(data.senha, user.senha);

    if (!senhaHash) {
        throw new Error("E-mail e/ou senha inválida");
    }

    // Cria token 
    const token = jwt.sign({ id: user.id }, process.env.JWT_PASS, { expiresIn: "30m" });

    const { senha, nome, email, ...rest } = user;

    return { rest, token };
};


export const getUserById = async(id) => {
    // Pesquisar usuário no banco de dados pelo id
    const user = await prisma.user.findFirst({ where: { id } });

    const { senha, ...rest } = user;
    return rest;
};