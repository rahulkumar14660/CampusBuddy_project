const { Schema, Types } = require("mongoose");

const NoteSchema = new Schema({
  name : { type: String, required: true },
  content : { type: String },
  pdfUrl : { type: String },
  year : { type: String, required: true },
  department : { type: String, required: true },
  subject : { type: String, required: true },
  uploadedBy: { type: Types.ObjectId, ref: "user" },
}, { timestamps: true });

module.exports = { NoteSchema };
