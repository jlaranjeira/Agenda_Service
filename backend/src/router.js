const express = require('express');

const router = express.Router();

const clientsController = require('./controllers/clientsController');
const clientsMiddleware = require('./middlewares/clientsMiddleware');
const serviceController = require('./controllers/serviceController');
const serviceMiddleware = require('./middlewares/serviceMiddleware');


router.get('/clients', clientsController.getAll);
router.get('/clients/:id', clientsController.getOne);
router.post('/client', clientsMiddleware.validateFieldNome, clientsController.createClient);
router.delete('/clients/:id', clientsController.deleteClient);
router.put('/clients/:id',
  clientsMiddleware.validateFieldNome,
  //clientsMiddleware.validateFieldStatus,
  clientsController.updateClient,
);

///Routes Service
router.get('/services', serviceController.getAllService);
router.get('/services/:id', serviceController.getOneService);
router.post('/service', serviceMiddleware.validateFieldNome, serviceController.createService);
router.delete('/services/:id', serviceController.deleteService);
router.put('/services/:id',
  serviceMiddleware.validateFieldNome,
  //serviceMiddleware.validateFieldStatus,
  serviceController.updateService,
);


module.exports = router;