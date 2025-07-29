const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const isAdmin = require("../middleware/isAdmin");
const upload = require("../middleware/upload");
const { uploadNote } = require("../controllers/noteController");

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

module.exports = router;