import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Eye, Calendar, Download, FileText, FileDown, Trash2, Pencil } from 'lucide-react';

function Hero() {
    const [notes, setNotes] = useState([]);
    const [currentUserId, setCurrentUserId] = useState(null);
    const [userRole, setUserRole] = useState('');

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/notes', { withCredentials: true });
                setNotes(res.data.notes);
            } catch (err) {
                console.error("Failed to fetch notes", err);
            }
        };

        const fetchProfile = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/protected/profile', { withCredentials: true });
                setCurrentUserId(res.data.user._id);
                setUserRole(res.data.user.role);
            } catch (err) {
                console.error("Failed to fetch user", err);
            }
        };

        fetchNotes();
        fetchProfile();
    }, []);

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this note?")) return;

        try {
            await axios.delete(`http://localhost:5000/api/notes/${id}`, { withCredentials: true });
            setNotes(notes.filter(note => note._id !== id));
        } catch (err) {
            console.error("Delete failed", err);
            alert("Delete failed");
        }
    };

    const handleDownload = async (note) => {
        try {
            // Open download in new tab
            window.open(`http://localhost:5000/uploads/${note.pdfUrl}`, '_blank');

            // Increment download count
            await axios.post(`http://localhost:5000/api/notes/${note._id}/increment-download`, {}, { withCredentials: true });

            // Update local state
            setNotes(prev =>
                prev.map(n => (n._id === note._id ? { ...n, downloads: (n.downloads || 0) + 1 } : n))
            );
        } catch (err) {
            console.error("Download error", err);
        }
    };

    return (
        <div className="container mt-4">
            <div className="row g-4">
                {notes.map(note => (
                    <NoteCard
                        key={note._id}
                        note={note}
                        isOwner={note.uploadedBy._id === currentUserId}
                        isAdmin={userRole === 'admin'}
                        onDelete={() => handleDelete(note._id)}
                        onDownload={() => handleDownload(note)}
                    />
                ))}
            </div>
        </div>
    );
}

function NoteCard({ note, isOwner, isAdmin, onDelete, onDownload }) {
    return (
        <div className="col-12 col-md-6">
            <div className="border rounded-4 p-3 h-100 shadow-sm position-relative bg-white">
                <div className="position-absolute top-0 end-0 p-3 text-muted small d-flex align-items-center">
                    <FileDown size={14} className="me-1" />
                    {note.pdfUrl?.split('.').pop().toUpperCase() || 'File'}
                </div>

                <h5 className="fw-bold mb-1">{note.name}</h5>
                <p className="text-muted mb-2">{note.content}</p>

                <div className="mb-2">
                    <span className="badge bg-light text-primary me-2">{note.year}</span>
                    <span className="badge bg-light text-success me-2">{note.department}</span>
                    <span className="badge bg-light text-secondary">{note.subject}</span>
                </div>

                <div className="text-muted small mb-1">
                    <Eye size={14} className="me-1" />
                    Uploaded by <strong>{note.uploadedBy.name}</strong>
                </div>

                <div className="fw-medium mb-2">{note.subject}</div>

                <hr className="my-3" />

                <div className="d-flex justify-content-between align-items-center text-muted small">
                    <div className="d-flex align-items-center">
                        <FileText size={14} className="me-1" />
                        {note.pdfUrl}
                    </div>
                    <div className="d-flex align-items-center">
                        <Download size={14} className="me-1" />
                        {note.downloads || 0} downloads
                    </div>
                </div>

                <div className="text-end mt-2 d-flex gap-2 justify-content-end">
                    <button className="btn btn-sm btn-primary" onClick={onDownload}>
                        <Download size={16} className="me-1" /> Download
                    </button>
                    {(isOwner || isAdmin) && (
                        <>
                            <button className="btn btn-sm btn-outline-secondary">
                                <Pencil size={14} /> Edit
                            </button>
                            <button className="btn btn-sm btn-outline-danger" onClick={onDelete}>
                                <Trash2 size={14} /> Delete
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Hero;
