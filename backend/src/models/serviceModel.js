const connection = require('./connection');

const getAll = async () => {
  const [service] = await connection.execute('SELECT * FROM service');
  return service;
};

const getOneService = async (id) => {
  const [oneService] = await connection.execute('SELECT * FROM service WHERE id = ?', [id]);
  return oneService;
};

const createService = async (service) => {
  const { nome, description, price } = service;
  //const dateUTC = new Date(Date.now()).toUTCString();

  const query = 'INSERT INTO service(nome, description, price) VALUES (?, ?, ?)';

  const [createdService] = await connection.execute(query, [nome, description, price]);
  return {insertId: createdService.insertId};
};

const deleteService = async (id) => {
  const [removedService] = await connection.execute('DELETE FROM service WHERE id = ?', [id]);
  return removedService;
};

const updateService = async (id, service) => {
  const { nome, description, price } = service;
  
  const query = 'UPDATE service SET nome = ?, description = ?, price = ? WHERE id = ?';

  const [updatedService] = await connection.execute(query, [nome, description, price, id]);
  return updatedService;
};

module.exports = {
  getAll,
  getOneService,
  createService,
  deleteService,
  updateService,
};
