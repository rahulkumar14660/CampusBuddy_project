import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProfileCard from './ProfileCard';
import ProfileEditForm from './ProfileEditForm';
import { toast, ToastContainer } from 'react-toastify';

function ProfilePage() {
  const [user, setUser] = useState(null);
  const [editing, setEditing] = useState(false);

  const token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
    withCredentials: true,
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/protected/profile", config);
      setUser(res.data.user);
    } catch (err) {
      console.error("Fetch profile failed", err);
      toast.error("Failed to load profile");
    }
  };

  const handleUpdate = async (updatedData) => {
    try {
      const res = await axios.put("http://localhost:5000/api/protected/profile", updatedData, config);
      setUser(res.data.user);
      toast.success("Profile updated successfully!");
      setEditing(false);
    } catch (err) {
      console.error("Update failed", err);
      toast.error("Failed to update profile");
    }
  };

  return (
    <div className="container mt-4">
      <ToastContainer />
      <h2 className="mb-4 fw-bold">My Profile</h2>
      {user && !editing && <ProfileCard user={user} onEdit={() => setEditing(true)} />}
      {user && editing && <ProfileEditForm user={user} onCancel={() => setEditing(false)} onSave={handleUpdate} />}
    </div>
  );
}

export default ProfilePage;
