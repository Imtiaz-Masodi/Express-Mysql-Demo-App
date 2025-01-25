const router = require("express").Router();
const { fetchAllUsers, insertUser } = require("../controllers/user.controller");

router.get("/", fetchAllUsers);
router.post("/", insertUser);

module.exports = router;
