const connection = require('./connection');

const getAll = async () => {
  const [clients] = await connection.execute('SELECT * FROM events');
  return clients;
};

const getOne = async (id) => {
  const [oneClient] = await connection.execute('SELECT * FROM events WHERE id = ?', [id]);
  return oneClient;
};


const createClient = async (client) => {
  const { nome, email, telefone, endereco, title, msg, start } = client;
  //const dateUTC = new Date(Date.now()).toUTCString();

  const query = 'INSERT INTO events(nome, email, telefone, endereco, title, msg, start) VALUES (?, ?, ?, ?, ?, ?, ?)';

  const [createdClient] = await connection.execute(query, [nome, email, telefone, endereco, title, msg, start]);
  return {insertId: createdClient.insertId};
};

const deleteClient = async (id) => {
  const [removedClient] = await connection.execute('DELETE FROM events WHERE id = ?', [id]);
  return removedClient;
};

const updateClient = async (id, client) => {
  const { nome, email, telefone, endereco, title, msg, start } = client;
  
  const query = 'UPDATE tasks SET nome = ?, email = ?, telefone = ?, endereco = ?, title = ?, msg = ?, start = ? WHERE id = ?';

  const [updatedClient] = await connection.execute(query, [nome, email, telefone, endereco, title, msg, start, id]);
  return updatedClient;
};

module.exports = {
  getAll,
  getOne,
  createClient,
  deleteClient,
  updateClient,
};
