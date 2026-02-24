const express = require("express");
const { body } = require("express-validator");

const router = express.Router();

const formController = require("../../controllers/homecarerequest");

const formValidation = [];

// router.post("/form/carerequest", formController.postCareRequest);
router.post("/form/carerequest", () => { "You made it to the request backend"});

module.exports = router;
