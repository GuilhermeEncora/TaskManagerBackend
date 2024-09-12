# Define a imagem base Node.js 18
FROM node:18

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

EXPOSE 6000

# Comando para iniciar a aplicação
CMD ["npm","run","start"]
#CMD ["node", "./controllers/index.js"]
