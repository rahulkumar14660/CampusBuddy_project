import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', form);
      login(res.data.token);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="auth-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 auth-card">
            <h2 className="text-center mb-4">Login to CampusBuddy</h2>
            {error && <div className="alert alert-danger">{error}</div>}

            <form onSubmit={handleSubmit}>
              <input name="email" className="form-control mb-3" placeholder="Email" onChange={handleChange} required />
              <input name="password" type="password" className="form-control mb-4" placeholder="Password" onChange={handleChange} required />

              <button type="submit" className="btn btn-success w-100">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
