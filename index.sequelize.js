require("dotenv").config();
const express = require("express");
const db = require("./sequelize/config/db");
const userRoute = require("./sequelize/routes/user.route");

const app = express();
app.use(express.json());
app.use("/user", userRoute);

db.sequelize.sync({ force: false }).then(() => {
  console.log("[Sequelize] Database connected and synced!");
  app.listen(3000, () => {
    console.log("Express server with sequelize started...");
  });
});
