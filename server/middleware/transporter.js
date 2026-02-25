const nodemailer = require("nodemailer");

// utils/mailer.js
console.log("Mailer check - Process ID:", process.pid);
console.log("Mailer check - Password visible:", !!process.env.ZOHO_APP_PASSWORD);

// Set up Zoho Transporter
const transporter = nodemailer.createTransport({
  host: "smtppro.zoho.com", // 'pro' is for Workplace Standard
  port: 465,
  secure: true, // Use SSL
  auth: {
    user: "admin@fijianangels.com", // Your Zoho address
    pass: process.env.ZOHO_APP_PASSWORD,      // Your 16-char App Password
  },
});


// Verify the connection on startup
transporter.verify((error, success) => {
  if (error) {
    console.log("❌ Email Server Error:", error);
  } else {
    console.log("✅ Email Server is ready to take messages");
  }
});
