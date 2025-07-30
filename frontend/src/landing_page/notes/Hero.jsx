import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Upload, Trash2, FileText, Download, Eye, FileDown } from 'lucide-react';
import DropDown from './DropDown';

function Hero() {
  const [notes, setNotes] = useState([]);
  const [uploadMode, setUploadMode] = useState(false);
  const [user, setUser] = useState({});
  const [filters, setFilters] = useState({ year: '', department: '', subject: '' });
  const [formData, setFormData] = useState({
    name: '', content: '', year: '', department: '', subject: '', file: null
  });

  // Auth config for headers
  const token = localStorage.getItem("token");
  const authConfig = {
    headers: { Authorization: `Bearer ${token}` },
    withCredentials: true
  };

  useEffect(() => {
    fetchNotes();
    fetchProfile();
  }, [filters]);

  const fetchNotes = async () => {
    try {
      const query = new URLSearchParams(filters).toString();
      const res = await axios.get(`http://localhost:5000/api/notes?${query}`, authConfig);
      setNotes(res.data.notes);
    } catch (err) {
      console.error("Notes fetch failed", err);
    }
  };

  const fetchProfile = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/protected/profile", authConfig);
      setUser(res.data.user);
    } catch (err) {
      console.error("Profile fetch failed", err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/notes/${id}`, authConfig);
      fetchNotes();
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      Object.entries(formData).forEach(([k, v]) => data.append(k, v));

      await axios.post('http://localhost:5000/api/notes/upload', data, {
        ...authConfig,
        headers: {
          ...authConfig.headers,
          'Content-Type': 'multipart/form-data'
        }
      });

      setFormData({ name: '', content: '', year: '', department: '', subject: '', file: null });
      setUploadMode(false);
      fetchNotes();
    } catch (err) {
      console.error("Upload failed", err);
    }
  };

  const handleDownload = async (note) => {
    try {
      await axios.post(`http://localhost:5000/api/notes/${note._id}/increment-download`, {}, authConfig);
      window.open(`http://localhost:5000/uploads/${note.pdfUrl}`, "_blank");
    } catch (err) {
      console.error("Download failed", err);
    }
  };

  return (
    <div className="container mt-4">
      <DropDown filters={filters} onFilterChange={setFilters} />

      <div className="text-end mb-3">
        {!uploadMode ? (
          <button className="btn btn-primary" onClick={() => setUploadMode(true)}>
            <Upload size={16} className="me-2" /> Upload Note
          </button>
        ) : (
          <div className="card p-3 mb-3">
            <h5 className="fw-bold mb-3">Upload a Note</h5>
            <form onSubmit={handleUpload}>
              <div className="row g-3">
                {['name', 'content', 'year', 'department', 'subject'].map(field => (
                  <div key={field} className="col-md-6">
                    <input type="text" className="form-control" placeholder={field} required={field !== 'content'}
                      value={formData[field]}
                      onChange={(e) => setFormData({ ...formData, [field]: e.target.value })} />
                  </div>
                ))}
                <div className="col-12">
                  <input type="file" className="form-control" required
                    accept="application/pdf"
                    onChange={(e) => setFormData({ ...formData, file: e.target.files[0] })} />
                </div>
              </div>
              <div className="mt-3 d-flex gap-2">
                <button className="btn btn-success" type="submit">Submit</button>
                <button className="btn btn-outline-danger" type="button" onClick={() => setUploadMode(false)}>Cancel</button>
              </div>
            </form>
          </div>
        )}
      </div>

      <div className="row g-4">
        {notes.map(note => (
          <div key={note._id} className="col-12 col-md-6">
            <div className="border rounded-4 p-3 shadow-sm bg-white position-relative">
              <div className="position-absolute top-0 end-0 p-3 text-muted small d-flex align-items-center">
                <FileDown size={14} className="me-1" /> PDF
              </div>

              <h5 className="fw-bold mb-1">{note.name}</h5>
              <p className="text-muted">{note.content}</p>

              <div className="mb-2">
                <span className="badge bg-light text-primary me-2">{note.year}</span>
                <span className="badge bg-light text-success me-2">{note.department}</span>
                <span className="badge bg-light text-secondary">{note.subject}</span>
              </div>

              <div className="text-muted small">
                <Eye size={14} className="me-1" />
                Uploaded by <strong>{note.uploadedBy.name}</strong> • Downloads: {note.downloads || 0}
              </div>

              <hr className="my-3" />

              <div className="d-flex justify-content-between align-items-center text-muted small">
                <div className="d-flex align-items-center">
                  <FileText size={14} className="me-1" />
                  {note.pdfUrl}
                </div>
                <div className="d-flex align-items-center">
                  <Download size={14} className="me-1" />
                  <button className="btn btn-sm btn-link p-0 text-decoration-none" onClick={() => handleDownload(note)}>
                    Download
                  </button>
                </div>
              </div>

              {(user._id === note.uploadedBy._id || user.role === "admin") && (
                <div className="text-end mt-2">
                  <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(note._id)}>
                    <Trash2 size={14} /> Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
