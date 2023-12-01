import { createUser, login, getUserById } from "../repository/userRepository.js";
import jwt from "jsonwebtoken";


// Criar usuário 
export const signUp = async(req, res) => {
    try {
        const request = req.body;
        return res.status(201).json(await createUser(request));

    } catch {
        return res.status(400).send({ message: "E-mail já existente" });
    }
};


// LogIn
export const signIn = async(req, res) => {
    try {
        const request = req.body;
        res.status(200).json(await login(request));

    } catch {
        res.status(400).send({ message: "Usuário e/ou senha inválidos" });

    }
};


// Pegar dados do usuário pelo id
export const userId = async(req, res) => {
    try {
        const { authorization } = req.headers;

        if (!authorization) {
            res.status(401).send({ message: "Não autorizado" });
        }

        const token = authorization.split(" ")[1];

        const { id } = jwt.verify(token, process.env.JWT_PASS);

        // Pega usuário no banco de dados
        const user = await getUserById(id);

        res.status(200).json(user);

    } catch {
        res.status(401).send({ message: "Não autorizado" });

    }
};