import React from 'react';
import NotificationCard from './NotificationCard';

const dummyNotifications = [
    {
        id: 1,
        type: 'Event',
        message: 'New Hackathon announced: TechBlaze 2025!',
        date: 'July 15, 2025',
        isRead: false
    },
    {
        id: 2,
        type: 'Note',
        message: 'Operating Systems notes for Unit 3 uploaded.',
        date: 'July 14, 2025',
        isRead: true
    },
    {
        id: 3,
        type: 'Forum',
        message: 'Your doubt on DNS has a new answer!',
        date: 'July 13, 2025',
        isRead: false
    }
];

function Hero() {
    return (
        <div className="mx-3 mx-md-5">
            {dummyNotifications.map((item) => (
                <NotificationCard key={item.id} data={item} />
            ))}
        </div>
    );
}

export default Hero;
