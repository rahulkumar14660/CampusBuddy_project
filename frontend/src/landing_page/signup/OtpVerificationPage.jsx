import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate, useLocation } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

function OtpVerificationPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { name, email, password, year, department } = location.state || {};

  const [otp, setOtp] = useState('');
  const [resendCooldown, setResendCooldown] = useState(0);

  useEffect(() => {
    if (!name || !email || !password || !year || !department) {
      toast.error("Missing registration data. Please sign up again.");
      navigate("/signup");
    }
  }, []);

  useEffect(() => {
    let interval;
    if (resendCooldown > 0) {
      interval = setInterval(() => setResendCooldown(c => c - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [resendCooldown]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/verify-otp', {
        name, email, password, year, department, otp
      });

      console.log("Verification response:", res.data); // Debug log

      if (res.data.token) {
        localStorage.setItem('token', res.data.token);
        toast.success('Registration successful!');
        setTimeout(() => navigate('/'), 1500);
      } else {
        toast.error("Token not received");
      }
    } catch (err) {
      toast.error(err.response?.data?.message || 'OTP verification failed');
    }
  };

  const handleResend = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/resend-otp', { email });
      toast.info(res.data.message || 'OTP resent to email');
      setResendCooldown(30);
    } catch (err) {
      toast.error(err.response?.data?.message || 'Resend failed');
    }
  };

  return (
    <div className="auth-bg">
      <ToastContainer />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 auth-card">
            <div className="text-center mb-4">
              <h2 className="fw-bold">Verify OTP</h2>
              <p className="text-muted">Enter the OTP sent to <b>{email}</b></p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="otp" className="form-label">OTP</label>
                <input
                  type="text"
                  className="form-control"
                  id="otp"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3 text-end">
                <button
                  type="button"
                  className="btn btn-link p-0 text-decoration-none"
                  onClick={handleResend}
                  disabled={resendCooldown > 0}
                >
                  {resendCooldown > 0 ? `Resend OTP in ${resendCooldown}s` : 'Resend OTP'}
                </button>
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-primary">Verify & Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OtpVerificationPage;
