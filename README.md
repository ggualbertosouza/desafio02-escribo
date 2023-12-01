SIGNIN - login
SIGNUP - register

Endpoints:

    - SignUp
        - Request:
            {
                "nome": "string",
                "email": "string",
                "senha": "string",
                "telefone": [{"numero": "int", "ddd": "int"}]
            }
        - Response:
            {
                id: GUID/ID,
                data_criacao: data,
                data_atualizacao: data,
                ultimo_login: data,
                token: GUID/JWT
            }
        - SignUp()
        - errors :
            -Email já cadastrado {"mensagem": "E-mail já existente"}


    - SignIn
        - Request:
            {
                email: string,
                senha: string
            }
        - Response:
            {
                id: GUID/ID,
                data_criacao: data,
                data_atualizacao: data,
                ultimo_login: data,
                token: GUID/JWT
            }
        - SignIn()
        - errors:
            - E-mail não cadastrado ou senha incorreta: {"mensagem": "Usuário e/ou senha inválidos"}
            - Senha incorreta: status 401 com: {"mensagem": "Usuário e/ou senha inválidos"}


    - Buscar usuário
        - Request:
            - Header Authentication com valor "Bearer {token}"
        - GetUser()
        - errors:
            - Token inválido: {"mensagem": "Não autorizado"}
            - Token expirado - 30 min:  {"mensagem" "Sessão inválida"}

requisitos=
[x] User json na request e response
[] Persistência de dados
[] Sistema de build com gerenciamento de dependências
[] Task runner para build
[] Linter jsHint | JsLin
[x] Express

Desejáveis -
[] jwt como token
[] testes unitários
[] criptografia hash na senha e token


HOSPEDAGEM: 

DB - desafio02