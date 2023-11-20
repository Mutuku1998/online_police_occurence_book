
const Officer = require("../models/officerSchema");

const updateOfficer = async (req, res) => {
  const id = req.params.id;
  try {
    const updateOfficer = await Officer.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    res
      .status(200)
      .json({
        success: true,
        message: "officer updated successfully",
        data: updateOfficer,
      });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "failed, try again later" });
  }
};

const deleteOfficer = async (req, res) => {
  const id = req.params.id;
  try {
    await Officer.findByIdAndDelete(id);

    res
      .status(200)
      .json({ success: true, message: "officer deleted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "failed, try again later" });
  }
};

const getSingleofficer = async (req, res) => {
  const id = req.params.id;

  try {
    const officer = await Officer.findById(id);

    res.status(200).json({ success: true, message: "officer found", data: officer });
  } catch (err) {
    res.status(404).json({ success: false, message: "officer not found" });
  }
};

const getAllofficers = async () => {
  try {
    const officers = await Officer.find({}).select("-password");

    res
      .status(200)
      .json({ success: true, message: "users found", data: officers });
  } catch (err) {
    res.status(404).json({ success: false, message: "users not found" });
  }
};

module.exports = {updateOfficer,deleteOfficer,getAllofficers,getSingleofficer}