const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// CRUD routes
router.post('/users', userController.createUser);
router.get('/user', userController.getAllUser);
router.get('/user/:id', userController.getUserById);
router.put('/user/:id', userController.updateUser);
router.delete('/user/:id', userController.deleteUser);

module.exports = router;