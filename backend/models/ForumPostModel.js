const { model } = require("mongoose");
const { ForumPostSchema } = require("../schemas/ForumPostSchema");

const { ForumPostModel } = model("forum", ForumPostSchema);
module.exports = { ForumPostModel };