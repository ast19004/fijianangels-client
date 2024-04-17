const express = require("express");
const { body } = require("express-validator");

const router = express.Router();

const formController = require("../../controllers/homecarerequest");

const formValidation = [];

router.post("/form/carerequest", formController.postCareRequest);

module.exports = router;
