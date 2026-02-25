const express = require("express");
const { body } = require("express-validator");
const { uploadNone } = require("../../middleware/upload");

const router = express.Router();

const formController = require("../../controllers/homecarerequest");

const formValidation = [];

// router.post("/form/carerequest", formController.postCareRequest);
router.post("/form/carerequest", uploadNone, formController.postCareRequest);

module.exports = router;
