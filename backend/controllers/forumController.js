const { ForumPostModel } = require("../models/ForumPostModel");
const { UserModel } = require("../models/UserModel");

const getAllForumPosts = async (req, res) => {
  try {
    const { year, department } = req.query;
    console.log("Query filters:", { year, department });

    const filter = {};
    if (year) filter.year = year;
    if (department) filter.department = department;

    const users = await UserModel.find(filter).select("_id");
    console.log("Matching users:", users);

    const userIds = users.map((u) => u._id);
    const posts = await ForumPostModel.find({ postedBy: { $in: userIds } })
      .populate("postedBy", "name")
      .populate("comments.user", "name")
      .sort({ createdAt: -1 });

    console.log("Fetched posts:", posts.length);
    res.json({ posts });
  } catch (err) {
    console.error("Forum GET error:", err); // <- add this
    res.status(500).json({ message: "Error fetching forum posts", error: err });
  }
};


// POST /api/forum
const createForumPost = async (req, res) => {
  try {
    const { title, content } = req.body;

    const newPost = new ForumPostModel({
      title,
      content,
      postedBy: req.user._id,
    });

    await newPost.save();
    res.status(201).json({ message: "Post created", post: newPost });
  } catch (err) {
    res.status(500).json({ message: "Error creating forum post", error: err });
  }
};

// DELETE /api/forum/:id
const deleteForumPost = async (req, res) => {
  try {
    const post = await ForumPostModel.findById(req.params.id);

    if (!post) return res.status(404).json({ message: "Post not found" });

    if (
      post.postedBy.toString() !== req.user._id.toString() &&
      req.user.role !== "admin"
    ) {
      return res.status(403).json({ message: "Not authorized to delete" });
    }

    await post.deleteOne();
    res.json({ message: "Post deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting forum post", error: err });
  }
};

// POST /api/forum/:id/comment
const addComment = async (req, res) => {
  try {
    const { text } = req.body;
    const post = await ForumPostModel.findById(req.params.id);

    if (!post) return res.status(404).json({ message: "Post not found" });

    post.comments.push({ user: req.user._id, text });
    await post.save();

    res.json({ message: "Comment added" });
  } catch (err) {
    res.status(500).json({ message: "Error adding comment", error: err });
  }
};

module.exports = {
  getAllForumPosts,
  createForumPost,
  deleteForumPost,
  addComment,
};
