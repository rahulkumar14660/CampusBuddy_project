import React from 'react';
import { ChevronUp, ChevronDown, CheckCircle, MessageSquare, Eye } from 'lucide-react';

const questions = [
    {
        id: 1,
        title: 'How to optimize SQL queries for large datasets?',
        content: `I'm working on a project that involves querying large tables with millions of rows. What are the best practices for optimizing SQL queries to improve performance?`,
        voteCount: 15,
        tags: ['sql', 'database', 'optimization', 'performance'],
        metaTags: ['3rd Year', 'Computer Science', 'Database Systems'],
        answers: 2,
        views: 98,
        date: '1/09/2025',
        user: 'Alex Johnson', // in the data but not rendered
        solved: true,
    },
    {
        id: 2,
        title: 'React useEffect cleanup function not working',
        content: `I have a React component that sets up an interval in useEffect, but the cleanup function doesn't seem to clear it properly.`,
        voteCount: 8,
        tags: ['react', 'useeffect', 'javascript', 'hooks'],
        metaTags: ['4th Year', 'Computer Science', 'Web Development'],
        answers: 1,
        views: 45,
        date: '1/11/2025',
        user: 'Jane Smith',
        solved: false,
    },
    {
        id: 3,
        title: 'Understanding Fourier Transform in Signal Processing',
        content: `Can someone explain the practical applications of Fourier Transform in digital signal processing?`,
        voteCount: 12,
        tags: ['dsp', 'fourier-transform', 'signals', 'mathematics'],
        metaTags: ['3rd Year', 'Electronics & Communication', 'Digital Signal Processing'],
        answers: 0,
        views: 67,
        date: '1/10/2025',
        user: 'Alex Chen',
        solved: true,
    },
];

function Hero() {
    return (
        <div className="container mt-4">
            <h4 className="fw-semibold mb-3">Discussion Forum</h4>

            {/* Purple info box */}
            <div className="p-3 rounded-4 mb-4" style={{ backgroundColor: '#f4efff' }}>
                <h6 className="text-purple mb-0 fw-semibold">Questions for Your Year & Department</h6>
                <p className="text-muted small mb-0">1 questions from 3rd Year Computer Science students</p>
            </div>

            {questions.map((q) => (
                <div key={q.id} className="border rounded-4 p-3 mb-3 d-flex">
                    {/* Vote Section */}
                    <div className="text-center px-3 d-flex flex-column align-items-center justify-content-center">
                        <ChevronUp className="text-muted mb-1" />
                        <div className="fw-bold">{q.voteCount}</div>
                        <ChevronDown className="text-muted mt-1" />
                    </div>

                    {/* Content Section */}
                    <div className="flex-grow-1">
                        <div className="d-flex justify-content-between align-items-start">
                            <h5 className="fw-semibold mb-1">{q.title}</h5>
                            {q.solved && <CheckCircle size={20} className="text-success" />}
                        </div>
                        <p className="text-muted mb-2">{q.content}</p>

                        {/* Meta Tags */}
                        <div className="mb-2 d-flex flex-wrap gap-2">
                            {q.metaTags.map((tag, index) => (
                                <span key={index} className="badge bg-light text-muted">{tag}</span>
                            ))}
                        </div>

                        {/* Topic Tags */}
                        <div className="mb-2 d-flex flex-wrap gap-2">
                            {q.tags.map((tag, index) => (
                                <span key={index} className="badge bg-primary-subtle text-primary">{tag}</span>
                            ))}
                        </div>

                        {/* Footer Info (without user) */}
                        <div className="d-flex justify-content-between text-muted small mt-2">
                            <div className="d-flex gap-3 align-items-center">
                                <span className="d-flex align-items-center">
                                    <MessageSquare size={14} className="me-1" /> {q.answers} answers
                                </span>
                                <span className="d-flex align-items-center">
                                    <Eye size={14} className="me-1" /> {q.views} views
                                </span>
                            </div>
                            <div>
                                <span>{q.date}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Hero;
