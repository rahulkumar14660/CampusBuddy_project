const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const upload = require("../middleware/upload");
const {
  uploadNote,
  getNotes,
  deleteNote,
  downloadNote,
  incrementDownload
} = require("../controllers/noteController");

// Public route — Get notes with optional filters (used in Hero & StatsRow)
router.get("/", getNotes);

// Auth required to upload a note
router.post("/upload", authMiddleware, upload.single("file"), uploadNote);

// Auth required to delete a note
router.delete("/:id", authMiddleware, deleteNote);

// Auth required to download a note
router.get("/download/:id", authMiddleware, downloadNote);

// Auth required to increment download count
router.post("/:id/increment-download", authMiddleware, incrementDownload);

module.exports = router;
