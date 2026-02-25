// controllers/homecarerequest.js
const {transporter} = require('../middleware/transporter')

exports.postCareRequest = async (req, res) => {
  try {
    const data = req.body;

    // Create a clean HTML layout for Zoho
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; border: 1px solid #eee; padding: 20px;">
        <h2 style="color: #2e5a88;">New Care Request Received</h2>
        <hr />
        <p><strong>Name:</strong> ${data.first_name} ${data.last_name}</p>
        <p><strong>Email:</strong> ${data.contact_email}</p>
        <p><strong>Phone:</strong> ${data.contact_phone}</p>
        <p><strong>Services Requested:</strong> ${data.services}</p>
        
        ${data.additionalInfo ? `
          <div style="background: #f9f9f9; padding: 10px; border-left: 4px solid #2e5a88;">
            <strong>Additional Info:</strong><br/>
            ${data.additionalInfo}
          </div>
        ` : ""}
      </div>
    `;

    const mailOptions = {
      from: '"Website Portal" <admin@fijianangels.com>',
      to: "admin@fijianangels.com",
      replyTo: data.contact_email, // Allows you to reply directly to the customer
      subject: `New Care Inquiry: ${data.first_name} ${data.last_name}`,
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: "Email sent to Zoho!" });
  } catch (error) {
    console.error("Nodemailer error:", error);
    res.status(500).json({ success: false, error: "Failed to send email." });
  }
};