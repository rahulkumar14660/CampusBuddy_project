import React from 'react';
import { Link } from 'react-router-dom';
import { Check, BadgeCheck, Bell } from 'lucide-react';

function DropDown() {
    return (
        <div className="border rounded-4 p-3 mt-2 mb-4 mx-3 mx-md-5">

            {/* Filter Bar */}
            <div className="d-flex flex-wrap justify-content-between align-items-center">
                
                <div className="d-flex flex-wrap gap-3">

                    {/* Notifications Dropdown */}
                    <div className="dropdown d-flex flex-column">
                        <button className="btn btn-light border px-3 py-1 dropdown-toggle" type="button" data-bs-toggle="dropdown">
                            All Notifications
                        </button>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="/notifications/allnotified/allnotifications">Unread(0)</Link></li>
                            <li><Link className="dropdown-item" to="/notifications/menotified/events">Events</Link></li>
                            <li><Link className="dropdown-item" to="/notifications/menotified/notes">Notes</Link></li>
                            <li><Link className="dropdown-item" to="/notifications/menotified/forum">Forum</Link></li>
                            <li><Link className="dropdown-item" to="/notifications/menotified/system">System</Link></li>
                        </ul>
                    </div>

                    <div className="dropdown d-flex flex-column">
                        <button
                            className="btn btn-link px-3 py-1 text-decoration-none d-flex align-items-center"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            style={{ color: 'black' }}
                        >
                            <Bell size={16} className="me-2" />
                            My Notifications
                        </button>
                    </div>

                </div>

                {/* Right - Mark All Read */}
                <div className="d-flex gap-2 mt-3 mt-md-0">
                    <Link to="/forum/ask" className="btn btn-primary d-flex align-items-center px-3 py-1">
                        <Check size={16} className="me-2" />
                        Mark All Read
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default DropDown;