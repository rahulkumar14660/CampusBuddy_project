import React from 'react';
import { Bell } from 'lucide-react';

function HomePage() {
  return (
    <div className="container my-4">
      {/* Header */}
      <header className="mb-4 text-center">
        <h1 className="display-4">CampusBuddy</h1>
        <p className="lead text-muted">Your all-in-one college utility platform</p>
      </header>

      {/* Quick Links / Modules */}
      <div className="d-flex justify-content-center mb-5 gap-3 flex-wrap">
        <a href="/events" className="btn btn-primary px-4 py-3">
          Event Calendar
        </a>
        <a href="/notes" className="btn btn-success px-4 py-3">
          Notes Upload/Download
        </a>
        <a href="/doubts" className="btn btn-warning px-4 py-3 text-white">
          Doubt Forum
        </a>
        <a href="/notifications" className="btn btn-info px-4 py-3 text-white d-flex align-items-center">
          <Bell className="me-2" size={18} />
          Notifications
        </a>
      </div>

      {/* Dashboard Sections */}
      <div className="row">
        {/* Upcoming Events */}
        <section className="col-md-6 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-header bg-primary text-white">
              Upcoming Events
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Orientation Day - Aug 25, 2025</li>
                <li className="list-group-item">Tech Fest - Sep 10, 2025</li>
                <li className="list-group-item">Guest Lecture on AI - Sep 18, 2025</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Latest Notes */}
        <section className="col-md-6 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-header bg-success text-white">
              Latest Notes
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Data Structures - Lecture 5</li>
                <li className="list-group-item">Operating Systems - Chapter 3</li>
                <li className="list-group-item">Mathematics - Calculus Notes</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Recent Doubts */}
        <section className="col-md-6 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-header bg-warning text-dark">
              Recent Doubts
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">How to implement a binary search tree?</li>
                <li className="list-group-item">Difference between TCP and UDP?</li>
                <li className="list-group-item">Explain React useEffect hook.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Notifications */}
        <section className="col-md-6 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-header bg-info text-white d-flex align-items-center">
              <Bell size={20} className="me-2" />
              Notifications
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Assignment 3 deadline extended to Sep 5</li>
                <li className="list-group-item">New notes uploaded for Database Systems</li>
                <li className="list-group-item">Event: Coding Competition on Aug 30</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomePage;
