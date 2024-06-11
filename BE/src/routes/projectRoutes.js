const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

// CRUD routes
router.post('/project', projectController.createProject);
router.get('/project', projectController.getAllProject);
router.get('/project/:id', projectController.getProjectById);
router.put('/project/:id', projectController.updateProject);
router.delete('/project/:id', projectController.deleteProject);

module.exports = router;