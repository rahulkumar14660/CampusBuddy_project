import React from 'react';

function RecentActivities() {
    const activities = [
        {
            color: '#0d6efd', // Bootstrap primary
            text: 'Uploaded new notes: "Advanced Algorithms"',
            time: '2 days ago',
        },
        {
            color: '#198754', // Bootstrap success
            text: 'Answered question: "How to optimize SQL queries?"',
            time: '3 days ago',
        },
        {
            color: '#6f42c1', // Purple
            text: 'Registered for event: "Machine Learning Workshop"',
            time: '5 days ago',
        },
    ];

    return (
        <div className="mx-3 mx-md-5 mb-4">
            <h5 className="fw-bold mb-3">Recent Activity</h5>
            <div
                className="border rounded-4 bg-white p-3"
                style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}
            >
                {activities.map((item, index) => (
                    <div
                        key={index}
                        className={`d-flex justify-content-between align-items-start py-2 ${
                            index < activities.length - 1 ? 'border-bottom' : ''
                        }`}
                    >
                        <div className="d-flex align-items-start">
                            <span
                                style={{
                                    backgroundColor: item.color,
                                    width: '8px',
                                    height: '8px',
                                    borderRadius: '50%',
                                    marginTop: '6px',
                                    marginRight: '10px',
                                }}
                            ></span>
                            <span>{item.text}</span>
                        </div>
                        <small className="text-muted">{item.time}</small>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RecentActivities;
