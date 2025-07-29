// Express Setup in app.js


require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/authRoutes");
const protectedRoutes = require("./routes/protectedRoutes");
const noteRoutes = require("./routes/noteRoutes");

const app = express();

// Middleware
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use(bodyParser.json());
app.use(cookieParser());

// Serve static files for notes
app.use("/uploads", express.static("uploads"));

// Mount the Routes
app.use("/api/auth", authRoutes);
app.use("/api/protected", protectedRoutes);                   // protects all private routes
app.use("/api/notes", noteRoutes);

module.exports = app;