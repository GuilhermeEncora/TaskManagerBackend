const express = require('express');
const taskController = require('./../controllers/task-controller'); // Adjust path if needed
const authMiddleware = require('../middlewares/auth-middleware'); // Adjust path if needed

const router = express.Router();

// Create a new user (public route)
router.get('/api/tasks', taskController.getAllTasks);

// Protect all routes below with authMiddleware
//router.use(authMiddleware);

// Get a single user (protected route)
router.post('/api/tasks', taskController.createTask);

// Create a new user (public route)
router.get('/api/tasks/:id', taskController.getTask);

// Update a user (protected route)
router.put('/api/tasks/:id', taskController.updateTask);

// Delete a user (protected route)
router.delete('/api/tasks/:id/', taskController.deleteTask);

// Delete a user (protected route)
//router.delete('/:id', taskController.deleteUser);

module.exports = router;