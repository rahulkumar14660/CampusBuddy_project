const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const upload = require("../middleware/upload");
const { uploadNote, getNotes, deleteNote, downloadNote, incrementDownload } = require("../controllers/noteController");

router.use(authMiddleware);

// Upload a note
router.post("/upload", upload.single("file"), uploadNote);

// Get notes with optional filters
router.get("/", getNotes);

// Delete a note
router.delete("/:id", deleteNote);

// Download a note and increment download count
router.get("/download/:id", downloadNote);

// Increment only the download count (used in frontend)
router.post("/:id/increment-download", incrementDownload);

module.exports = router;