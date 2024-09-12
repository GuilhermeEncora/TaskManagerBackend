const express = require('express');
const userController = require('./../controllers/user-controller'); // Adjust path if needed
const middleware = require('../middlewares/auth-middleware'); // Adjust path if needed

const router = express.Router();

// Create a new user (public route)
router.post('/api/auth/signup', userController.createUser);

// Get a single user (protected route)
router.post('/api/auth/login/', userController.getUser);

// Protect all routes below with authMiddleware
router.use(middleware);

// Update a user (protected route)
router.post('/api/auth/logout/', userController.updateUser);

// Delete a user (protected route)
//router.delete('/:id', userController.deleteUser);

module.exports = router;