const { model } = require("mongoose");
const { NoteSchema } = require("../schemas/NoteSchema");

const NodeModel = model("note", NoteSchema);
module.exports = { NoteModel };