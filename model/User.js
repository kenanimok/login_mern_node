const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
    },
    password: {
      type: String,
    },
    role: {
      type: String,
      default: "admin",
    },
    enabled: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);
module.exports = User = mongoose.model("users", UserSchema);
