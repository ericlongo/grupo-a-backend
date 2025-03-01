# Projeto Backend Node

Este projeto é um backend desenvolvido em Adonisjs e containerizado com Docker. O projeto foi criado com o kit API e o banco de dados MySQL.

## Pré-requisitos

Antes de iniciar, certifique-se de ter os seguintes requisitos instalados em sua máquina:

- Node.js (recomendado: última versão LTS)
- Docker e Docker Compose

## Como rodar o projeto

### Utilizando Docker

Para rodar o projeto localmente utilizando Docker, siga os passos abaixo:

1. Faça o build do container:

   ```bash
   docker-compose up --build
3. Para entrar no containner:

   ```bash
    docker exec -it back-end-app-1 bash
4. Para confirmar a conexão com o banco de dados, após estar no container

   ```bash
   node teste-db.js
5. Copie o .env.example para .env
    
O projeto estará disponível em http://localhost:3333 (ou na porta configurada no docker-compose.yml).

### Sem utilizar Docker

1. Instale as dependências:

   ```bash
   npm install -g @adonisjs/cli
2. Inicie o servidor:

   ```bash
   node ace serve --hmr
3. Copie o .env.example para .env

O projeto estará disponível em http://localhost:3333 (ou na porta configurada no docker-compose.yml).

## Acesso

Usuário: admin@maisedu.com.br
Senha: 123456
   
