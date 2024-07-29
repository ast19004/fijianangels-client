const multer = require("multer"); // Set up storage for multer
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

exports.uploadFile = upload.single("file");

exports.sendEmail = (req, res, next) => {
  // Access the file and other form data
  const file = req.file;
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  // Log the received data for debugging
  console.log("File:", file);
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  // Your email sending logic here
  res.json({ message: "File received and processed successfully" });
};
