# BeMobile Test - Danilo Bellini

# Seja muito bem vindo(a)!

<details>
  <summary><strong>💡 Informação importante à pessoa avaliadora</strong></summary><br />
  <p>Olá, pessoa avaliadora! Espero que se encontre bem. Gostaria de informar que realizei este projeto utilizando Express.js, pois não tenho conhecimento do framework Adonis.js. Entretanto, estou disposto a aprender e a me adaptar a qualquer tecnologia que a empresa utilize. Preferi utilizar uma ferramenta que eu domino, considerando o prazo de entrega.
  <p>Além disso, criei a aplicação no modelo MSC (Model, Service, Controller), pois também é a forma que estou habituado a trabalhar e tenho domínio, mas estou disposto a aprender e a me adaptar a qualquer modelo de desenvolvimento que a empresa utilize.</p>
  <p>Para facilitar a avaliação, o projeto conta com um docker-compose e um arquivo para importação de rotas no Insomnia/Postman</p>
  
Agradeço a compreensão e a oportunidade de participar do processo seletivo. 🚀</p>

</details>

<details>
  <summary><strong>👨‍💻 O que foi desenvolvido</strong></summary><br />


Neste projeto desenvolvi uma API RESTful conectada a um banco de dados MySQL. A API foi desenvolvida utilizando o framework Express.js. A aplicação permite o cadastro de clientes, produtos e vendas, além de permitir a busca de vendas por cliente e por mês e ano. A API foi desenvolvida utilizando o padrão MSC e possui uma camada de autenticação de usuários.
</details>

# Orientações
<details>
  <summary><strong>💻 Como rodar o projeto</strong></summary><br />

  1. Clone o repositório

  - Use o comando: `git clone git@github.com:dsbellini/BeMobileTest.git`
  - Entre na pasta do repositório que você acabou de clonar:
    - `cd BeMobileTest`

  2. Instale as dependências

  - `npm install`

  3.1. Rodando a aplicação com Docker
  - Após instalar as dependências, execute o comando no terminal:
    - `docker-compose up` ou `docker-compose up -d` para rodar em segundo plano
    - Esse comando subirá um container com a aplicação e outro com o banco de dados MySQL já com dados preenchidos nas tabelas para uma melhor avaliação.

  3.2. Rodando a aplicação sem Docker
    - Para rodar a aplicação sem o Docker, é necessário remover o arquivo " .env " que está na raiz do projeto.
    - Você pode renomeá-lo ou excluir, fica a seu critério. É importante que não haja a variável de ambiente para rodar o projeto sem o Docker.
    - Após instalar as dependências e remover a variável de ambiente, execute o comando no terminal:
        - `npm start`
        - Esse comando subirá a aplicação na porta 3000
        - É importante ressaltar que é necessário ter o MySQL instalado na máquina para rodar a aplicação sem Docker.
        - Para realizar o preenchimento do banco de dados, rode o comando `npm run db:reset` para criar as tabelas e preencher com dados de teste.
</details>

