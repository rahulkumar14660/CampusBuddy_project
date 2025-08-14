import React, { useState } from "react";
import Hero from "./Hero";
import NotificationsNavbar from "./NotificationsNavbar";

function NotificationsPage() {
  const [filterType, setFilterType] = useState(null); // "event", "note", "forum", or null
  const [showPersonal, setShowPersonal] = useState(false); // true = personal only

  return (
    <div className="pb-5">
      {/* Top navbar for notifications page */}
      <NotificationsNavbar />

      {/* Filter buttons */}
      <div className="d-flex justify-content-center my-3 flex-wrap">
        <button
          className="btn btn-outline-primary me-2 mb-2"
          onClick={() => setFilterType(null)}
        >
          All
        </button>
        <button
          className="btn btn-outline-success me-2 mb-2"
          onClick={() => setFilterType("event")}
        >
          Events
        </button>
        <button
          className="btn btn-outline-warning me-2 mb-2"
          onClick={() => setFilterType("note")}
        >
          Notes
        </button>
        <button
          className="btn btn-outline-info me-2 mb-2"
          onClick={() => setFilterType("forum")}
        >
          Forum
        </button>
        <button
          className="btn btn-outline-dark mb-2"
          onClick={() => setShowPersonal((prev) => !prev)}
        >
          {showPersonal ? "Show Global" : "Show Personal"}
        </button>
      </div>

      {/* Pass filter props to Hero */}
      <Hero filterType={filterType} showPersonal={showPersonal} />
    </div>
  );
}

export default NotificationsPage;
