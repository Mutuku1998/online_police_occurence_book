const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/userSchema");
const Officer = require("../models/officerSchema");

// Constants
const ROLES = {
  REPORTER: "reporter",
  OFFICER: "officer",
};

// Generate tokens
const generateToken = (user) => {
  const secretKey = process.env.JWT_SECRET_KEY || 'fallbacksecretkey';
  return jwt.sign({ id: user._id, role: user.role }, secretKey, { expiresIn: "60d" });
};


// Register user
const register = async (req, res) => {
  const { fullname, password, role, email, county, nationalid } = req.body;

  try {
    let user = null;

    if (role === ROLES.REPORTER) {
      user = await User.findOne({ email });
    } else if (role === ROLES.OFFICER) {
      user = await Officer.findOne({ email });
    }

    // Check if user exists
    if (user) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }

    // Hashing password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    if (role === ROLES.REPORTER) {
      user = new User({
        fullname,
        password: hashedPassword,
        role,
        email,
        nationalid,
        county,
      });
    } else if (role === ROLES.OFFICER) {
      user = new Officer({
        fullname,
        password: hashedPassword,
        email,
        role,
        nationalid,
        county,
      });
    }

    await user.save();

    res.status(200).json({ success: true, message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to register, try again" });
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
    } else if (officer) {
      user = officer;
    }

    // Checking if user exists in the database
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // Compare the password
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(400).json({ success: false, message: "Incorrect password or email" });
    }

    const token = generateToken(user);

    const { password: userPassword, role, ...rest } = user._doc;
    res.status(200).json({
      success: true,
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
