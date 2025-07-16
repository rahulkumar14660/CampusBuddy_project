import React from 'react';
import { MessageSquare, BookOpen, Calendar, MessageCircle } from 'lucide-react';

function ProfileData() {
    const stats = [
        { icon: <MessageCircle size={24} className="text-primary" />, value: 12, label: 'Questions Asked' },
        { icon: <MessageSquare size={24} className="text-primary" />, value: 28, label: 'Answers Given' },
        { icon: <BookOpen size={24} className="text-primary" />, value: 15, label: 'Notes Uploaded' },
        { icon: <Calendar size={24} className="text-primary" />, value: 8, label: 'Events Attended' },
    ];

    return (
        <div className="mx-3 mx-md-5 mb-4">
            <div className="row g-3">
                {stats.map((item, index) => (
                    <div key={index} className="col-6 col-md-3">
                        <div className="border rounded-4 p-3 text-center bg-white h-100 shadow-sm">
                            <div className="mb-2">{item.icon}</div>
                            <h4 className="fw-bold mb-1">{item.value}</h4>
                            <p className="text-secondary mb-0">{item.label}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProfileData;
