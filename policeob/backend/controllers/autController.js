const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/userSchema");
const Officer = require("../models/officerSchema");

// Generate tokens
const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: "60d",
    }
  );
};

// Register user
const register = async (req, res) => {
  const { fullname, password, role, email } = req.body;

  try {
    let user = null;

    if (role === "reporter") {
      user = await User.findOne({ email });
    } else if (role === "officer") {
      user = await Officer.findOne({ email });
    }

    // Check if user exists
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hashing password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    if (role === "reporter") {
      user = new User({
        fullname,
        password: hashedPassword,
        role,
        email,
      });
    }

    if (role === "officer") {
      user = new Officer({
        fullname,
        password: hashedPassword,
        email,
        role,
      });
    }

    await user.save();

    res
      .status(200)
      .json({ message: "User created successfully", success: true });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to register, try again" });
  }
};

// User login
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = null;

    const reporter = await User.findOne({ email });
    const officer = await Officer.findOne({ email });

    if (reporter) {
      user = reporter;
    }
    if (officer) {
      user = officer;
    }

    // Checking if user exists in the database
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare the password
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res
        .status(400)
        .json({ status: false, message: "Incorrect password or email" });
    }

    const token = generateToken(user);

    const { password: userPassword, role, ...rest } = user._doc;
    res
      .status(200)
      .json({
        status: true,
        message: "Successful login",
        token,
        data: { ...rest },
        role,
      });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to login" });
  }
};

module.exports = { register, login };
