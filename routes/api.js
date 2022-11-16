const express = require("express");
const router = express.Router();

const {
  register,
  listUser,
  login,
  currentUser,
} = require("../contrllers/auth");
const { auth, adminCheck } = require("../middleware/auth");

//http://localhost:4000/api/auth
router.get("/auth", listUser);

//@Endpoint  http://localhost:4000/api/regis
router.post("/regis", register);

//@Endpoint  http://localhost:4000/api/login
router.post("/login", login);

//@Endpoint  http://localhost:4000/api/current-admin

router.post("/current-admin", auth, adminCheck, currentUser);

//@Endpoint  http://localhost:4000/api/current-user
router.post("/current-user", auth, currentUser);

//teest auth
// router.get("/test", auth, (req, res) => res.send("yeye"));

//no auth
// router.get("/test", (req, res) => {
//   res.send("yeyeyeye");
// });

module.exports = router;
