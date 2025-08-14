import React, { useEffect, useState } from "react";
import { fetchMyNotifications } from "./notificationApi";
import NotificationCard from "./NotificationCard";

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadNotifications = async () => {
      try {
        const data = await fetchMyNotifications();
        setNotifications(data);
      } catch (err) {
        setError("Failed to load notifications.");
      } finally {
        setLoading(false);
      }
    };

    loadNotifications();
  }, []);

  if (loading) {
    return <p className="text-center mt-4">Loading notifications...</p>;
  }

  if (error) {
    return <p className="text-center text-danger mt-4">{error}</p>;
  }

  if (notifications.length === 0) {
    return <p className="text-center mt-4">No notifications found.</p>;
  }

  return (
    <div className="container mt-4">
      {notifications.map((notif) => (
        <NotificationCard key={notif._id} notification={notif} />
      ))}
    </div>
  );
}
