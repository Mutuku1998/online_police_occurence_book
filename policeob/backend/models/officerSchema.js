const mongoose = require("mongoose");

const officerSchema = new mongoose.Schema({
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
    default: "officer",
  },
  nationalid:{
    type:String,
    required: true
  },
  county:{
    type:String
  }

});

module.exports = mongoose.model("officers", officerSchema);
