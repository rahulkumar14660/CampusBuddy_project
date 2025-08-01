import React from 'react';
import { CalendarDays, Trash2, Edit } from 'lucide-react';

function EventCard({ event, user, onDelete, onEdit }) {
  const date = new Date(event.eventDate).toLocaleDateString();

  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{event.title}</h5>
        <p className="card-text">{event.description}</p>

        <div className="mb-2">
          <span className="badge bg-info me-2">{event.category}</span>
          <span className="badge bg-secondary">{event.year}</span>
        </div>

        <p className="text-muted small">
          <CalendarDays size={14} className="me-1" />
          {date}
        </p>

        {user.role === "admin" && (
          <div className="d-flex gap-2 justify-content-end mt-2">
            <button className="btn btn-sm btn-outline-primary" onClick={() => onEdit(event)}>
              <Edit size={14} /> Edit
            </button>
            <button className="btn btn-sm btn-outline-danger" onClick={() => onDelete(event._id)}>
              <Trash2 size={14} /> Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default EventCard;
