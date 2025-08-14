import React from "react";
import moment from "moment";

function NotificationCard({ notification }) {
  const { type, content, createdAt, isRead } = notification;

  // Style classes based on type
  const typeColors = {
    event: "border-success text-success",
    note: "border-warning text-warning",
    forum: "border-info text-info",
  };

  return (
    <div
      className={`card mb-3 shadow-sm ${typeColors[type] || "border-secondary"}`}
      style={{ borderWidth: "2px" }}
    >
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          {/* Notification type */}
          <span className={`fw-bold ${typeColors[type] || ""}`}>
            {type?.toUpperCase()}
          </span>

          {/* Time */}
          <small className="text-muted">
            {moment(createdAt).fromNow()}
          </small>
        </div>

        {/* Content */}
        <p className="mt-2 mb-0">{content}</p>

        {/* Read Status */}
        {!isRead && (
          <span className="badge bg-primary mt-2">New</span>
        )}
      </div>
    </div>
  );
}

export default NotificationCard;
