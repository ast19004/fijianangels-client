const express = require("express");
const { body } = require("express-validator");

const router = express.Router();

const formController = require("../../controllers/employment");

const formValidation = [];

router.post("/form/employment", formController.postEmploymentRequest);

module.exports = router;
