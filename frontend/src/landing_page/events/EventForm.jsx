import React, { useState } from 'react';
import axios from 'axios';

function EventForm({ onClose, onSuccess, initialData = {} }) {
  const [form, setForm] = useState({
    title: initialData.title || '',
    description: initialData.description || '',
    category: initialData.category || '',
    year: initialData.year || '',
    eventDate: initialData.eventDate ? initialData.eventDate.split('T')[0] : ''
  });

  const token = localStorage.getItem('token');
  const config = {
    headers: { Authorization: `Bearer ${token}` },
    withCredentials: true
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = initialData._id
      ? `http://localhost:5000/api/events/${initialData._id}`
      : 'http://localhost:5000/api/events';

    const method = initialData._id ? 'put' : 'post';
    await axios[method](url, form, config);

    onSuccess();
  };

  return (
    <div className="modal d-block bg-dark bg-opacity-50">
      <div className="modal-dialog">
        <div className="modal-content p-3">
          <h5>{initialData._id ? 'Edit Event' : 'Create Event'}</h5>
          <form onSubmit={handleSubmit}>
            {["title", "description", "category", "year", "eventDate"].map(field => (
              <div key={field} className="mb-2">
                <input
                  type={field === "eventDate" ? "date" : "text"}
                  className="form-control"
                  placeholder={field}
                  value={form[field]}
                  onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                  required
                />
              </div>
            ))}
            <div className="d-flex justify-content-end gap-2">
              <button type="submit" className="btn btn-success">Save</button>
              <button type="button" className="btn btn-outline-secondary" onClick={onClose}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EventForm;
