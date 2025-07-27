// For sending OTP emails using Nodemailer

const nodemailer = require("nodemailer");

const sendEmail = async(to, subject, htmlContent) => {
    try {
        const transporter = nodemailer.createTransport({
            service : "gmail",
            auth : {
                user : process.env.EMAIL_USER,
                pass : process.env.EMAIL_PASS
            }
        });

        // Optional: Verify SMTP connection
        transporter.verify((err, success) => {
        if (err) console.error("Nodemailer connection error:", err);
        else console.log("Nodemailer is ready to send emails");
        });

        const mailOptions = {
            from : `CampusBuddy <${process.env.EMAIL_USER}>`,
            to,
            subject,
            html : htmlContent
        };

        await transporter.sendMail(mailOptions);
        console.log(`Email sent to ${to}`);
    }
    catch(err) {
        console.log("Failed to send email: ", err);
        throw err;
    }
};

module.exports = { sendEmail };