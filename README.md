
# Desafio 02 Escribo

## 🚀 API Rest 

**O desafio?**

- Desenvolver uma API RESTful para autenticação de usuários, que permita operações de cadastro (sign up), autenticação (sign in) e recuperação de informações do usuário.

 
## Stacks

[![My Skills](https://skillicons.dev/icons?i=js,express,prisma,docker,aws)](https://skillicons.dev)

**Framework:** Express v4.18.2

**Gerenciador de container:** Docker

**Gerenciador de dependências:** pnpm

**Dependências:** Prisma, bcrypt, jsonwebtoken, nodemon, eslint, prettier

## Documentação da API

| Método | Descrição |
|---|---|
| `GET` | Retorna dados de um usuário. |
| `POST` | Criar novo cadastro. |

## Cadastro de Usuário /signup

| Método | URL |
|---|---|
| `POST` | ``` http://3.92.235.110:3000/signup ``` |

+ Requisição (application/json)

    + HEADER

            {
              "Content-Type": "application/json"
            }
    + BODY

            {
              "nome": "user",
              "email": "user@user.com",
              "senha": "password",
              "telefones": [
                 {
                   "numero": "123456789",
                    "ddd": "33"
                 }
              ]
            }
      
+ Response 

    + Status 201 CREATED   
    + BODY

            {
              "id": "GUID/ID",
              "name": "user",
              "data_criacao": "",
              "data_atualizacao": "",
              "token": "GUID/JWT"
            }
+ Erros Possíveis
  
  | Status | Descrição |
  |---|---|
  | `401 - Unauthorized` | E-mail já existente |

## Autenticação /signin

| Método | URL |
|---|---|
| `POST` | ``` http://3.92.235.110:3000/signin ``` |

+ Requisição (application/json)

    + HEADER

            {
              "Content-Type": "application/json"
            }
    + BODY

            {
              "email": "user",
              "senha": "password"
            }
      
+ Response 

    + Status 200 OK    
    + BODY

            {
              "id": "GUID/ID",
              "name": "user",
              "data_criacao": "",
              "data_atualizacao": "",
              "token": "GUID/JWT"
            }
+ Erros Possíveis
  
  | Status | Descrição |
  |---|---|
  | `400 ` | Usuário e/ou senha inválidos |

## Buscas Usuário /getuser

| Método | URL |
|---|---|
| `GET` | ``` http://3.92.235.110:3000/getuser ``` |

+ Requisição

    + HEADER

            {
              "Authentication": "Bearer {token}"
            }
      
+ Response 

    + Status 200 OK    
    + BODY

            {
              "id": "GUID/ID",
              "name": "user",
              "data_criacao": "",
              "data_atualizacao": "",
            }
+ Erros Possíveis
  
  | Status | Descrição |
  |---|---|
  | `401 - Unauthorized (Sessão inválida)` | Não autorizado |
