const bcrypt = require("bcryptjs");
const User = require("../model/User");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    // Check user
    const { username, password } = req.body;
    let user = await User.findOne({ username });
    if (user) {
      return res.status(400).send("User ซ้ำ Already exists t");
    }
    const salt = await bcrypt.genSalt(10);
    user = new User({
      username,
      password,
    });

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

exports.login = async (req, res) => {
  try {
    console.log(req.body);
    const { username, password } = req.body;
    var user = await User.findOneAndUpdate({ username }, { new: true });
    if (user && user.enabled) {
      // Check Password
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).send("Password Invalid!!");
      }
      // Payload
      const payload = {
        user: {
          username: user.username,
          role: user.role,
        },
      };
      // Generate Token
      jwt.sign(payload, "jwtSecret", { expiresIn: 3600 }, (err, token) => {
        if (err) throw err;
        res.json({ token, payload });
      });
      // res.send("login success");
    } else {
      return res.status(400).send("User Not found!!!");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error!");
  }
};

exports.currentUser = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.user.username })
      .select("-password")
      .exec();
    res.send(user);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error!");
  }
};

// exports.readUsers = async (req, res) => {
//   try {
//     // Code
//     const id = req.params.id;
//     const user = await User.findOne({ _id: id }).select("-password").exec();
//     res.send(user);
//   } catch (err) {
//     console.log(err);
//     res.status(500).send("Server Error!");
//   }
// };
