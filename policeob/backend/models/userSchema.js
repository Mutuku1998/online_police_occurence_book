const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  password: {
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
  nationalid:{
    type:String,
    required:true,
  },
  county:{
    type:String,
  }
});

module.exports = mongoose.model("users", userSchema);
