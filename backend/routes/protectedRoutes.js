const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const isAdmin = require("../middleware/isAdmin");
const upload = require("../middleware/upload");
const { uploadNote } = require("../controllers/noteController");
const { UserModel } = require("../models/UserModel");

// Apply auth middleware to all routes
router.use(authMiddleware);

// Authenticated user route
router.get("/my-notes", (req, res) => {
    res.json({ message : `Hello ${req.user.id}, here are your notes.` });
});

// File upload route(authenticated users)
router.post("/upload", upload.single("file"), uploadNote);

// Admin-only route
router.get("/admin-data", isAdmin, (req, res) => {
    res.json({ message : "Confidential admin data" });
});

// Get authenticated user's profile
router.get("/profile", async (req, res) => {
    try {
        const user = await UserModel.findById(req.user.id).select("-password");
        res.status(200).json({ user });
    } catch (err) {
        console.error("Error fetching user profile:", err);
        res.status(500).json({ message: "Failed to fetch user profile" });
    }
});

module.exports = router;