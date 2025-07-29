const { Schema, Types } = require("mongoose");

const NotificationSchema = new Schema({
    type: {type: String, enum: ["event", "note", "forum"], required: "true"},
    content : { type: String, required: "true" },
    reciever : { type: Types.ObjectId, ref: "user" },           // null for global
    isRead : { type: Boolean, default: false },
}, { timestamps: true });

module.exports = { NotificationSchema };