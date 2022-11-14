const express = require("express");
const router = express.Router();

const { register, listUser } = require("../contrllers/auth");

// router.get("/", (req, res) => {
//   res.send("hello api ken 55");
// });

//http://localhost:4000/api/auth
router.get("/auth", listUser);

router.post("/aut", register);

module.exports = router;
