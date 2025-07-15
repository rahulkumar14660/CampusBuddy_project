import React from 'react';
import { Link } from 'react-router-dom';
import { Upload, FileText } from 'lucide-react';

function DropDown() {
    return (
        <div className="border rounded-4 p-3 mt-2 mb-4 mx-3 mx-md-5">
            {/* Search Bar */}
            <div className="mb-3" style={{ width: "35%" }}>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search notes, subjects, or tags..."
                />
            </div>

            {/* Filter Bar */}
            <div className="d-flex flex-wrap justify-content-between align-items-center">
                
                {/* Left - Dropdowns */}
                <div className="d-flex flex-wrap gap-3">

                    {/* Subject Dropdown */}
                    <div className="dropdown d-flex flex-column">
                        <label className="text-muted small mb-1">Subject</label>
                        <button className="btn btn-light border px-3 py-1 dropdown-toggle" type="button" data-bs-toggle="dropdown">
                            All Subjects
                        </button>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="/notes/subjects/all">All Subjects</Link></li>
                            <li><Link className="dropdown-item" to="/notes/subjects/dsa">Data Structures</Link></li>
                            <li><Link className="dropdown-item" to="/notes/subjects/dbms">DBMS</Link></li>
                            <li><Link className="dropdown-item" to="/notes/subjects/os">Operating Systems</Link></li>
                            <li><Link className="dropdown-item" to="/notes/subjects/cn">Computer Networks</Link></li>
                            <li><Link className="dropdown-item" to="/notes/subjects/ai">Artificial Intelligence</Link></li>
                            <li><Link className="dropdown-item" to="/notes/subjects/ml">Machine Learning</Link></li>
                        </ul>
                    </div>

                    {/* Academic Year Dropdown */}
                    <div className="dropdown d-flex flex-column">
                        <label className="text-muted small mb-1">Academic Year</label>
                        <button className="btn btn-light border px-3 py-1 dropdown-toggle" type="button" data-bs-toggle="dropdown">
                            All Years
                        </button>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="/notes/year/all">All Years</Link></li>
                            <li><Link className="dropdown-item" to="/notes/year/1">1st Year</Link></li>
                            <li><Link className="dropdown-item" to="/notes/year/2">2nd Year</Link></li>
                            <li><Link className="dropdown-item" to="/notes/year/3">3rd Year</Link></li>
                            <li><Link className="dropdown-item" to="/notes/year/4">4th Year</Link></li>
                        </ul>
                    </div>

                    {/* Department Dropdown */}
                    <div className="dropdown d-flex flex-column">
                        <label className="text-muted small mb-1">Department</label>
                        <button className="btn btn-light border px-3 py-1 dropdown-toggle" type="button" data-bs-toggle="dropdown">
                            All Departments
                        </button>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="/notes/dept/all">All Departments</Link></li>
                            <li><Link className="dropdown-item" to="/notes/dept/cse">Computer Science</Link></li>
                            <li><Link className="dropdown-item" to="/notes/dept/ece">Electronics & Communication</Link></li>
                            <li><Link className="dropdown-item" to="/notes/dept/me">Mechanical Engineering</Link></li>
                            <li><Link className="dropdown-item" to="/notes/dept/ce">Civil Engineering</Link></li>
                            <li><Link className="dropdown-item" to="/notes/dept/ee">Electrical Engineering</Link></li>
                            <li><Link className="dropdown-item" to="/notes/dept/it">Information Technology</Link></li>
                            <li><Link className="dropdown-item" to="/notes/dept/cme">Chemical Engineering</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Right - My Notes & Upload Button */}
                <div className="d-flex gap-2 mt-3 mt-md-0">
                    <Link to="/notes/my" className="btn btn-light d-flex align-items-center border px-3 py-1">
                        <FileText size={16} className="me-2" />
                        My Notes
                    </Link>

                    <Link to="/notes/upload" className="btn btn-primary d-flex align-items-center px-3 py-1">
                        <Upload size={16} className="me-2" />
                        Upload
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default DropDown;
