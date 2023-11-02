const serviceModel = require('../models/serviceModel');

const getAllService = async (_request, response) => {
  const service = await serviceModel.getAll();
  return response.status(200).json(service);
};

const createService = async (request, response) => {
  const createdService = await serviceModel.createService(request.body);
  return response.status(201).json(createdService);
};

const deleteService = async (request, response) => {
  const { id } = request.params;

  await serviceModel.deleteService(id);
  return response.status(204).json();
};

const updateService = async (request, response) => {
  const { id } = request.params;

  await serviceModel.updateService(id, request.body);
  return response.status(204).json();
};

module.exports = {
  getAllService,
  createService,
  deleteService,
  updateService,
};
