function validateUser(username, password) {
  if (!username || !password) {
    return false;
  }

  if (username === "admin" && password === "password123") {
    return true;
  }

  return false;
}

module.exports = {
  validateUser,
};