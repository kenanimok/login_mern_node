const express = require("express");
const router = express.Router();

const {
  listUser,
  updateUser,
  removeUser,
  changeStatus,
  changRole,
  readUsers,
} = require("../contrllers/users");
const { auth, adminCheck } = require("../middleware/auth");

// http://localhost:4000/api/listusers
router.get("/listusers", listUser);

//@Endpoint  http://localhost:4000/api/users/:id
router.get("/users/:id", readUsers);

// http://localhost:4000/api/remove/637319741660b7e4f570ae35
router.delete("/remove/:id", removeUser);

// http://localhost:4000/api/update/637319741660b7e4f570ae35
router.put("/update/:id", updateUser);

//http://localhost:4000/api/status
router.put("/change-status", changeStatus);

//http://localhost:4000/api/role
router.put("/change-role", changRole);

module.exports = router;
