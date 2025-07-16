import React from 'react';
import { Trophy, FileText, MessageSquare, Users } from 'lucide-react';

function Achievements() {
    const achievements = [
        {
            icon: <Trophy size={20} className="text-warning me-2" />,
            title: 'Top Contributor',
            description: 'Most helpful answers this month'
        },
        {
            icon: <MessageSquare size={20} className="text-primary me-2" />,
            title: 'Forum Helper',
            description: 'Answered 25+ questions'
        },
        {
            icon: <FileText size={20} className="text-success me-2" />,
            title: 'Note Sharer',
            description: 'Uploaded 10+ study materials'
        },
        {
            icon: <Users size={20} className="text-purple me-2" />,
            title: 'Event Organizer',
            description: 'Organized 3 successful events'
        }
    ];

    return (
        <div className="mx-3 mx-md-5 mb-4">
            <h5 className="fw-bold mb-3">Achievements</h5>
            <div className="row g-3">
                {achievements.map((item, index) => (
                    <div className="col-12 col-md-6" key={index}>
                        <div className="border rounded-4 p-3 bg-white d-flex align-items-start shadow-sm">
                            {item.icon}
                            <div>
                                <h6 className="fw-semibold mb-1">{item.title}</h6>
                                <p className="text-secondary mb-0 small">{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Achievements;
