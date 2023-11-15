const mongoose = require("mongoose");

const suspectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: Number,
    required: true,
  },
  relationship: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("suspects", suspectSchema);
