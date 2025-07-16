import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Bell } from 'lucide-react';

function DropDown() {
    return (
        <div className="border rounded-4 p-3 mt-2 mb-4 mx-3 mx-md-5 bg-white">
            <div className="d-flex flex-wrap justify-content-between align-items-center">

                {/* Left: Filters */}
                <div className="d-flex flex-wrap gap-3">

                    {/* All Notifications Dropdown */}
                    <div className="dropdown">
                        <button className="btn btn-light border px-3 py-1 dropdown-toggle" type="button" data-bs-toggle="dropdown">
                            All Notifications
                        </button>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="/notifications/allnotified/allnotifications">Unread (0)</Link></li>
                            <li><Link className="dropdown-item" to="/notifications/menotified/events">Events</Link></li>
                            <li><Link className="dropdown-item" to="/notifications/menotified/notes">Notes</Link></li>
                            <li><Link className="dropdown-item" to="/notifications/menotified/forum">Forum</Link></li>
                            <li><Link className="dropdown-item" to="/notifications/menotified/system">System</Link></li>
                        </ul>
                    </div>

                    {/* My Notifications */}
                    <button
                        className="btn btn-link text-decoration-none d-flex align-items-center"
                        type="button"
                        style={{ color: 'black' }}
                    >
                        <Bell size={16} className="me-2" />
                        My Notifications
                    </button>
                </div>

                {/* Right: Mark All Read */}
                <div className="d-flex gap-2 mt-3 mt-md-0">
                    <Link to="#" className="btn btn-primary d-flex align-items-center px-3 py-1">
                        <Check size={16} className="me-2" />
                        Mark All Read
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default DropDown;
