const express = require("express");
const { body } = require("express-validator");
const multer = require("multer");

const router = express.Router();

const reviewController = require("../../controllers/carereview");

// Set up multer for file handling
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/send-email", upload.single("file"), reviewController.emailPDF);

module.exports = router;
