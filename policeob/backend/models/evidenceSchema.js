const mongoose = require("mongoose");

const evidenceSchema = new mongoose.Schema({
  type:File,
});
module.exports = mongoose.model("evidence", evidenceSchema);
