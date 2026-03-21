const userModel = require("../models/user.model");

async function registerUser(req, res) {
  const { username, email, password } = req.body;
}

module.exports = { registerUser };
