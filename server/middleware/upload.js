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
const nodemailer = require("nodemailer");

// Transporter stays outside for better performance
const transporter = nodemailer.createTransport({
  host: "smtppro.zoho.com",
  port: 465,
  secure: true, 
  auth: {
    user: "office@fijianangelshomecare.info",
    pass: process.env.ZOHO_APP_PASSWORD,
  },
});

exports.sendEmail = async (req, res) => {
  try {
    const { name, email, message, ...otherFields } = req.body;
    const file = req.file; // From Multer

    // 1. Dynamically build table rows for "otherFields" (services, references, etc.)
    let extraDataRows = "";
    for (const [key, value] of Object.entries(otherFields)) {
      if (value) {
        // Formats keys like 'caregiver_name' to 'Caregiver Name'
        const label = key.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
        extraDataRows += `
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">${label}:</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${value}</td>
          </tr>`;
      }
    }

    // 2. Create the Universal HTML Template
    const htmlTemplate = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; border: 1px solid #eee; padding: 20px;">
        <h2 style="color: #2e5a88;">New Website Submission</h2>
        <p><strong>From:</strong> ${name} (<a href="mailto:${email}">${email}</a>)</p>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          ${extraDataRows}
        </table>

        <div style="background: #f4f4f4; padding: 15px; border-radius: 4px;">
          <p style="margin-top: 0; font-weight: bold;">Message/Review:</p>
          <p style="white-space: pre-wrap;">${message || "No message provided."}</p>
        </div>
        
        <p style="font-size: 11px; color: #999; margin-top: 20px;">
          Sent from fijianangelshomecare.info
        </p>
      </div>
    `;

    // 3. Mail Options
    const mailOptions = {
      from: `"Fijian Angels Website" <office@fijianangelshomecare.info>`,
      to: "office@fijianangelshomecare.info",
      replyTo: email, 
      subject: `New Form Submission: ${name}`,
      html: htmlTemplate,
      attachments: file ? [{
        filename: file.originalname,
        content: file.buffer // Directly handles the resume/PDF buffer
      }] : []
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email delivered successfully" });

  } catch (error) {
    console.error("Nodemailer Universal Error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
};
};
