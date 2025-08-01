const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const isAdmin = require("../middleware/isAdmin");
const upload = require("../middleware/upload");

const { UserModel } = require("../models/UserModel");
const { uploadNote } = require("../controllers/noteController");

// Apply auth middleware to all routes below
router.use(authMiddleware);

// Authenticated user's profile
router.get("/profile", async (req, res) => {
  try {
    const user = await UserModel.findById(req.user.id).select("-password");
    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch profile" });
  }
});

// Update own profile
router.put("/profile", async (req, res) => {
  try {
    const { name, year, department } = req.body;
    const updatedUser = await UserModel.findByIdAndUpdate(
      req.user.id,
      { name, year, department },
      { new: true, runValidators: true }
    ).select("-password");
    res.status(200).json({ message: "Profile updated", user: updatedUser });
  } catch (err) {
    res.status(500).json({ message: "Failed to update profile" });
  }
});

// Admin can view any user's profile
router.get("/user/:id", isAdmin, async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch user" });
  }
});

// Admin can get list of all users
router.get("/all-users", isAdmin, async (req, res) => {
  try {
    const users = await UserModel.find().select("-password");
    res.status(200).json({ users });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch users" });
  }
});

router.post("/upload", upload.single("file"), uploadNote);

router.get("/my-notes", (req, res) => {
  res.json({ message: `Hello ${req.user.id}, here are your notes.` });
});

router.get("/admin-data", isAdmin, (req, res) => {
  res.json({ message: "Confidential admin data" });
});

module.exports = router;
