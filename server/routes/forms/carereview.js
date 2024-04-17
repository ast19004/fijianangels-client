const express = require("express");
const { body } = require("express-validator");

const router = express.Router();

const formController = require("../../controllers/carereview");

const formValidation = [];

router.post("form/carereview", formController.postReview);

module.exports = router;
