const multer = require("multer");
const sgMail = require("@sendgrid/mail");
const { validationResult } = require("express-validator");

exports.emailPDF = async (req, res, next) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
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

  sgMail
    .send(msg)
    .then(() => {
      res.status(200).send("Email sent successfully");
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Failed to send email");
    });
};

exports.postReview = async (req, res, next) => {
  const userFirstName = req.body.user_first_name;
  const userMiddleName = req.body.user_middle_initial;
  const userLastName = req.body.user_last_name;

  const caregiverFirstName = req.body.caregiver_first_name;
  const caregiverMiddleName = req.body.caregiver_middle_initial;
  const caregiverLastName = req.body.caregiver_last_name;

  const startDate = req.body.start_date;
  const endDate = req.body.end_date;

  const reviewText = req.body.review_text;
};
