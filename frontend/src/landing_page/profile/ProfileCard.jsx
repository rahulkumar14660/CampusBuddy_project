import React from 'react';

function ProfileCard({ user, onEdit }) {
  return (
    <div className="card p-4 shadow-sm">
      <h4 className="fw-bold mb-3">{user.name}</h4>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Year:</strong> {user.year}</p>
      <p><strong>Department:</strong> {user.department}</p>
      <button className="btn btn-primary mt-3" onClick={onEdit}>Edit Profile</button>
    </div>
  );
}

export default ProfileCard;
