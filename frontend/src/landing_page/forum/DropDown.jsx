import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, BadgeCheck } from 'lucide-react';

function DropDown() {
    return (
        <div className="border rounded-4 p-3 mt-2 mb-4 mx-3 mx-md-5">
            {/* Search Bar */}
            <div className="mb-3" style={{ width: "35%" }}>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search questions, tags, or content..."
                />
            </div>

            {/* Filter Bar */}
            <div className="d-flex flex-wrap justify-content-between align-items-center">
                
                {/* Left - Dropdowns */}
                <div className="d-flex flex-wrap gap-3">

                    {/* Subject Dropdown */}
                    <div className="dropdown d-flex flex-column">
                        <label className="text-muted small mb-1">Sort By</label>
                        <button className="btn btn-light border px-3 py-1 dropdown-toggle" type="button" data-bs-toggle="dropdown">
                            Most Recent
                        </button>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="/forum/sortby/mv">Most Votes</Link></li>
                            <li><Link className="dropdown-item" to="/forum/sortby/sf">Solved First</Link></li>
                        </ul>
                    </div>

                    {/* Status Dropdown */}
                    <div className="dropdown d-flex flex-column">
                        <label className="text-muted small mb-1">Status</label>
                        <button className="btn btn-light border px-3 py-1 dropdown-toggle" type="button" data-bs-toggle="dropdown">
                            All
                        </button>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="/forum/status/solved">Solved</Link></li>
                            <li><Link className="dropdown-item" to="/forum/status/unsolved">Unsolved</Link></li>
                        </ul>
                    </div>

                    {/* Academic Year Dropdown */}
                    <div className="dropdown d-flex flex-column">
                        <label className="text-muted small mb-1">Academic Year</label>
                        <button className="btn btn-light border px-3 py-1 dropdown-toggle" type="button" data-bs-toggle="dropdown">
                            All Years
                        </button>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="/events/year/all">All Years</Link></li>
                            <li><Link className="dropdown-item" to="/events/year/1">1st Year</Link></li>
                            <li><Link className="dropdown-item" to="/events/year/2">2nd Year</Link></li>
                            <li><Link className="dropdown-item" to="/events/year/3">3rd Year</Link></li>
                            <li><Link className="dropdown-item" to="/events/year/4">4th Year</Link></li>
                        </ul>
                    </div>

                    {/* Department Dropdown */}
                    <div className="dropdown d-flex flex-column">
                        <label className="text-muted small mb-1">Department</label>
                        <button className="btn btn-light border px-3 py-1 dropdown-toggle" type="button" data-bs-toggle="dropdown">
                            All Departments
                        </button>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="/events/dept/all">All Departments</Link></li>
                            <li><Link className="dropdown-item" to="/events/dept/cse">Computer Science</Link></li>
                            <li><Link className="dropdown-item" to="/events/dept/ece">Electronics & Communication</Link></li>
                            <li><Link className="dropdown-item" to="/events/dept/me">Mechanical Engineering</Link></li>
                            <li><Link className="dropdown-item" to="/events/dept/ce">Civil Engineering</Link></li>
                            <li><Link className="dropdown-item" to="/events/dept/ee">Electrical Engineering</Link></li>
                            <li><Link className="dropdown-item" to="/events/dept/it">Information Technology</Link></li>
                            <li><Link className="dropdown-item" to="/events/dept/cme">Chemical Engineering</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Right - My Level & Ask Question Button */}
                <div className="d-flex gap-2 mt-3 mt-md-0">
                    <Link to="/events/my" className="btn btn-light d-flex align-items-center border px-3 py-1">
                        <BadgeCheck size={16} className="me-2" />
                        My Level
                    </Link>

                    <Link to="/forum/ask" className="btn btn-primary d-flex align-items-center px-3 py-1">
                        <Plus size={16} className="me-2" />
                        Ask Question
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default DropDown;