import React from 'react';

function DoubtCard({ doubt }) {
    return (
        <div className="card mb-3 shadow-sm">
            <div className="card-body">
                <h5 className="card-title">{doubt.title}</h5>
                <p className="card-text">{doubt.description}</p>
                <div className="mb-2">
                    {doubt.tags.map((tag, index) => (
                        <span key={index} className="badge bg-secondary me-2">{tag}</span>
                    ))}
                </div>
                <small className="text-muted">Posted by {doubt.postedBy} on {doubt.date}</small>
            </div>
        </div>
    );
}

export default DoubtCard;
