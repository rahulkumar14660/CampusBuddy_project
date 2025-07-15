import React from 'react';
import { Calendar, BookOpen, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

function EventsPage() {
    return (
        <div className='container mt-4'>
            <div className="row g-4 mt-3">

                {/* Upcoming Events Card */}
                <div className="col-12 col-sm-6 col-md-4">
                    <div className="border rounded-3 p-3 d-flex align-items-center">
                        <Calendar size={32} className="text-primary me-3" />
                        <div>
                            <p className="fs-6 mb-1 fw-medium">Upcoming Events</p>
                            <Link to="/events" className="text-decoration-none text-primary fw-semibold">
                                View All Events →
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Recent Notes Card */}
                <div className="col-12 col-sm-6 col-md-4">
                    <div className="border rounded-3 p-3 d-flex align-items-center">
                        <BookOpen size={32} className="text-success me-3" />
                        <div>
                            <p className="fs-6 mb-1 fw-medium">Recent Notes</p>
                            <Link to="/notes" className="text-decoration-none text-success fw-semibold">
                                Browse All Notes →
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Forum Activity Card */}
                <div className="col-12 col-sm-6 col-md-4">
                    <div className="border rounded-3 p-3 d-flex align-items-center">
                        <MessageSquare size={32} className="text-warning me-3" />
                        <div>
                            <p className="fs-6 mb-1 fw-medium">Forum Activity</p>
                            <Link to="/forum" className="text-decoration-none text-warning fw-semibold">
                                Visit Forum →
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default EventsPage;
