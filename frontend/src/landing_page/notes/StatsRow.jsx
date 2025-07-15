import React from 'react';

function StatsRow() {
    return (
        <div className="row text-center mt-4 g-3 mx-3 mx-md-5">
            <div className="col-6 col-md-3">
                <div className="border rounded-4 p-3">
                    <h5 className="fw-bold mb-1">6</h5>
                    <p className="text-secondary mb-0">Available Notes</p>
                </div>
            </div>
            <div className="col-6 col-md-3">
                <div className="border rounded-4 p-3">
                    <h5 className="fw-bold mb-1">6</h5>
                    <p className="text-secondary mb-0">Subjects Covered</p>
                </div>
            </div>
            <div className="col-6 col-md-3">
                <div className="border rounded-4 p-3">
                    <h5 className="fw-bold mb-1">747</h5>
                    <p className="text-secondary mb-0">Total Downloads</p>
                </div>
            </div>
            <div className="col-6 col-md-3">
                <div className="border rounded-4 p-3">
                    <h5 className="fw-bold mb-1">1</h5>
                    <p className="text-secondary mb-0">For Your Year</p>
                </div>
            </div>
        </div>
    );
}

export default StatsRow;
