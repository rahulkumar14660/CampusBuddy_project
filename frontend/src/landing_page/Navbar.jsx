import { React, useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import { Home, Calendar, BookOpen, MessageSquare, Bell, User, UserPlus, LogIn, LayoutDashboard, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="d-flex flex-column bg-white border-end vh-100 position-fixed" style={{ width: "240px" }}>
      {/* Logo */}
      <div className="text-center py-3 border-bottom">
        <Link to="/">
          <img src="/media/images/CampusBuddyLogo.png" alt="CampusBuddy" style={{ height: "55px" }} />
        </Link>
      </div>

      {/* Links */}
      <nav className="nav flex-column px-3 mt-3">
        {!isLoggedIn && (
          <>
            <Link to="/signup" className="nav-link d-flex align-items-center text-dark">
              <UserPlus size={18} className="me-2" /> Sign Up
            </Link>
            <Link to="/login" className="nav-link d-flex align-items-center text-dark">
              <LogIn size={18} className="me-2" /> Login
            </Link>
          </>
        )}

        <Link to="/" className="nav-link d-flex align-items-center text-dark">
          <Home size={18} className="me-2" /> HomePage
        </Link>

        <Link to="/dashboard" className="nav-link d-flex align-items-center text-dark">
          <LayoutDashboard size={18} className="me-2" /> Dashboard
        </Link>

        <Link to="/events" className="nav-link d-flex align-items-center text-dark">
          <Calendar size={18} className="me-2" /> Events
        </Link>

        <Link to="/notes" className="nav-link d-flex align-items-center text-dark">
          <BookOpen size={18} className="me-2" /> Notes
        </Link>

        <Link to="/forum" className="nav-link d-flex align-items-center text-dark">
          <MessageSquare size={18} className="me-2" /> Forum
        </Link>

        <Link to="/notifications" className="nav-link d-flex align-items-center text-dark">
          <Bell size={18} className="me-2" /> Notifications
        </Link>

        <Link to="/profile" className="nav-link d-flex align-items-center text-dark">
          <User size={18} className="me-2" /> Profile
        </Link>

        {isLoggedIn && (
          <button onClick={handleLogout} className="nav-link d-flex align-items-center text-dark btn btn-link mt-2">
            <LogOut size={18} className="me-2" /> Logout
          </button>
        )}
      </nav>

      {/* Footer User Info */}
      <div className="mt-auto px-3 py-3 border-top d-flex align-items-center">
        <img
          src="/media/images/your-photo.jpg"
          alt="User"
          className="rounded-circle me-2"
          style={{ width: "40px", height: "40px", objectFit: "cover" }}
        />
        <div>
          <strong className="d-block">Rahul Kumar Tiwari</strong>
          <small className="text-muted">4th Year • CSE</small>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
