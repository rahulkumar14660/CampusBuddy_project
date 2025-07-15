import React from 'react';
import { Link } from 'react-router-dom';
import { UserCheck } from 'lucide-react';

function DropDown() {
    return (
        <div className="border rounded-4 p-3 mt-2 mb-4 mx-3 mx-md-5">
            <div className="d-flex flex-wrap justify-content-between align-items-center">
                
                {/* Left - Dropdowns */}
                <div className="d-flex flex-wrap gap-3">
                    {/* Category Dropdown */}
                    <div className="dropdown d-flex flex-column">
                        <label className="text-muted small mb-1">Subject</label>
                        <button className="btn btn-light border px-3 py-1 dropdown-toggle" type="button" data-bs-toggle="dropdown">
                            Category
                        </button>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="/events/category/all">All</Link></li>
                            <li><Link className="dropdown-item" to="/events/category/academic">Academic</Link></li>
                            <li><Link className="dropdown-item" to="/events/category/technical">Technical</Link></li>
                            <li><Link className="dropdown-item" to="/events/category/cultural">Cultural</Link></li>
                            <li><Link className="dropdown-item" to="/events/category/sports">Sports</Link></li>
                            <li><Link className="dropdown-item" to="/events/category/other">Other</Link></li>
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

                {/* Right - My Events Link */}
                <div className="mt-3 mt-md-0">
                    <Link to="/events/my" className="btn btn-light d-flex align-items-center border px-3 py-1">
                        <UserCheck size={16} className="me-2" />
                        My Events
                    </Link>

                </div>
            </div>
        </div>
    );
}

export default DropDown;
