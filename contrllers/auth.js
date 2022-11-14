exports.register = async (req, res) => {
  try {
    res.send("regis success");
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
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
