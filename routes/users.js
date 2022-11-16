const express = require("express");
const router = express.Router();

const {
  listUser,
  updateUser,
  removeUser,
  changeStatus,
} = require("../contrllers/users");
// const { auth } = require("../middleware/auth");

//http://localhost:4000/api/listusers
router.get("/listusers", listUser);

//http://localhost:4000/api/remove/637319741660b7e4f570ae35
router.delete("/remove/:id", removeUser);

//
router.put("/update/:id", updateUser);

router.put("/status", changeStatus);

module.exports = router;
