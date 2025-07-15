import React from 'react';
import { Home, Calendar, BookOpen, MessageSquare, Bell, User, UserPlus, LogIn, LayoutDashboard } from 'lucide-react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg border-bottom bg-white sticky-top">
            <div className="container">

                {/* Logo on the left */}
                <Link className="navbar-brand text-primary fw-bold" to="/">
                    {/* CampusBuddy */}
                    <img src="/media/images/CampusBuddyLogo.png" style={{height:"55px"}} />
                </Link>

                {/* Toggle button for mobile view */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar items */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <Link to="/signup" className="nav-link">
                                <UserPlus size={18} className="me-1" />
                                Sign Up
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/login" className="nav-link">
                                <LogIn size={18} className="me-1" />
                                Login
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                <Home  size={18} className="me-1" />
                                HomePage
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/dashboard" className="nav-link">
                                <LayoutDashboard  size={18} className="me-1" />
                                Dashboard
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/events" className="nav-link">
                                <Calendar size={18} className="me-1" />
                                Events
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/notes" className="nav-link">
                                <BookOpen size={18} className="me-1" />
                                Notes
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/forum" className="nav-link">
                                <MessageSquare size={18} className="me-1" />
                                Forum
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/notifications" className="nav-link">
                                <Bell size={18} className="me-1" />
                                Notifications
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/profile" className="nav-link">
                                <User size={18} className="me-1" />
                                Profile
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
