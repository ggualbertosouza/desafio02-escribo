
# Desafio 02 Escribo

  Hospedada na AWS, serviço EC2.

## Documentação da API

#### GET USER

```http
  GET http://3.92.235.110:3000/getuser
```

| Authorization   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `Bearer token` | `token` |  Request.header e pega usuário pelo id do jwt| 
                                    
#### SIGNUP

```http
  POST http://3.92.235.110:3000/signup
```

| body   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `raw`      | `json` | nome, email, senha |

#### SIGNIN

```http
  POST http://3.92.235.110:3000/signin
```

| body   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `raw`      | `json` | email, senha |


