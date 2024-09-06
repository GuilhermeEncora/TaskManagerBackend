const express = require('express');
const userController = require('./user-controller'); // Adjust path if needed
const authMiddleware = require('../middlewares/auth-middleware'); // Adjust path if needed

const router = express.Router();

// Create a new user (public route)
router.post('/', userController.createUser);

// Protect all routes below with authMiddleware
//router.use(authMiddleware);

// Get all users (protected route)
router.get('/', userController.getAllUsers);

// Get a single user (protected route)
router.get('/:id', userController.getUser);

// Update a user (protected route)
router.put('/:id', userController.updateUser);

// Delete a user (protected route)
router.delete('/:id', userController.deleteUser);

module.exports = router;