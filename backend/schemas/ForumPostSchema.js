const { Schema, Types } = require("mongoose");

const ForumPostSchema = new Schema({
    title : { type: String, required: true },
    content : { type: String, required: true },
    postedBy : { type: Types.ObjectId, ref: "user" },
    comments : [
        {
            user : { type: Types.ObjectId, ref: "user" },
            text : String,
            createdAt : { type: Date, default: Date.now },
        }
    ],
}, { timestamps: true });

module.exports = { ForumPostSchema };