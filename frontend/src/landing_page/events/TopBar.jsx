import React from 'react';
import { Users } from 'lucide-react';
import { LayoutGrid, Calendar, Plus } from 'lucide-react';

function TopBar() {
    return (
        <div className="mx-3 mx-md-5 mt-3 mb-3">
            <div className="row p-3 rounded-4" style={{ backgroundColor: '#f3e8ff' }}>
                <div className="col-12 d-flex flex-column flex-sm-row align-items-start align-items-sm-center">
                    <Users size={36} className="me-0 me-sm-3 mb-2 mb-sm-0 text-purple" />
                    <div>
                        <h2 className="mb-1 fw-bold">Events for You</h2>
                        <p className="text-secondary mb-0">
                            6 events available for 3rd year Computer Science students
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopBar;
