import React from 'react';
import { Calendar, BookOpen, MessageSquare, TrendingUp } from 'lucide-react';

function Events() {
    return (
        <div className="container mt-4">
            <div className="row g-4">

                {/* Events Card */}
                <div className="col-12 col-sm-6 col-md-3">
                    <div className="border rounded-3 p-3 d-flex justify-content-between align-items-center bg-white shadow-sm">
                        <div>
                            <p className="text-muted fs-6 mb-1">Events This Month</p>
                            <h2 className="mb-0">6</h2>
                            <small className="text-success">+12% from last month</small>
                        </div>
                        <Calendar size={32} className="text-primary" />
                    </div>
                </div>

                {/* Notes Card */}
                <div className="col-12 col-sm-6 col-md-3">
                    <div className="border rounded-3 p-3 d-flex justify-content-between align-items-center bg-white shadow-sm">
                        <div>
                            <p className="text-muted fs-6 mb-1">Notes Downloaded</p>
                            <h2 className="mb-0">1.2K</h2>
                            <small className="text-success">+8% from last month</small>
                        </div>
                        <BookOpen size={32} className="text-success" />
                    </div>
                </div>

                {/* Forum Card */}
                <div className="col-12 col-sm-6 col-md-3">
                    <div className="border rounded-3 p-3 d-flex justify-content-between align-items-center bg-white shadow-sm">
                        <div>
                            <p className="text-muted fs-6 mb-1">Forum Questions</p>
                            <h2 className="mb-0">3</h2>
                            <small className="text-success">+15% from last month</small>
                        </div>
                        <MessageSquare size={32} className="text-warning" />
                    </div>
                </div>

                {/* Reputation Card */}
                <div className="col-12 col-sm-6 col-md-3">
                    <div className="border rounded-3 p-3 d-flex justify-content-between align-items-center bg-white shadow-sm">
                        <div>
                            <p className="text-muted fs-6 mb-1">Your Reputation</p>
                            <h2 className="mb-0">1,250</h2>
                            <small className="text-danger">-5% from last month</small>
                        </div>
                        <TrendingUp size={32} className="text-danger" />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Events;
