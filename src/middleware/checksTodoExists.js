const { findUserByUsername } = require('../service/userService');
const { validate: isUUIDType } = require('uuid');

const checksTodoExists = (request, response, next) => {
  const { headers: { username }, params: { id } } = request;

  const user = findUserByUsername(username);
  if (!user) {
    return response.status(404).json({ error: 'Username not found' });
  }

  if (!isUUIDType(id)) {
    return response.status(400).json({ error: 'id not is uuid type' });
  }

  const task = user.todos.find(todo => todo.id === id);
  if (!task) {
    return response.status(404).json({ error: 'id does not belong in users to-do list' });
  }

  request.user = user;
  request.todo = task;

  next();
}

module.exports = checksTodoExists;
