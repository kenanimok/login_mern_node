const express = require("express");
const router = express.Router();

const { listUser, updateUser, removeUser } = require("../contrllers/users");
// const { auth } = require("../middleware/auth");

//http://localhost:4000/api/users
router.get("/users", listUser);

router.delete("/remove/:id", removeUser);

// router.post("/auth", register);

// router.post("/login", login);

module.exports = router;
