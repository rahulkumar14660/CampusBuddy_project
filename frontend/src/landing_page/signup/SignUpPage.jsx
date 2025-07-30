import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignUpPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '', email: '', password: '', year: '', department: ''
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        year: formData.year,
        department: formData.department
      });

      toast.success('OTP sent to email');
      navigate('/verify-otp', { state: formData });
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to send OTP');
    }
  };

  return (
    <div className="auth-bg">
      <ToastContainer />
      <div className="container">
        <div className="row justify-content-center">

          <div className="col-md-6 auth-card">
            <div className="text-center mb-4">
              <h2 className="fw-bold">Sign Up to CampusBuddy</h2>
              <p className="text-muted">Join and make college life easier!</p>
            </div>

            <form onSubmit={handleSendOtp}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" name="name" className="form-control" required onChange={handleChange} />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" name="email" className="form-control" required onChange={handleChange} />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" name="password" className="form-control" required onChange={handleChange} />
              </div>

              <div className="mb-3">
                <label className="form-label">Select Year</label>
                <select name="year" className="form-select" required onChange={handleChange}>
                  <option value="">-- Select Year --</option>
                  <option value="1st Year">1st Year</option>
                  <option value="2nd Year">2nd Year</option>
                  <option value="3rd Year">3rd Year</option>
                  <option value="4th Year">4th Year</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="form-label">Select Department</label>
                <select name="department" className="form-select" required onChange={handleChange}>
                  <option value="">-- Select Department --</option>
                  <option value="Computer Science Engineering">Computer Science Engineering</option>
                  <option value="Information Technology">Information Technology</option>
                  <option value="Electronics and Communication Engineering">Electronics and Communication Engineering</option>
                  <option value="Electrical Engineering">Electrical Engineering</option>
                  <option value="Mechanical Engineering">Mechanical Engineering</option>
                  <option value="Civil Engineering">Civil Engineering</option>
                  <option value="Chemical Engineering">Chemical Engineering</option>
                </select>
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-success">Send OTP</button>
              </div>
            </form>

          </div>

        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
