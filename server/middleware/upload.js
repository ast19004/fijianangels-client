const sgMail = require("@sendgrid/mail");
const multer = require("multer");

// Set up storage for multer
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

//Set up SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.uploadFile = upload.single("file");

exports.sendEmail = async (req, res, next) => {
  try {
    // Access the file and other form data
    const { file } = req;
    const { originalname, buffer } = file;
    const { name, email, message } = req.body;
    console.log("Request Body:", req.body);

    const msg = {
      to: "annaastle5@gmail.com",
      from: email, // Use the user's email as the sender
      subject: "New Message from Your Website",
      text: `You have received a new message from your website:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
      attachments: [
        {
          content: buffer.toString("base64"),
          filename: originalname,
          type: file.mimetype,
          disposition: "attachment",
        },
      ],
    };
    // Send email
    await sgMail.send(msg);
    res.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    if (!res.headersSent) {
      res.status(500).json({ error: "Failed to send email" });
    }
  }
};
