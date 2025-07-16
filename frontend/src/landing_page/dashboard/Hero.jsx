import React from 'react';
import { Calendar, BookOpen, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <div className="container mt-4">
            <div className="row g-4 mt-3">

                {/* Upcoming Events Card */}
                <div className="col-12 col-md-4">
                    <div className="border rounded-3 p-3 h-100 d-flex flex-column">
                        <div className="d-flex align-items-center mb-3">
                            <Calendar size={20} className="text-primary me-2" />
                            <h6 className="mb-0 fw-semibold">Upcoming Events</h6>
                        </div>

                        {/* Replace this with dynamic list later */}
                        <div className="small text-muted mb-3">
                            {/* If no events yet, this block can be empty */}
                            {/* Sample: */}
                            <div className="fw-medium text-dark">Tech Talk: AI in 2025</div>
                            <div>Wed, July 24 · 3:00 PM</div>
                        </div>

                        <div>
                            <Link to="/events" className="text-decoration-none text-primary fw-semibold">
                                View All Events →
                            </Link>
                        </div>
                    </div>
                </div>


                {/* Recent Notes */}
                <div className="col-12 col-md-4">
                    <div className="border rounded-3 p-3 h-100 d-flex flex-column justify-content-between">
                        <div>
                            <div className="d-flex align-items-center mb-3">
                                <BookOpen size={20} className="text-success me-2" />
                                <h6 className="mb-0 fw-semibold">Recent Notes</h6>
                            </div>

                            <div className="mb-2 small text-muted">
                                <div className="fw-semibold text-dark">Data Structures and Algorithms Complete Notes</div>
                                <div>Data Structures · 156 downloads</div>
                                <br />
                            </div>
                            <div className="mb-2 small text-muted">
                                <div className="fw-semibold text-dark">Advanced Database Management Systems</div>
                                <div>Database Systems · 87 downloads</div>
                                <br />
                            </div>
                            <div className="small text-muted">
                                <div className="fw-semibold text-dark">Linear Algebra Quick Reference</div>
                                <div>Mathematics · 203 downloads</div>
                            </div>
                        </div>
                        <div className="mt-3">
                            <Link to="/notes" className="text-decoration-none text-success fw-semibold">
                                Browse All Notes →
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Forum Activity */}
                <div className="col-12 col-md-4">
                    <div className="border rounded-3 p-3 h-100 d-flex flex-column justify-content-between">
                        <div>
                            <div className="d-flex align-items-center mb-3">
                                <MessageSquare size={20} className="text-warning me-2" />
                                <h6 className="mb-0 fw-semibold">Forum Activity</h6>
                            </div>

                            <div className="mb-2 small text-muted">
                                <div className="fw-semibold text-dark">How to optimize SQL queries for large datasets?</div>
                                <div className="text-success">✔ Solved · 15 votes</div>
                                <br />
                            </div>
                            <div className="mb-2 small text-muted">
                                <div className="fw-semibold text-dark">React useEffect cleanup function not working</div>
                                <div className="text-warning">🟡 Open · 6 votes</div>
                                <br />
                            </div>
                            <div className="small text-muted">
                                <div className="fw-semibold text-dark">Understanding Fourier Transform in Signal Proc…</div>
                                <div className="text-success">✔ Solved · 12 votes</div>
                            </div>
                        </div>
                        <div className="mt-3">
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

export default Hero;
