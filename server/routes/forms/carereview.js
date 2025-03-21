const express = require("express");
const { body } = require("express-validator");

const router = express.Router();

const reviewController = require("../../controllers/carereview");

router.post("/review", reviewController.postReview);
// router.post("/send-email", upload.single("file"), reviewController.emailPDF);

module.exports = router;
