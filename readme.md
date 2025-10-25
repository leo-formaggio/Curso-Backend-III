# Projeto Backend III Coderhouse - Users & Pets API

API desenvolvida com Node.js, Express, MongoDB Atlas, Mongoose, Faker.js e Docker.
O objetivo é criar e relacionar usuários e seus pets, testar rotas via Postman e gerar dados mockados.

## Tecnologias Utilizadas

 - NodeJS
 - Express
 - NPM
 - MongoDB Atlas
 - Postman
 - Docker

### Projeto realizado para prática de Backend e integração com banco de dados em nuvem.

## Exemplo de configuração do [Docker](https://www.docker.com/products/docker-desktop/): 

``` javascript 

- Crie o arquivo Dockerfile:

FROM node:18

# Define diretório interno do app
WORKDIR /app

# Copia arquivos de dependências
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia todo o restante do código
COPY . .

# Porta em que o servidor será exposto
EXPOSE 8080

# Comando para iniciar a aplicação
CMD ["npm", "run", "dev"]

-----------------------------

 - Crie o arquivo dockerignore:

 node_modules
.env
.git