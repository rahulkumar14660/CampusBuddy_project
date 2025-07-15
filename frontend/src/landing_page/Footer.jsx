import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            <footer style={{ backgroundColor: "rgb(240, 240, 240)" }}>
                <div className='container border-top mt-5'>

                    <div className="row mt-5 d-flex justify-content-between">

                        {/* Logo & About */}
                        <div className="col-md">
                            <img 
                                src="https://img.icons8.com/ios-filled/100/000000/graduation-cap.png" 
                                alt="CampusBuddy Logo" 
                                className="ms-5"
                                style={{ width: "48px", marginBottom: "10px" }} 
                            />
                            <p className="mt-3 text-muted">
                                &copy; 2024 CampusBuddy. Your all-in-one campus platform for events, notes, and collaboration.
                            </p>
                        </div>


                        {/* Resources */}
                        <div className="col-md">
                            <p><strong>Resources</strong></p>
                            <Link to="/events" className="d-block text-decoration-none text-muted">Events</Link>
                            <Link to="/notes" className="d-block text-decoration-none text-muted">Notes</Link>
                            <Link to="/forum" className="d-block text-decoration-none text-muted">Doubt Forum</Link>
                            <Link to="/assignments" className="d-block text-decoration-none text-muted">Assignments</Link>
                            <Link to="/notifications" className="d-block text-decoration-none text-muted">Notifications</Link>
                        </div>

                        {/* Support */}
                        <div className="col-md">
                            <p><strong>Support</strong></p>
                            <Link to="/help" className="d-block text-decoration-none text-muted">Help Center</Link>
                            <Link to="/contact" className="d-block text-decoration-none text-muted">Contact Us</Link>
                            <Link to="/guidelines" className="d-block text-decoration-none text-muted">Platform Guidelines</Link>
                            <Link to="/faq" className="d-block text-decoration-none text-muted">FAQs</Link>
                        </div>

                        {/* Campus Info */}
                        <div className="col-md">
                            <p><strong>Campus Info</strong></p>
                            <Link to="/about" className="d-block text-decoration-none text-muted">About Us</Link>
                            <Link to="/departments" className="d-block text-decoration-none text-muted">Departments</Link>
                            <Link to="/clubs" className="d-block text-decoration-none text-muted">Student Clubs</Link>
                            <Link to="/calendar" className="d-block text-decoration-none text-muted">Academic Calendar</Link>
                        </div>

                        {/* Policies */}
                        <div className="col-md">
                            <p><strong>Legal</strong></p>
                            <Link to="/terms" className="d-block text-decoration-none text-muted">Terms & Conditions</Link>
                            <Link to="/privacy" className="d-block text-decoration-none text-muted">Privacy Policy</Link>
                            <Link to="/code-of-conduct" className="d-block text-decoration-none text-muted">Code of Conduct</Link>
                        </div>
                    </div>

                    {/* Disclaimer Section */}
                    <div className='mt-5 text-muted' style={{ fontSize: "14px" }}>
                        <p>
                            CampusBuddy is a student-focused platform designed to enhance academic and campus life by providing access to events, notes, assignments, and peer interaction.
                        </p>
                        <p>
                            This platform is independently developed and is not officially affiliated with any university. Please verify all information with your respective department when needed.
                        </p>
                        <p>
                            We do not endorse or promote any form of academic dishonesty. Always follow your institution's rules and academic code of conduct.
                        </p>
                        <p>
                            For any concerns or feedback, please <Link to="/contact" className="text-decoration-none">contact us</Link>.
                        </p>
                    </div>

                </div>
            </footer>
        </>
    );
}

export default Footer;
