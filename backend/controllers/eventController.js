// backend/controllers/eventController.js

const { EventModel } = require("../models/EventModel");

// GET all events with optional filters
const getAllEvents = async (req, res) => {
  try {
    const { year, category } = req.query;
    const query = {};

    if (year) query.year = year;
    if (category) query.category = category;

    const events = await EventModel.find(query).sort({ eventDate: 1 });
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch events", error });
  }
};

// POST (create) event (Admin only)
const createEvent = async (req, res) => {
  try {
    const { title, description, category, year, eventDate } = req.body;

    const newEvent = new EventModel({
      title,
      description,
      category,
      year,
      eventDate,
      createdBy: req.user._id,
    });

    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(500).json({ message: "Failed to create event", error });
  }
};

// PUT (update) event (Admin only)
const updateEvent = async (req, res) => {
  try {
    const updated = await EventModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: "Failed to update event", error });
  }
};

// DELETE event (Admin only)
const deleteEvent = async (req, res) => {
  try {
    await EventModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete event", error });
  }
};

module.exports = {
  getAllEvents,
  createEvent,
  updateEvent,
  deleteEvent,
};
