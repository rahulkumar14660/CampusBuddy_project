import React from 'react';
import DoubtCard from './DoubtCard';

const dummyDoubts = [
    {
        id: 1,
        title: 'How does DNS resolution work?',
        description: 'Can someone explain how DNS resolves a domain name to an IP address?',
        tags: ['Networking', 'DNS'],
        postedBy: 'Ankit Singh',
        date: '2025-07-16'
    },
    {
        id: 2,
        title: 'Difference between useEffect and useLayoutEffect?',
        description: 'When should I use useLayoutEffect instead of useEffect in React?',
        tags: ['React', 'Hooks'],
        postedBy: 'Priya Mehta',
        date: '2025-07-15'
    }
];

function Doubts() {
    return (
        <div className="mt-4">
            {dummyDoubts.map(doubt => (
                <DoubtCard key={doubt.id} doubt={doubt} />
            ))}
        </div>
    );
}

export default Doubts;
