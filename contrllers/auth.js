const bcrypt = require("bcryptjs");
const User = require("../model/User");

exports.register = async (req, res) => {
  try {
    // Check user
    const { username, password } = req.body;
    var user = await User.findOne({ username });
    if (user) {
      return res.status(400).send("User ซ้ำ Already exists t");
    }
    const salt = await bcrypt.genSalt(10);
    user = new User({
      username,
      password,
    });
    // Encrypt
    user.password = await bcrypt.hash(password, salt);
    await user.save();

    res.send("Register Success");
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error!");
  }
};

exports.listUser = async (req, res) => {
  try {
    res.send("listUser success");
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
};
