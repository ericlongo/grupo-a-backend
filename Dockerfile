# Usa a imagem base do Node.js com a versão LTS
FROM node:latest

# Define o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copia o package.json e o package-lock.json (ou yarn.lock) para o diretório de trabalho
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install
RUN npm add @adonisjs/hash

# Copia todos os arquivos do projeto para o diretório de trabalho
COPY . .

# Compila o projeto (se necessário)
RUN npm run build

# Expõe a porta que a aplicação AdonisJS vai rodar
EXPOSE 3333

# Comando para rodar a aplicação
CMD ["node", "build/server.js"]