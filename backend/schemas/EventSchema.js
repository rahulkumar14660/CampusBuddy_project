const { Schema } = require("mongoose");

const EventSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  category: String, 
  year: String,     
  eventDate: { type: Date, required: true },
  createdBy: { type: Schema.Types.ObjectId, ref: "user" }
}, { timestamps: true });

module.exports = { EventSchema };
