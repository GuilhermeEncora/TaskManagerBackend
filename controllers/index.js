// index.js
const express = require('express');
const userController = require('./user-controller');
const taskController = require('./task-controller');
const axios = require('axios');

const app = express();
app.use(express.json()); // Middleware para parsear JSON

const port = 3000;

// Rotas de Usuário
app.post('/users', (req, res) => userController.createUser(req, res));
// app.get('/users', userController.getAllUsers);
// app.get('/users/:id', userController.getUser);
// app.put('/users/:id', userController.updateUser);
// app.delete('/users/:id', userController.deleteUser);

// Rotas de Tarefas
// app.post('/tasks', taskController.createTask);
// app.get('/tasks', taskController.getAllTasks);
// app.get('/tasks/:id', taskController.getTask);
// app.put('/tasks/:id', taskController.updateTask);
// app.delete('/tasks/:id', taskController.deleteTask');

// Iniciar o servidor e testar a rota
const startServerAndTest = async () => {
    app.listen(port, async () => {
        console.log(`Server listening on port ${port}`);

        const userData = {
            "nome": "Exemplo de Usuário",
            "email": "exemplo@email.com",
            "senha": "senha123",
            "last_token": "lastTokenExemplo"
        };

        try {
            // Faz a requisição POST para a rota '/users'
            const response = await axios.post(`http://localhost:${port}/users`, userData, { timeout: 15000 });
            console.log('Usuário criado automaticamente:', response.data);
        } catch (error) {
            console.error('Erro ao criar usuário automaticamente:', error);
        }
    });
};

module.exports = startServerAndTest;
