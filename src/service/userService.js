const users = [];

const findUserByUsername = (username) => {
  const user = users.find(user => user.username === username);
  if (!user) {
    return false;
  }

  return user;
}

const isUserCourtesy = (user) => {
  const todoCreationLimit = 10;

  return (!user.pro && user.todos.length < todoCreationLimit);
}

module.exports = {
  users,
  findUserByUsername,
  isUserCourtesy
}
