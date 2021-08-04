const { findUserByUsername } = require('../service/userService');

const checksExistsUserAccount = (request, response, next) => {
  const { headers: { username } } = request;

  const user = findUserByUsername(username);
  if (!user) {
    return response.status(404).json({
      message: 'User not found'
    });
  }

  request.user = user;
  next();
}

module.exports = checksExistsUserAccount;
