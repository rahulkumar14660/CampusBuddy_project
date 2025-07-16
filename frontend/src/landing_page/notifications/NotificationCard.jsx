import React from 'react';
import { BadgeCheck } from 'lucide-react';

function NotificationCard({ data }) {
    return (
        <div className={`card mb-3 p-3 rounded-4 shadow-sm ${!data.isRead ? 'bg-light' : ''}`}>
            <div className="d-flex justify-content-between align-items-start">
                <div>
                    <h6 className="mb-1">{data.message}</h6>
                    <small className="text-muted">{data.date}</small>
                </div>
                {!data.isRead && (
                    <span className="badge bg-success d-flex align-items-center">
                        <BadgeCheck size={14} className="me-1" /> New
                    </span>
                )}
            </div>
        </div>
    );
}

export default NotificationCard;
