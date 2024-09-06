const express = require('express');
const userController = require('./user-controller');
const taskController = require('./task-controller');
const axios = require('axios');

const app = express();
app.use(express.json()); // Middleware para analisar corpos de requisição JSON

// Rotas de Usuários
// app.post('/users', (req, res) => userController.createUser(req, res));
// app.get('/users', userController.getAllUsers);
// app.get('/users/:id', userController.getUser);
// app.put('/users/:id', userController.updateUser);
// app.delete('/users/:id', userController.deleteUser);

// // Rotas de Tarefas
// app.post('/tasks', taskController.createTask);
// app.get('/tasks', taskController.getAllTasks);
// app.get('/tasks/:id', taskController.getTask);
// app.put('/tasks/:id', taskController.updateTask);
// app.delete('/tasks/:id', taskController.deleteTask);

// Função para iniciar o servidor e testar a criação de um usuário
async function startServer() {
  // Inicie o servidor Express
  app.listen(6000, () => {
    console.log('Server listening on port 3000');
  });

  // Dados do usuário para teste
  const userData = {
    nome: "Exemplo de Usuário",
    email: "exemplo@email.com",
    senha: "senha123",
    last_token: "lastTokenExemplo"
  };

  // Faz a requisição POST para a rota '/users'
  try {
    const response = await axios.post(`http://localhost:3000/users`, userData);
    console.log('Usuário criado automaticamente:', response.data);
  } catch (error) {
    console.error('Erro ao criar usuário automaticamente:', error);
  }
};

// Inicie o servidor e faça o teste
startServer();
