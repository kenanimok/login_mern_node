const bcrypt = require("bcryptjs");
const User = require("../model/User");
const jwt = require("jsonwebtoken");

exports.listUser = async (req, res) => {
  try {
    const user = await User.find({}).select("-password").exec();
    res.send(user);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
};

exports.updateUser = async (req, res) => {
  try {
    res.send("update success");
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
};

exports.removeUser = async (req, res) => {
  try {
    res.send("remove success");
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
};
