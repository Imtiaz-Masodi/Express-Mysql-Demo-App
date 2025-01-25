const { insertUser, fetchAllUsers } = require("../models/userModel");

async function getAllUsers(req, res) {
  try {
    const response = await fetchAllUsers();
    res.send(response);
  } catch (ex) {
    res.status(500).send(`Server Error. ${ex.message}`);
  }
}

async function createUser(req, res) {
  try {
    const response = await insertUser(req.body);
    res.send(response);
  } catch (ex) {
    res.status(500).send(`Server Error. ${ex.message}`);
  }
}

module.exports = {
  getAllUsers,
  createUser,
};
