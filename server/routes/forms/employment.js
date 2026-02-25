const express = require("express");
const { body } = require("express-validator");
const { uploadFile} = require('../../middleware/upload');

const router = express.Router();

const formController = require("../../controllers/employment");

const formValidation = [];

router.post("/form/employment", uploadFile, formController.postEmploymentRequest);

module.exports = router;
