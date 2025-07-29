const { NoteModel } = require("../models/NoteModel");

// Upload a new note
const uploadNote = async (req, res) => {
    try {
        if (!req.file) return res.status(400).json({ message: "No file uploaded" });

        const { name, content, year, department, subject } = req.body;

        const newNote = new NoteModel({
            name,
            content,
            year,
            department,
            subject,
            uploadedBy: req.user.id,
            pdfUrl: req.file.filename,
        });
        await newNote.save();
        res.status(201).json({ message: "Note uploaded successfully", note: newNote });
    } catch (err) {
        console.error("Upload error:", err);
        res.status(500).json({ message: "Failed to upload note" });
    }
};

// Get Notes with optional filters
const getNotes = async (req, res) => {
    try {
        const { year, department, subject } = req.query;

        const filter = {};
        if (year) filter.year = year;
        if (department) filter.department = department;
        if (subject) filter.subject = subject;

        const notes = await NoteModel.find(filter).populate("uploadedBy", "name email");

        res.status(200).json({ notes });
    } catch (err) {
        console.error("Fetch error: ", err);
        res.status(500).json({ message: "Failed to fetch notes" });
    }
};

// Delete Note (only uploader or admin)
const deleteNote = async (req, res) => {
    try {
        const note = await NoteModel.findById(req.params.id);

        if (!note) return res.status(404).json({ message: "Note not found" });

        const isOwner = note.uploadedBy.toString() === req.user.id;
        const isAdmin = req.user.role === "admin";

        if (!isOwner && !isAdmin)
            return res.status(403).json({ message: "Not authorized to delete this note" });

        await note.deleteOne();
        res.status(200).json({ message: "Note deleted" });
    } catch (err) {
        console.error("Delete error: ", err);
        res.status(500).json({ message: "Failed to delete note" });
    }
};

// Increment download count only (used by frontend download link)
const incrementDownload = async (req, res) => {
    try {
        const note = await NoteModel.findById(req.params.id);
        if (!note) return res.status(404).json({ message: "Note not found" });

        note.downloads += 1;
        await note.save();

        res.status(200).json({ message: "Download count incremented" });
    } catch (err) {
        console.error("Increment error:", err);
        res.status(500).json({ message: "Failed to increment download" });
    }
};

// Download note file (alternative method, if needed)
const downloadNote = async (req, res) => {
    try {
        const note = await NoteModel.findById(req.params.id);
        if (!note) return res.status(404).json({ message: "Note not found" });

        note.downloads += 1;
        await note.save();

        const filePath = `uploads/${note.pdfUrl}`;
        res.download(filePath);
    } catch (err) {
        console.error("Download error:", err);
        res.status(500).json({ message: "Failed to download note" });
    }
};

module.exports = { uploadNote, getNotes, deleteNote, downloadNote, incrementDownload };