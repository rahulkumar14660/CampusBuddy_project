const { model } = require("mongoose");
const { EventSchema } = require("../schemas/EventSchema");

const EventModel = model("event", EventSchema);
module.exports = { EventModel };