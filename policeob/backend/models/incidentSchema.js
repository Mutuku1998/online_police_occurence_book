const mongoose = require("mongoose");

const incidentSchema = new mongoose.Schema({
  typeofincident: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
  },
  location: {
    type: String,
    required: true,
  },
  narrative: {
    type: String,
  },
});

module.exports = mongoose.model("incident", incidentSchema);
