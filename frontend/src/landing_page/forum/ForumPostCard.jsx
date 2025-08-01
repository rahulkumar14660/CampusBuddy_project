import React from 'react';
import CommentBox from './CommentBox';
import { Trash2 } from 'lucide-react';

function ForumPostCard({ post, user, onDelete }) {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h5>{post.title}</h5>
        <p>{post.content}</p>
        <small className="text-muted">
          Posted by {post.postedBy?.name || 'Unknown'} | {new Date(post.createdAt).toLocaleString()}
        </small>

        {(user.role === 'admin' || user._id === post.postedBy?._id) && (
          <div className="mt-2 text-end">
            <button className="btn btn-sm btn-outline-danger" onClick={() => onDelete(post._id)}>
              <Trash2 size={14} /> Delete
            </button>
          </div>
        )}

        <hr />
        <CommentBox postId={post._id} comments={post.comments || []} user={user} />
      </div>
    </div>
  );
}

export default ForumPostCard;
