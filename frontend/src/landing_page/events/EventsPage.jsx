import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Plus, CalendarDays } from 'lucide-react';
import EventCard from './EventCard';
import EventForm from './EventForm';
import EventFilters from './EventFilters';

function EventsPage() {
  const [events, setEvents] = useState([]);
  const [filters, setFilters] = useState({ year: '', category: '' });
  const [showForm, setShowForm] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [user, setUser] = useState({});

  const token = localStorage.getItem('token');
  const authConfig = {
    headers: { Authorization: `Bearer ${token}` },
    withCredentials: true,
  };

  useEffect(() => {
    fetchEvents();
    fetchUser();
  }, [filters]);

  const fetchEvents = async () => {
    const query = new URLSearchParams(filters).toString();
    const res = await axios.get(`http://localhost:5000/api/events?${query}`, authConfig);
    setEvents(res.data);
  };

  // const fetchUser = async () => {
  //   const res = await axios.get("http://localhost:5000/api/protected/profile", authConfig);
  //   setUser(res.data.user || {});
  // };

  const fetchUser = async () => {
  try {
    if (!token) return; // prevent unnecessary request

    const res = await axios.get("http://localhost:5000/api/protected/profile", authConfig);
    setUser(res.data.user || {});
  } catch (err) {
    console.error("Error fetching user profile:", err.response?.data || err.message);
    // Optionally logout user or show error
  }
};


  const handleDelete = async (id) => {
    if (!window.confirm("Delete this event?")) return;
    await axios.delete(`http://localhost:5000/api/events/${id}`, authConfig);
    fetchEvents();
  };

  const handleEdit = (event) => {
    setEditingEvent(event);
    setShowForm(true);
  };

  const handleFormSuccess = () => {
    fetchEvents();
    setShowForm(false);
    setEditingEvent(null);
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3><CalendarDays className="me-2" size={24} /> Events</h3>
        {user.role === "admin" && (
          <button className="btn btn-primary" onClick={() => setShowForm(true)}>
            <Plus size={16} className="me-1" /> Create Event
          </button>
        )}
      </div>

      <EventFilters filters={filters} onFilterChange={setFilters} />

      <div className="row mt-3">
        {events.map(event => (
          <div key={event._id} className="col-md-6">
            <EventCard event={event} user={user} onDelete={handleDelete} onEdit={handleEdit} />
          </div>
        ))}
      </div>

      {showForm && (
        <EventForm
          onClose={() => { setShowForm(false); setEditingEvent(null); }}
          onSuccess={handleFormSuccess}
          initialData={editingEvent}
        />
      )}
    </div>
  );
}

export default EventsPage;