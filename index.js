const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const { verifyToken } = require('./auth/auth'); // Importe as funções JWT

const router = express.Router();

// router.get('/tarefas', verifyToken, (req, res) => {
//   // ... lógica para buscar tarefas do usuário autenticado (req.user)
// });

// module.exports = router;


// app.get('/', (req, res) => {
//   res.send('Olá do Task Manager Backend!');
// });

// Conecte ao MongoDB
mongoose.connect('mongodb://root:cdSynthesis@task-manager-mongodb:27017/task-manager?authSource=admin', {
})

.then(() => {
  console.log('Conectado ao MongoDB!');
})
.catch((error) => {
  console.error('Erro ao conectar ao MongoDB:', error);
});

// Resto do seu código Express (rotas, middlewares, etc.)

app.listen(port, () => {
  console.log(`Seervidor rodando em http://localhost:${port}`);
});