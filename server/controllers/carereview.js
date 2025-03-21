const { validationResult } = require("express-validator");

const Review = require("../models/review");

exports.postReview = async (req, res, next) => {
  const todaysDate = new Date().toLocaleDateString();
  const userFullName = req.body.fullName;
  const reviewText = req.body.review;

  const post = new Review({
    reviewDate: todaysDate,
    reviewerName: userFullName,
    review: reviewText,
  })
  return post.save()
    .then((savedReviewData) => {
      res
        .status(201)
        .json({ message: "Review Added Successfully.", review: savedReviewData });
    })
    .catch((err) => {
      const error = new Error(err);
      if (!err.statusCode) {
        error.statusCode = 500;
      }
      return next(error);
    });
};
