import React from 'react';
import { Home, Calendar, BookOpen, MessageSquare, Bell, User, UserPlus, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: "#FFF" }}>
            <div className="container p-2">

                {/* Logo on the left */}
                <Link className="navbar-brand" to="/">
                    <h3 className="text-primary" style={{textAlign:"left"}}>CampusBuddy</h3>
                </Link>

                {/* Toggler for mobile view */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navigation Links on the right */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0" >

                        <li>
                            <Link to="/signup" className="flex items-center space-x-2 p-2 rounded font-medium hover:bg-indigo-200 text-black" style={{textDecoration:"none"}}>
                                <UserPlus size={20} /> <span>Sign Up</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/login" className="flex items-center space-x-2 p-2 rounded font-medium hover:bg-indigo-200 text-black" style={{textDecoration:"none"}}>
                                <LogIn size={20} /> <span>Login</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/dashboard" className="flex items-center space-x-2 p-2 rounded font-medium hover:bg-indigo-200 text-black" style={{textDecoration:"none"}}>
                                <Home size={20} /> <span>Dashboard</span>
                            </Link>
                        </li>

                        <li>
                        <Link to="/events" className="flex items-center space-x-2 p-2 rounded font-medium hover:bg-indigo-200 text-black" style={{textDecoration:"none"}}>
                                <Calendar size={20} /> <span>Events</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/notes" className="flex items-center space-x-2 p-2 rounded font-medium hover:bg-indigo-200 text-black" style={{textDecoration:"none"}}>
                                <BookOpen size={20} /> <span>Notes</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/forum" className="flex items-center space-x-2 p-2 rounded font-medium hover:bg-indigo-200 text-black" style={{textDecoration:"none"}}>
                                <MessageSquare size={20} /> <span>Forum</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/notifications" className="flex items-center space-x-2 p-2 rounded font-medium hover:bg-indigo-200 text-black" style={{textDecoration:"none"}}>
                                <MessageSquare size={20} /> <span>Notifications</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/profile" className="flex items-center space-x-2 p-2 rounded font-medium hover:bg-indigo-200 text-black" style={{textDecoration:"none"}}>
                                <User size={20} /> <span>Profile</span>
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;