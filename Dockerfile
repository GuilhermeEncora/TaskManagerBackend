# Define a imagem base Node.js 16
FROM node:16-alpine

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia o arquivo package.json e package-lock.json 
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código fonte
COPY . .

# Define a porta que a aplicação irá escutar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
