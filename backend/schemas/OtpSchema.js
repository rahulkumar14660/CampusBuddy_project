const { Schema } = require("mongoose");

const OtpSchema = new Schema({
    email: { type: String, required: true },
    otp: { type: String, required: true }
}, { timestamps: true }); // <-- this enables createdAt/updatedAt automatically

// TTL index to auto-delete after 5 mins
OtpSchema.index({ createdAt: 1 }, { expireAfterSeconds: 300 });

module.exports = { OtpSchema };