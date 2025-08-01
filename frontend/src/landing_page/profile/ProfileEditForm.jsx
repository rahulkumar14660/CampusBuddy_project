import React, { useState } from 'react';

function ProfileEditForm({ user, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    name: user.name,
    year: user.year,
    department: user.department,
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
      <h4 className="fw-bold mb-3">Edit Profile</h4>

      <div className="mb-3">
        <label>Name</label>
        <input className="form-control" name="name" value={formData.name} onChange={handleChange} required />
      </div>

      <div className="mb-3">
        <label>Year</label>
        <input className="form-control" name="year" value={formData.year} onChange={handleChange} required />
      </div>

      <div className="mb-3">
        <label>Department</label>
        <input className="form-control" name="department" value={formData.department} onChange={handleChange} required />
      </div>

      <div className="d-flex gap-2">
        <button type="submit" className="btn btn-success">Save</button>
        <button type="button" className="btn btn-outline-secondary" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
}

export default ProfileEditForm;
