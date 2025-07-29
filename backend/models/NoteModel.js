const { model } = require("mongoose");
const { NoteSchema } = require("../schemas/NoteSchema");

const NoteModel = model("note", NoteSchema);
module.exports = { NoteModel };