const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/UserModel");
const { OtpModel } = require("../models/OtpModel");
const { sendEmail } = require("../utils/sendEmail");

// Step 1: Request OTP
const register = async (req, res) => {
  try {
    const { name, email, password, year, department } = req.body;
    if (!email) return res.status(400).json({ message: "Email is required" });

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    await OtpModel.create({ email, otp });

    await sendEmail(email, "CampusBuddy OTP Verification", `<h3>Your OTP is <b>${otp}</b></h3>`);
    res.status(200).json({ message: "OTP sent to email" });
  } catch (err) {
    console.error("Register error:", err);
    res.status(500).json({ message: "Failed to register" });
  }
};

// Step 2: Verify OTP and Create Account
const verifyOtp = async (req, res) => {
  try {
    const { name, email, password, year, department, otp } = req.body;

    if (!name || !email || !password || !year || !department || !otp) {
      return res.status(400).json({ message: "All fields including OTP are required" });
    }

    const record = await OtpModel.findOne({ email }).sort({ createdAt: -1 });
    if (!record || record.otp !== otp) {
      return res.status(400).json({ message: "Invalid or expired OTP" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({ name, email, password: hashedPassword, year, department });
    await newUser.save();

    await OtpModel.deleteMany({ email }); // cleanup

    const token = jwt.sign(
      { id: newUser._id, role: newUser.role },
      process.env.JWT_SECRET,
      { expiresIn: "2d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "Lax",
      secure: false
    });

    res.status(200).json({ message: "User registered", token });
  } catch (err) {
    console.error("OTP Verification error:", err);
    res.status(500).json({ message: "Verification failed" });
  }
};

// Step 3: Login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ message: "Invalid password" });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "Lax",
      secure: false
    });

    res.status(200).json({ message: "Login successful", token });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Login failed" });
  }
};

// Step 4: Resend OTP
const resendOtp = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ message: "Email is required" });

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already registered" });

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    await OtpModel.create({ email, otp });

    await sendEmail(email, "CampusBuddy OTP Resend", `<h3>Your new OTP is <b>${otp}</b></h3>`);
    res.status(200).json({ message: "New OTP sent to email" });
  } catch (err) {
    console.error("Resend OTP error:", err);
    res.status(500).json({ message: "Failed to resend OTP" });
  }
};

module.exports = { register, verifyOtp, login, resendOtp };
