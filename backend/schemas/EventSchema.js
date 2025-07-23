const { Schema, Types } = require("mongoose");

const EventSchema = new Schema({
  name : { type: String, required: true },
  description : { type: String },
  date : { type: Date, required: true },
  category : { type: String, required: true },
  createdBy : { type: Types.ObjectId, ref: "user" },
}, { timestamps: true });

module.exports = { EventSchema };