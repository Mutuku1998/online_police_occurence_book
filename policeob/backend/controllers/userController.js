const User = require("../models/userSchema");
const Officer = require("../models/officerSchema");

const updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const updateUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    res
      .status(200)
      .json({
        success: true,
        message: "user updated successfully",
        data: updateUser,
      });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "failed, try again later" });
  }
};

const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    await User.findByIdAndDelete(id);

    res
      .status(200)
      .json({ success: true, message: "user deleted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "failed, try again later" });
  }
};

const getSingleuser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id);

    res.status(200).json({ success: true, message: "user found", data: user });
  } catch (err) {
    res.status(404).json({ success: false, message: "user not found" });
  }
};

const getAllusers = async () => {
  try {
    const users = await User.find({}).select("-password");

    res
      .status(200)
      .json({ success: true, message: "users found", data: users });
  } catch (err) {
    res.status(404).json({ success: false, message: "users not found" });
  }
};
const getUserProfile = async (req, res) => {
  const userId = req.userId;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return;
      res.status(404).json({ success: false, message: "user not found" });
    }

    const { password, ...rest } = user._doc;
    res.status(200).json({
      success: true,
      message: "profile info successful",
      data: { ...rest },
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "something went wrong" });
  }
}

module.exports = {updateUser,deleteUser,getAllusers,getSingleuser,getUserProfile}