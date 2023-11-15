const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  Fullname: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    enum: ["reporter", "officer"],
    default: "reporter",
  },
});

module.exports = mongoose.model("users", userSchema);
