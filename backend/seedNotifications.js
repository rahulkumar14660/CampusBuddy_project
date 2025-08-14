const { NotificationModel } = require("../models/notificationModel");

const seedNotifications = async () => {
  const sample = [
    { type: "event", content: "Welcome to CampusBuddy!", reciever: null },
    { type: "note", content: "Your new note has been uploaded.", reciever: null },
  ];
  await NotificationModel.insertMany(sample);
  console.log("Sample notifications added.");
};

module.exports = { seedNotifications };
