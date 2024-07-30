const { validationResult } = require("express-validator");

exports.postReview = async (req, res, next) => {
  const userFirstName = req.body.user_first_name;
  const userMiddleName = req.body.user_middle_initial;
  const userLastName = req.body.user_last_name;

  const caregiverFirstName = req.body.caregiver_first_name;
  const caregiverMiddleName = req.body.caregiver_middle_initial;
  const caregiverLastName = req.body.caregiver_last_name;

  const startDate = req.body.start_date;
  const endDate = req.body.end_date;

  const reviewText = req.body.review_text;
};
