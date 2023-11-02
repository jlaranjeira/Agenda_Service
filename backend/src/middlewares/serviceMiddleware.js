const validateFieldNome = (request, response, next) => {
  const { body } = request;

  if (body.nome === undefined) {
    return response.status(400).json({ message: 'The field "nome" is required' });
  }

  if (body.nome === '') {
    return response.status(400).json({ message: 'nome cannot be empty' });
  }

  next();
};

const validateFieldStatus = (request, response, next) => {
  const { body } = request;

  if (body.status === undefined) {
    return response.status(400).json({ message: 'The field "status" is required' });
  }

  if (body.status === '') {
    return response.status(400).json({ message: 'status cannot be empty' });
  }

  next();
};

module.exports = {
  validateFieldStatus,
  validateFieldNome,
};
