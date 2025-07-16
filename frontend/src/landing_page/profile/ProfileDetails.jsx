import React from 'react';
import { Mail, GraduationCap, TrendingUp } from 'lucide-react';

function ProfileDetails() {
    return (
        <div className="mx-3 mx-md-5 mb-4">
            <div className="p-4 rounded-4 d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center"
                style={{ backgroundColor: '#f8f9fa' }}
            >
                {/* Left Side: User Info */}
                <div className="d-flex align-items-start gap-3">
                    <img
                        src="media/images/your-photo.jpg"
                        alt="Profile"
                        className="rounded-circle"
                        width={80}
                        height={80}
                    />
                    <div>
                        <h4 className="fw-bold mb-1">Rahul Kumar Tiwari</h4>
                        <div className="d-flex align-items-center text-secondary mb-1">
                            <Mail size={16} className="me-2" />
                            rahulkumartiwari.cse26@jecrc.ac.in
                        </div>
                        <div className="d-flex align-items-center text-secondary mb-1">
                            <GraduationCap size={16} className="me-2" />
                            4th Year · Computer Science
                        </div>
                        <div className="d-flex align-items-center text-secondary">
                            <TrendingUp size={16} className="me-2" />
                            1250 Reputation Points
                        </div>
                    </div>
                </div>

                {/* Right Side: Edit Profile Button */}
                <div className="mt-3 mt-md-0">
                    <button className="btn btn-primary px-4">Edit Profile</button>
                </div>
            </div>
        </div>
    );
}

export default ProfileDetails;
