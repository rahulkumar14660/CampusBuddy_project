import React, { useState } from 'react';
import axios from 'axios';

function ForumForm({ onClose, onSuccess }) {
  const [form, setForm] = useState({ title: '', content: '' });

  const token = localStorage.getItem('token');
  const config = {
    headers: { Authorization: `Bearer ${token}` },
    withCredentials: true,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/forum', form, config);
    onSuccess();
  };

  return (
    <div className="modal d-block bg-dark bg-opacity-50">
      <div className="modal-dialog">
        <div className="modal-content p-3">
          <h5>Create Forum Post</h5>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              required
            />
            <textarea
              className="form-control mb-2"
              placeholder="Content"
              rows={4}
              value={form.content}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
              required
            />
            <div className="d-flex justify-content-end gap-2">
              <button type="submit" className="btn btn-success">Post</button>
              <button type="button" className="btn btn-outline-secondary" onClick={onClose}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForumForm;
