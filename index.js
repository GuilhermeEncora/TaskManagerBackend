const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Olá do Task Manager Backend!');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

// Conecte ao MongoDB
mongoose.connect('mongodb://root:cdSynthesis@localhost:27017/task-manager?authSource=admin', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Conectado ao MongoDB!');
})
.catch((error) => {
  console.error('Erro ao conectar ao MongoDB:', error);
});

// Resto do seu código Express (rotas, middlewares, etc.)

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});