import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ForumPostCard from './ForumPostCard';
import ForumForm from './ForumForm';

function ForumPage() {
  const [posts, setPosts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [user, setUser] = useState({});
  const [filters, setFilters] = useState({ year: '', department: '' });

  const token = localStorage.getItem('token');
  const config = {
    headers: { Authorization: `Bearer ${token}` },
    withCredentials: true,
  };

  useEffect(() => {
    fetchPosts();
    fetchUser();
  }, [filters]);


const fetchPosts = async () => {
  try {
    const query = new URLSearchParams(filters).toString();
    const res = await axios.get(`http://localhost:5000/api/forum?${query}`);
    setPosts(res.data.posts || []);
  } catch (error) {
    console.error("Error fetching forum posts:", error.response?.data || error.message);
  }
};


  const fetchUser = async () => {
  try {
    const res = await axios.get("http://localhost:5000/api/protected/profile", config);
    setUser(res.data.user || {});
  } catch (err) {
    console.error("Fetch user error:", err.response?.data || err.message);
    if (
      err.response?.data?.message?.includes("expired") ||
      err.response?.data?.message?.includes("malformed")
    ) {
      localStorage.removeItem("token");
      window.location.href = "/login"; // or navigate to login
    }
  }
};

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this post?')) return;
    await axios.delete(`http://localhost:5000/api/forum/${id}`, config);
    fetchPosts();
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Forum</h3>
        {user && user._id && (
          <button className="btn btn-primary" onClick={() => setShowForm(true)}>
            Create Post
          </button>
        )}
      </div>

      {/* Filters */}
      <div className="row g-2 mb-3">
        <div className="col-md-6">
          <select
            className="form-select"
            name="year"
            value={filters.year}
            onChange={(e) => setFilters({ ...filters, year: e.target.value })}
          >
            <option value="">All Years</option>
            <option value="1st Year">1st Year</option>
            <option value="2nd Year">2nd Year</option>
            <option value="3rd Year">3rd Year</option>
            <option value="4th Year">4th Year</option>
          </select>
        </div>
        <div className="col-md-6">
          <select
            className="form-select"
            name="department"
            value={filters.department}
            onChange={(e) => setFilters({ ...filters, department: e.target.value })}
          >
            <option value="">All Departments</option>
            <option value="Computer Science Engineering">Computer Science Engineering</option>
            <option value="Electronics and Communication Engineering">Electronics and Communication Engineering</option>
            <option value="Mechanical Engineering">Mechanical Engineering</option>
            <option value="Civil Engineering">Civil Engineering</option>
            <option value="Electrical Engineering">Electrical Engineering</option>
            <option value="Information Technology">Information Technology</option>
            <option value="Chemical Engineering">Chemical Engineering</option>
          </select>
        </div>
      </div>

      {/* Posts */}
      <div className="row">
        {posts.map((post) => (
          <div key={post._id} className="col-md-12 mb-3">
            <ForumPostCard post={post} user={user} onDelete={handleDelete} />
          </div>
        ))}
      </div>

      {showForm && (
        <ForumForm
          onClose={() => setShowForm(false)}
          onSuccess={() => {
            fetchPosts();
            setShowForm(false);
          }}
        />
      )}
    </div>
  );
}

export default ForumPage;
