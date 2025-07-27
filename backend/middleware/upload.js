const multer = require("multer");
const path = require("path");

// Configure storage
const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename : (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalName}`);
    }
});

// Filter file types
const fileFilter = (req, file, cb) => {
    const ext = path.extname(file.originalName).toLowerCase();
    
    if(ext===".pdf" || ext===".docx" || ext===".jpg") {
        cb(null, true);
    }
    else {
        cb(new Error("Unsupported file type"), false);
    }
};

module.exports = upload;