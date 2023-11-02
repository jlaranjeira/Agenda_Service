const express = require('express');

const router = express.Router();

const tasksController = require('./controllers/tasksController');
const tasksMiddleware = require('./middlewares/tasksMiddleware');
const serviceController = require('./controllers/serviceController');
const serviceMiddleware = require('./middlewares/serviceMiddleware');


router.get('/tasks', tasksController.getAll);
router.post('/tasks', tasksMiddleware.validateFieldTitle, tasksController.createTask);
router.delete('/tasks/:id', tasksController.deleteTask);
router.put('/tasks/:id',
  tasksMiddleware.validateFieldTitle,
  tasksMiddleware.validateFieldStatus,
  tasksController.updateTask,
);

///Routes Service
router.get('/services', serviceController.getAllService);
router.post('/service', serviceMiddleware.validateFieldNome, serviceController.createService);
router.delete('/services/:id', serviceController.deleteService);
router.put('/services/:id',
  serviceMiddleware.validateFieldNome,
  serviceMiddleware.validateFieldStatus,
  serviceController.updateService,
);


module.exports = router;