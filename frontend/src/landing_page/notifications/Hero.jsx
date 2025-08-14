import React, { useEffect, useState } from "react";
import NotificationCard from "./NotificationCard";
import axios from "axios";

function Hero({ filterType, showPersonal }) {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch notifications from backend
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("token"); // assuming token is stored in localStorage

        // Decide endpoint based on showPersonal toggle
        const endpoint = showPersonal
          ? "/api/notifications/my"
          : "/api/notifications";

        const { data } = await axios.get(endpoint, {
          headers: { Authorization: `Bearer ${token}` },
        });

        // Apply frontend filtering if filterType is set
        const filtered = filterType
          ? data.filter((n) => n.type === filterType)
          : data;

        setNotifications(filtered);
      } catch (error) {
        console.error("Error fetching notifications", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, [filterType, showPersonal]);

  if (loading) {
    return <p className="text-center my-5">Loading notifications...</p>;
  }

  if (notifications.length === 0) {
    return <p className="text-center my-5">No notifications found.</p>;
  }

  return (
    <div className="container mt-4">
      {notifications.map((notification) => (
        <NotificationCard key={notification._id} notification={notification} />
      ))}
    </div>
  );
}

export default Hero;
