import React from 'react';
import { Search, Bell } from 'lucide-react';

function ProfileNavbar() {
    return (
        <>
            <div className="mx-3 mx-md-5 mt-3 mb-2">
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
                    <div>
                        <h4 className="fw-bold mb-1">Profile</h4>
                        <p className="text-secondary mb-0 small">
                            Manage your account and view achievements
                        </p>
                    </div>

                    <div className="d-flex align-items-center gap-3 mt-3 mt-md-0">
                        <div className="position-relative me-2">
                            <input
                                type="text"
                                placeholder="Quick search..."
                                className="form-control form-control-sm"
                                style={{ paddingRight: '2rem', minWidth: '180px' }}
                            />
                            <Search size={14} className="position-absolute top-50 end-0 translate-middle-y me-2 text-secondary" />
                        </div>

                        <div className="position-relative me-2">
                            <Bell size={18} className="text-secondary" style={{ cursor: 'pointer' }} />
                            <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle"></span>
                        </div>

                        <div className="d-flex align-items-center">
                            <img
                                src="media/images/your-photo.jpg"
                                alt="Profile"
                                className="rounded-circle me-2"
                                width={28}
                                height={28}
                            />
                            <span className="fw-medium small">Rahul Kumar Tiwari</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Full-width horizontal line */}
            <hr className="my-2" />
        </>
    );
}

export default ProfileNavbar;
