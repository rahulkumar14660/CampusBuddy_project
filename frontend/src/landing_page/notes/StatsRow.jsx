import React, { useEffect, useState } from 'react';
import axios from 'axios';

function StatsRow() {
    const [notesCount, setNotesCount] = useState(0);
    const [totalDownloads, setTotalDownloads] = useState(0);
    const [subjectsCovered, setSubjectsCovered] = useState(0);
    const [yearCount, setYearCount] = useState(0);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/notes", { withCredentials: true });
                const notes = res.data.notes;

                setNotesCount(notes.length);
                setTotalDownloads(notes.reduce((sum, n) => sum + (n.downloads || 0), 0));
                setSubjectsCovered(new Set(notes.map(n => n.subject)).size);
                setYearCount(new Set(notes.map(n => n.year)).size);
            } catch (err) {
                console.error("Stats fetch failed", err);
            }
        };

        fetchStats();
    }, []);

    return (
        <div className="row text-center mt-4 g-3 mx-3 mx-md-5">
            <div className="col-6 col-md-3">
                <div className="border rounded-4 p-3">
                    <h5 className="fw-bold mb-1">{notesCount}</h5>
                    <p className="text-secondary mb-0">Available Notes</p>
                </div>
            </div>
            <div className="col-6 col-md-3">
                <div className="border rounded-4 p-3">
                    <h5 className="fw-bold mb-1">{subjectsCovered}</h5>
                    <p className="text-secondary mb-0">Subjects Covered</p>
                </div>
            </div>
            <div className="col-6 col-md-3">
                <div className="border rounded-4 p-3">
                    <h5 className="fw-bold mb-1">{totalDownloads}</h5>
                    <p className="text-secondary mb-0">Total Downloads</p>
                </div>
            </div>
            <div className="col-6 col-md-3">
                <div className="border rounded-4 p-3">
                    <h5 className="fw-bold mb-1">{yearCount}</h5>
                    <p className="text-secondary mb-0">Academic Years</p>
                </div>
            </div>
        </div>
    );
}

export default StatsRow;
