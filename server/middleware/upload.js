const nodemailer = require("nodemailer");
const multer = require("multer");

// Set up storage for multer
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Set up Zoho Transporter
const transporter = nodemailer.createTransport({
  host: "smtppro.zoho.com", // 'pro' is for Workplace Standard
  port: 465,
  secure: true, // Use SSL
  auth: {
    user: "admin@fijianangelshomecare.info", // Your Zoho address
    pass: process.env.ZOHO_APP_PASSWORD,      // Your 16-char App Password
  },
});

exports.uploadFile = upload.single("file");

exports.sendEmail = async (req, res, next) => {
  try {
    // Access the file and other form data
    const { file } = req;
    const { originalname, buffer } = file;
    const { name, email, message} = req.body;

    const mailOptions = {
      // MUST be your Zoho email or a verified alias
      from: `"Website Form" <office@fijianangelshomecare.info>`, 
      to: "office@fijianangelshomecare.info", // Send it to yourself
      replyTo: email, // This allows you to hit 'Reply' to talk to the sender
      subject: `New Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      attachments: file ? [
        {
          filename: file.originalname,
          content: file.buffer, // Nodemailer handles buffers directly!
        },
      ] : [],
    };
    // Send email
   await transporter.sendMail(mailOptions);
    res.json({ message: "Email sent successfully via Zoho" });
  } catch (error) {
    console.error("Zoho Mail Error:", error);
    if (!res.headersSent) {
      res.status(500).json({ error: "Failed to send email" });
    }
  }
};
