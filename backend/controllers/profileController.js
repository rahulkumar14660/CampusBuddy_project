const { UserModel } = require("../models/UserModel");

// Get current user's profile
const getProfile = async (req, res) => {
  try {
    const user = await UserModel.findById(req.user._id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ user });
  } catch (err) {
    console.error("Error getting profile: ", err);
    res.status(500).json({ message: "Server error" });
  }
};

// Update current user's profile
const updateProfile = async (req, res) => {
  try {
    const { name, year, department } = req.body;

    const user = await UserModel.findByIdAndUpdate(
      req.user._id,
      { name, year, department },
      { new: true, runValidators: true }
    ).select("-password");

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({ user });
  } catch (err) {
    console.error("Error updating profile:", err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getProfile, updateProfile };
