const { model } = require("mongoose");
const { NotificationSchema } = require("../schemas/NotificationSchema");

const { NotificationModel } = model("notification", NotificationSchema);
module.exports = { NotificationModel };