const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// GET all users
router.get('/users', UserController.getAllUsers);

// GET user by ID
router.get('/users/:id', UserController.getUserById);

// POST register new user
router.post('/users/register', UserController.registerUser);

// POST login user
router.post('/users/login', UserController.loginUser);

// PUT update user profile
router.put('/users/:id', UserController.updateUserProfile);

// DELETE user account
router.delete('/users/:id', UserController.deleteUserAccount);

// PATCH route to update user by ID
router.patch('/users/:id', UserController.updateUser);

// PUT route to replace user by ID
router.put('/users/replace/:id', UserController.replaceUser);

module.exports = router;
