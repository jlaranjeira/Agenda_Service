const express = require('express');
const router = express.Router();

const AgController = require('./controllers/AgController');

router.get('/clients', AgController.buscarTodos);
router.get('/client/:id', AgController.buscarUm);
router.post('/client', AgController.inserir);
router.put('/client/:id', AgController.alterar);
router.delete('/client/:id', AgController.excluir);

module.exports = router;

