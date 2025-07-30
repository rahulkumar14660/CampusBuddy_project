const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/UserModel");

const authMiddleware = async (req, res, next) => {
  try {
    // Get token from Authorization header or cookies
    const token = req.headers.authorization?.split(" ")[1] || req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "No token provided. Access denied." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await UserModel.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({ message: "Invalid token. User not found." });
    }

    req.user = user;
    next();
  } catch (err) {
    console.error("Auth error:", err);
    res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = authMiddleware;
