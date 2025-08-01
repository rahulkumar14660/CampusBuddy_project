const express = require("express");
const router = express.Router();
const {
  getAllForumPosts,
  createForumPost,
  deleteForumPost,
  addComment,
} = require("../controllers/forumController");

const authMiddleware = require("../middleware/authMiddleware");

// GET all forum posts with filters
router.get("/", getAllForumPosts);

// POST new forum post
router.post("/", authMiddleware, createForumPost);

// DELETE a forum post (owner or admin)
router.delete("/:id", authMiddleware, deleteForumPost);

// POST a comment to a post
router.post("/:id/comment", authMiddleware, addComment);

module.exports = router;
