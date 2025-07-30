import React from 'react';
import { Notebook } from 'lucide-react';

function TopBar() {
    return (
        <div className="mx-3 mx-md-5 mt-3 mb-3">
            <div className="row p-3 rounded-4" style={{ backgroundColor: '#e6f9f0' }}>
                <div className="col-12 d-flex flex-column flex-sm-row align-items-start align-items-sm-center">
                    <Notebook size={36} className="me-0 me-sm-3 mb-2 mb-sm-0 text-purple" />
                    <div>
                        <h2 className="mb-1 fw-bold">Notes for Your Year and Department</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopBar;
