const multer = require("multer");
const path = require("path");

// Configure storage
const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename : (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

// Filter file types
const fileFilter = (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    
    if(ext===".pdf" || ext===".docx" || ext===".jpg") {
        cb(null, true);
    }
    else {
        cb(new Error("Unsupported file type"), false);
    }
};

const upload = multer({
    storage,
    fileFilter,
    limits : { fileSize : 50 * 1024 * 1024 }                // Optional : limit upto 50MB
});

module.exports = upload;