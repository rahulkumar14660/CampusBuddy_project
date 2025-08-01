// backend/routes/eventRoutes.js

const express = require("express");
const router = express.Router();

const {
  getAllEvents,
  createEvent,
  updateEvent,
  deleteEvent
} = require("../controllers/eventController");

const authMiddleware = require("../middleware/authMiddleware");
const isAdmin = require("../middleware/isAdmin");

// GET /api/events?year=2025&category=Technical
router.get("/", getAllEvents);

// POST /api/events (admin only)
router.post("/", authMiddleware, isAdmin, createEvent);

// PUT /api/events/:id (admin only)
router.put("/:id", authMiddleware, isAdmin, updateEvent);

// DELETE /api/events/:id (admin only)
router.delete("/:id", authMiddleware, isAdmin, deleteEvent);

module.exports = router;