<details>
  <summary><strong>📍 Testes de rotas</strong></summary><br />

  <p>Visando facilitar os testes de rotas, o projeto conta com um arquivo para importação de rotas no Insomnia/Postman.</p>

  - Utilizando o arquivo de rotas:
    - Importe o arquivo `BeMobileTest.postman.json` para o Postman ou Insomnia.
    - O arquivo contém as rotas da aplicação para facilitar a execução dos testes.

  <strong>Rotas disponíveis</strong>

  <h3>Rotas de usuário</h3>

    - POST /newuser
      - Cria um novo usuário
      - Body:
        {
            "email": "Yourname",
            "senha": "yourpassword"
        }
    
    - POST /login
        - Realiza o login do usuário
        - Retorna um token de autenticação para ser utilizado nas demais rotas. Lembre-se de adicionar o token no header Authorization da requisição para as demais rotas.
        - Body:
            {
                "email": "Yourname",
                "senha": "yourpassword"
            }
  <h3>Rotas de cliente</h3>
    
        - POST /newcustomer
        - Cria um novo cliente
        - Body:
            {
                "nome": "Yourname",
                "cpf": 123456,
            }
        
        - GET /customers
            - Retorna todos os clientes cadastrados
    
        - GET /customer/:id
            - Retorna um cliente específico
            - Parâmetros:
                - id: id do cliente

        - GET /customer/:id/sales
            - Retorna todas as vendas de um cliente específico
            - Parâmetros:
                - id: id do cliente
            - Query:
                - year: ano da venda
                - month: mês da venda
            - Exemplo de rota: http://localhost:3000/customer/1/sales?year=2023&month=2
    
        - PUT /customer/:id
            - Atualiza um cliente específico
            - Parâmetros:
                - id: id do cliente
            - Body:
                {
                    "nome": "Yourname",
                    "cpf": "1234567",
                }
    
        - DELETE /customer/:id
            - Deleta um cliente específico
            - Parâmetros:
                - id: id do cliente
  <h3>Rotas de produtos</h3>
        
            - POST /newproduct
                - Cria um novo produto
                - Body:
                    {
                        "nome": "Productname",
                        "descricao": "Productdescription",
                        "preco": 123.45,
                    }
            
            - GET /products
                - Retorna todos os produtos cadastrados
            
            - GET /product/:id
                - Retorna um produto específico
                - Parâmetros:
                    - id: id do produto
            
            - PUT /product/:id
                - Atualiza um produto específico
                - Parâmetros:
                    - id: id do produto
                - Body:
                    {
                        "nome": "Productname",
                        "descricao": "Productdescription",
                        "preco": 123.45,
                    }
            
            - DELETE /product/:id
                - Deleta um produto específico
                - Parâmetros:
                    - id: id do produto

  <h3>Rotas de vendas</h3>
            
                - POST /newsell
                    - Cria uma nova venda
                    - Body:
                        {
                            "clienteId": 1,
                            "produtoId": 1,
                            "quantidade": 1,
                            "precoUnitario": 123.45,
                            "precoTotal": 123.45,
                        }
  <h3>Rotas de telefones</h3>

                - POST /newphone
                    - Cria um novo telefone
                    - Body:
                        {
                            "clienteId": 1
                            "numero": 123456789,
                        }
                
                - GET /phones
                    - Retorna todos os telefones cadastrados
                
                - GET /phone/:id
                    - Retorna um telefone específico
                    - Parâmetros:
                        - id: id do telefone
                
                - PUT /phone/:id
                    - Atualiza um telefone específico
                    - Parâmetros:
                        - id: id do telefone
                    - Body:
                        {
                            "clienteId": 1
                            "numero": 123456789,
                        }
                
                - DELETE /phone/:id
                    - Deleta um telefone específico
                    - Parâmetros:
                        - id: id do telefone

  <h3>Rotas de endereço</h3>
    
                - POST /newaddress
                    - Cria um novo endereço
                    - Body:
                        {
                            "clienteId": 1
                            "rua": "Rua do Cliente",
                            "numero": 123,
                            "bairro": "Bairro do Cliente",
                            "cidade": "Cidade do Cliente",
                            "estado": "Estado do Cliente",
                            "cep": 12345678
                        }
                        
                - GET /addresses
                    - Retorna todos os endereços cadastrados
                
                - GET /address/:id
                   - Retorna um endereço específico
                    - Parâmetros:
                        - id: id do endereço
                        
                - PUT /address/:id
                    - Atualiza um endereço específico
                    - Parâmetros:
                        - id: id do endereço
                    - Body:
                        {
                           "clienteId": 1
                            "rua": "Rua do Cliente",
                            "numero": 123,
                            "bairro": "Bairro do Cliente",
                            "cidade": "Cidade do Cliente",
                            "estado": "Estado do Cliente",
                            "cep": 12345678
                        }
                        
                - DELETE /address/:id
                    - Deleta um endereço específico
                    - Parâmetros:
                        - id: id do endereço
    
</details>
