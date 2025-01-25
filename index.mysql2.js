require("dotenv").config();
const express = require("express");
const userRoute = require("./mysql2/routes/userRoute");

const app = express();
app.use(express.json());
app.use("/user", userRoute);

app.get("/", (req, res) => {
  res.send("Express-Mysql2 server up and running");
});

app.listen(3000, () => {
  console.log("Express server with mysql2 started");
});
