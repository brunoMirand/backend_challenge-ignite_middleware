const { users } = require("../service/userService");

const findUserById = (request, response, next) => {
  const { params: { id } } = request;

  const user = users.find(user => user.id === id);
  if (!user) {
    return response.status(404).json({message: 'User not found'});
  }

  request.user = user;

  next();
}

module.exports = findUserById;
