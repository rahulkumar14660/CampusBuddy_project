const express = require("express");
const { getAllNotifications, getMyNotifications } = require("../controllers/notificationController");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", protect, getAllNotifications); // all
router.get("/my", protect, getMyNotifications); // personal + global

module.exports = router;
