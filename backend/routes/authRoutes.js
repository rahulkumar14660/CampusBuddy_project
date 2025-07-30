const express = require("express");
const router = express.Router();

const { register, verifyOtp, login, resendOtp } = require("../controllers/authController");

router.post("/register", register);             // sends otp
router.post("/verify-otp", verifyOtp);          // creates user
router.post("/login", login);
router.post("/resend-otp", resendOtp);

module.exports = router;