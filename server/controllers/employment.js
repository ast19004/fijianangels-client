const { transporter } = require('../middleware/transporter');

exports.postEmploymentRequest = async (req, res) => {
  try {
    // 1. Log visibility immediately
    console.log("Check - req.body exists:", !!req.body);
    console.log("Check - req.file exists:", !!req.file);

    // 2. Transporter check
    if (!transporter || typeof transporter.sendMail !== 'function') {
      throw new Error("Transporter is not initialized correctly");
    }

    // Mail logic ...
       const data = req.body;
    const file = req.file; // Provided by your uploadFile middleware

    // Parse references back into an array/object
    const references = data.references ? JSON.parse(data.references) : [];

    // 1. Create a professional HTML template for the application
    const htmlContent = `
      <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: auto; border: 1px solid #e0e0e0; border-radius: 8px;">
        <div style="background-color: #2e5a88; color: white; padding: 20px; text-align: center;">
          <h2 style="margin: 0;">New Employment Application</h2>
          <p style="margin: 5px 0 0 0;">Fijian Angels Home Care Recruitment</p>
        </div>
        
        <div style="padding: 25px;">
          <h3 style="color: #2e5a88; border-bottom: 2px solid #f0f0f0; padding-bottom: 5px;">Applicant Information</h3>
          <p><strong>Name:</strong> ${data.first_name} ${data.last_name}</p>
          <p><strong>Email:</strong> <a href="mailto:${data.contact_email}">${data.contact_email}</a></p>
          <p><strong>Phone:</strong> ${data.contact_phone}</p>

          <h3 style="color: #2e5a88; border-bottom: 2px solid #f0f0f0; padding-bottom: 5px; margin-top: 25px;">References</h3>
          <ul style="list-style: none; padding: 0;">
            ${references.map(ref => `
              <li style="background: #f9fbfd; padding: 10px; margin-bottom: 10px; border-radius: 5px; border-left: 3px solid #2e5a88;">
                <strong>${ref.name}</strong> (${ref.relationship})<br/>
                <span style="font-size: 0.9em; color: #666;">Phone: ${ref.phone}</span>
              </li>
            `).join('')}
          </ul>

          <div style="margin-top: 25px; padding: 15px; background: #fff8e1; border: 1px solid #ffe082; border-radius: 5px;">
            <strong>Note:</strong> The applicant's resume is attached to this email as <em>${file ? file.originalname : 'No file provided'}</em>.
          </div>
        </div>
      </div>
    `;

    // 2. Configure Mail Options with Attachment
    const mailOptions = {
      from: '"Recruitment Portal" <admin@fijianangels.com>',
      to: "admin@fijianangels.com",
      replyTo: data.contact_email,
      subject: `Job Application: ${data.first_name} ${data.last_name}`,
      html: htmlContent,
      attachments: file ? [
        {
          filename: file.originalname,
          content: file.buffer, // Use buffer if using MemoryStorage, or 'path' if using DiskStorage
        }
      ] : []
    };

    // 3. Send via Zoho
    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: "Application sent successfully!" });

  } catch (error) {
    // This will print the EXACT error message in your VS Code terminal
    console.error("CRITICAL SERVER ERROR:", error.name, "->", error.message);
    
    res.status(500).json({ 
      success: false, 
      error: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined 
    });
  }
};