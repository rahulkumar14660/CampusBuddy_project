const express = require("express");
const router = express.Router();

const { getProfile, updateProfile } = require("../controllers/profileController");
const authMiddleware = require("../middleware/authMiddleware");

// GET user profile
router.get("/profile", authMiddleware, getProfile);

// UPDATE user profile
router.put("/profile", authMiddleware, updateProfile);

module.exports = router;