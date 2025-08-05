const express = require("express");
const router = express.Router();

const { register, verifyOtp, login, resendOtp } = require("../controllers/authController");

router.post("/register", register);             // /api/auth/register
router.post("/verify-otp", verifyOtp);          // /api/auth/verify-otp
router.post("/login", login);                   // /api/auth/login
router.post("/resend-otp", resendOtp);          // /api/auth/resend-otp

module.exports = router;