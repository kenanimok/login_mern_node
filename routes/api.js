const express = require("express");
const router = express.Router();

const { register, listUser, login } = require("../contrllers/auth");
// const { auth } = require("../middleware/auth");

//http://localhost:4000/api/auth
router.get("/auth", listUser);

router.post("/regis", register);

router.post("/login", login);

//teest auth
// router.get("/test", auth, (req, res) => res.send("yeye"));

//no auth
// router.get("/test", (req, res) => {
//   res.send("yeyeyeye");
// });

module.exports = router;
