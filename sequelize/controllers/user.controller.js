const User = require("../models/user.model");

function insertUser(req, res) {
  try {
    const { name, email } = req.body;
    User.create({ name, email })
      .then((data) => {
        res.send({ message: "User created!", user: data });
      })
      .catch((ex) => {
        res.status(400).send(`Error occurred. ${ex.message}`);
      });
  } catch (ex) {
    res.status(500).send(`Server error, ${ex.message}`);
  }
}

function fetchAllUsers(req, res) {
  try {
    User.findAll().then((data) => {
      res.send({ message: "Users list fetched!", users: data });
    });
  } catch (ex) {
    res.status(500).send(`Server error, ${ex.message}`);
  }
}

module.exports = {
  insertUser,
  fetchAllUsers,
};
