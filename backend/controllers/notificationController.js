const { NotificationModel } = require("../models/NotificationModel");

// @desc    Get all notifications (global + personal)
// @route   GET /api/notifications
// @access  Private
const getAllNotifications = async (req, res) => {
  try {
    const notifications = await NotificationModel.find({
      $or: [
        { reciever: null }, // Global notifications
        { reciever: req.user._id } // Personal notifications
      ]
    })
      .sort({ createdAt: -1 })
      .lean();

    res.json(notifications);
  } catch (error) {
    console.error("Error fetching notifications:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Get only my personal notifications
// @route   GET /api/notifications/my
// @access  Private
const getMyNotifications = async (req, res) => {
  try {
    const myNotifications = await NotificationModel.find({
      reciever: req.user._id
    })
      .sort({ createdAt: -1 })
      .lean();

    res.json(myNotifications);
  } catch (error) {
    console.error("Error fetching personal notifications:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  getAllNotifications,
  getMyNotifications,
};
