const bcrypt = require("bcryptjs");
const User = require("../model/User");

exports.listUser = async (req, res) => {
  try {
    const user = await User.find({}).select("-password").exec();
    // var enPassword = await bcrypt.hash(password, salt);

    // const user = await User.find({});
    res.send(user);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
};

exports.updateUser = async (req, res) => {
  console.log(req.body);
  try {
    // Code
    var { _id, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    var enPassword = await bcrypt.hash(password, salt);

    const user = await User.findOneAndUpdate(
      { _id: _id },
      { password: enPassword }
    );
    res.send(user);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error!");
  }
};

exports.removeUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findOneAndDelete({ _id: id });
    res.send(user);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
};

exports.changeStatus = async (req, res) => {
  try {
    // Code
    console.log(req.body);
    const user = await User.findOneAndUpdate(
      { _id: req.body._id },
      { enabled: req.body.enabled }
    );
    res.send(user);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error!");
  }
};

exports.changRole = async (req, res) => {
  try {
    console.log(req.body);
    const user = await User.findOneAndUpdate(
      { _id: req.body._id },
      { role: req.body.role }
    );
    res.send(user);
  } catch (err) {
    console.log(err);
    res.status(500).send("server Error");
  }
};
