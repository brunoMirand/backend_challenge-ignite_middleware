const { isUserCourtesy } = require('../service/userService');

const checksCreateTodosUserAvailability = (request, response, next) => {
  const { user } = request;
  if (isUserCourtesy) {
    next();
  }

  if (!user.pro) {
    return response.status(403).json({
      message: 'user not is plan pro'
    });
  }

  next();
}

module.exports = checksCreateTodosUserAvailability;
