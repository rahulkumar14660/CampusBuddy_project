import React, { useState } from 'react';
import axios from 'axios';

function CommentBox({ postId, comments, user }) {
  const [commentText, setCommentText] = useState('');

  const token = localStorage.getItem('token');
  const config = {
    headers: { Authorization: `Bearer ${token}` },
    withCredentials: true,
  };

  const handleComment = async () => {
    if (!commentText.trim()) return;
    await axios.post(`http://localhost:5000/api/forum/${postId}/comment`, { text: commentText }, config);
    setCommentText('');
    window.location.reload(); // refresh comments
  };

  return (
    <div>
      <div className="mb-2">
        <strong>Comments:</strong>
        {comments.length === 0 && <p className="text-muted">No comments yet.</p>}
        {comments.map((c, idx) => (
          <div key={idx} className="border p-2 rounded mb-2">
            <small className="d-block">{c.user?.name || 'Anonymous'}:</small>
            <div>{c.text}</div>
            <small className="text-muted">{new Date(c.createdAt).toLocaleString()}</small>
          </div>
        ))}
      </div>
      {user && user._id && (
        <div className="d-flex gap-2">
          <input
            type="text"
            className="form-control"
            placeholder="Add a comment"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <button className="btn btn-outline-primary" onClick={handleComment}>
            Send
          </button>
        </div>
      )}
    </div>
  );
}

export default CommentBox;
