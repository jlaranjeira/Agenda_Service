const clientsModel = require('../models/clientsModel');

const getAll = async (_request, response) => {
  const clients = await clientsModel.getAll();
  return response.status(200).json(clients);
};

const createClient = async (request, response) => {
  const createdClient = await clientsModel.createClient(request.body);
  return response.status(201).json(createdClient);
};

const deleteClient = async (request, response) => {
  const { id } = request.params;

  await clientsModel.deleteClient(id);
  return response.status(204).json();
};

const updateClient = async (request, response) => {
  const { id } = request.params;

  await clientsModel.updateClient(id, request.body);
  return response.status(204).json();
};

module.exports = {
  getAll,
  createClient,
  deleteClient,
  updateClient,
};
