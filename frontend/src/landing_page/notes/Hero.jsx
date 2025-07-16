import React from 'react';
import { Eye, Calendar, Download, FileText, FileDown } from 'lucide-react';

function Hero() {
    return (
        <div className="container mt-4">
            <div className="row g-4">

                {/* Note Card 1 */}
                <NoteCard
                    title="Data Structures and Algorithms Complete Notes"
                    description="Comprehensive notes covering all major data structures, algorithms, and their time complexities."
                    year="2nd Year"
                    branch="Computer Science"
                    code="CS201"
                    tags={["algorithms", "data-structures", "coding"]}
                    uploadedBy="Sarah Chen"
                    date="1/10/2025"
                    subject="Data Structures • 4th Semester"
                    fileName="DSA_Complete_Notes.pdf"
                    size="12.5 MB"
                    downloads={156}
                />

                {/* Note Card 2 */}
                <NoteCard
                    title="Advanced Database Management Systems"
                    description="Advanced concepts in DBMS including normalization, indexing, and query optimization."
                    year="3rd Year"
                    branch="Computer Science"
                    code="CS301"
                    tags={["database", "sql", "normalization"]}
                    uploadedBy="Mike Rodriguez"
                    date="1/8/2025"
                    subject="Database Systems • 6th Semester"
                    fileName="Advanced_DBMS.pdf"
                    size="13.2 MB"
                    downloads={89}
                />

                {/* Note Card 3 */}
                <NoteCard
                    title="Linear Algebra Quick Reference"
                    description="Essential formulas and concepts for linear algebra including matrices, vectors, and eigenvalues."
                    year="1st Year"
                    branch="Computer Science"
                    code="MA101"
                    tags={["mathematics", "linear-algebra", "formulas"]}
                    uploadedBy="Emily Watson"
                    date="1/5/2025"
                    subject="Mathematics • 2nd Semester"
                    fileName="Linear_Algebra_Reference.pdf"
                    size="5.8 MB"
                    downloads={203}
                />

                {/* Note Card 4 */}
                <NoteCard
                    title="Digital Signal Processing Fundamentals"
                    description="Core concepts of DSP including Fourier transforms, filters, and signal analysis."
                    year="3rd Year"
                    branch="Electronics & Communication"
                    code="EC301"
                    tags={["dsp", "signals", "fourier"]}
                    uploadedBy="Raj Patel"
                    date="1/12/2025"
                    subject="Signal Processing • 5th Semester"
                    fileName="DSP_Fundamentals.pdf"
                    size="10.7 MB"
                    downloads={61}
                />

            </div>
        </div>
    );
}

function NoteCard({
    title, description, year, branch, code, tags,
    uploadedBy, date, subject, fileName, size, downloads
}) {
    return (
        <div className="col-12 col-md-6">
            <div className="border rounded-4 p-3 h-100 shadow-sm position-relative bg-white">
                
                {/* Top-right file size */}
                <div className="position-absolute top-0 end-0 p-3 text-muted small d-flex align-items-center">
                    <FileDown size={14} className="me-1" />
                    {size}
                </div>

                <div className="w-100">
                    <h5 className="fw-bold mb-1">{title}</h5>
                    <p className="text-muted mb-2">{description}</p>

                    {/* Tags */}
                    <div className="mb-2">
                        <span className="badge bg-light text-primary me-2">👁 {year}</span>
                        <span className="badge bg-light text-success me-2">{branch}</span>
                        <span className="badge bg-light text-secondary">{code}</span>
                    </div>

                    <div className="mb-2">
                        {tags.map((tag, i) => (
                            <span key={i} className="badge bg-primary-subtle text-primary me-2">{tag}</span>
                        ))}
                    </div>

                    {/* Uploaded info */}
                    <div className="text-muted small mb-1">
                        <Eye size={14} className="me-1" />
                        Uploaded by <strong>{uploadedBy}</strong>
                    </div>
                    <div className="text-muted small mb-2">
                        <Calendar size={14} className="me-1" />
                        {date}
                    </div>

                    <div className="fw-medium mb-2">{subject}</div>

                    {/* Horizontal line */}
                    <hr className="my-3" />

                    {/* File name and download count */}
                    <div className="d-flex justify-content-between align-items-center text-muted small">
                        <div className="d-flex align-items-center">
                            <FileText size={14} className="me-1" />
                            {fileName}
                        </div>
                        <div className="d-flex align-items-center">
                            <Download size={14} className="me-1" />
                            {downloads} downloads
                        </div>
                    </div>

                    {/* Download button */}
                    <div className="text-end mt-2">
                        <button className="btn btn-primary btn-sm">
                            <Download size={16} className="me-1" />
                            Download
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
