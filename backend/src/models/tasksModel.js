const connection = require('./connection');

const getAll = async () => {
  const [tasks] = await connection.execute('SELECT * FROM events');
  return tasks;
};

const createTask = async (task) => {
  const { nome, email, telefone, endereco, title, msg, start } = task;
  const dateUTC = new Date(Date.now()).toUTCString();

  const query = 'INSERT INTO events(nome, email, telefone, endereco, title, msg, start) VALUES (?, ?, ?, ?, ?, ?, ?)';

  const [createdTask] = await connection.execute(query, [nome, email, telefone, endereco, title, msg, start]);
  return {insertId: createdTask.insertId};
};

const deleteTask = async (id) => {
  const [removedTask] = await connection.execute('DELETE FROM events WHERE id = ?', [id]);
  return removedTask;
};

const updateTask = async (id, task) => {
  const { title, status } = task;
  
  const query = 'UPDATE tasks SET title = ?, status = ? WHERE id = ?';

  const [updatedTask] = await connection.execute(query, [title, status, id]);
  return updatedTask;
};

module.exports = {
  getAll,
  createTask,
  deleteTask,
  updateTask,
};
