const db = require("../config/db");

const insertUser = async (userData) => {
  const { name, email } = userData;
  const [result] = await db.execute(
    "INSERT INTO users (name, email) VALUES (?, ?)",
    [name, email]
  );
  return { id: result.insertId, name, email };
};

const fetchAllUsers = async () => {
  const [rows, fields] = await db.execute("SELECT * FROM users");
  return { rows, fields };
};

module.exports = {
  insertUser,
  fetchAllUsers,
};
