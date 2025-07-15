import React from 'react';
import { LayoutGrid, Calendar, Plus } from 'lucide-react';

function EventToolbar() {
    return (
        <div className="d-flex justify-content-between align-items-center px-3 py-2 mt-4 mb-4 mx-3 mx-md-5">
            
            {/* Left: View Toggle */}
            <div className="d-flex align-items-center gap-3">
                <button className="btn btn-light border border-primary text-primary fw-semibold px-3 py-1 d-flex align-items-center">
                    <LayoutGrid size={16} className="me-2" />
                    Grid View
                </button>
                <button className="btn btn-light px-3 py-1 d-flex align-items-center">
                    <Calendar size={16} className="me-2" />
                    Calendar
                </button>
            </div>

            {/* Right: Add Event Button */}
            <button className="btn btn-primary d-flex align-items-center px-3 py-1">
                <Plus size={16} className="me-2" />
                Add Event
            </button>
        </div>
    );
}

export default EventToolbar;
