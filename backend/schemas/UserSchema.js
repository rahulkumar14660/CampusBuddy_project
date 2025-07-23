const { Schema } = require("mongoose");

const UserSchema = new Schema({
    name : { type: String, required: true },
    email : { type: String, reuired: true, unique: true },
    password : { type: String, reuired: true },
    year : { type: String, required: true },
    department : { type: String, required: true },
    role : { type: String, enum: ['admin', 'student'], default: 'student' }
}, { timestamps: true });

module.exports = { UserSchema };