const { validationResult } = require("express-validator");

const Review = require("../models/review");

exports.postReview = async (req, res, next) => {
  const today = new Date();
  const todaysDate = today.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });
  const post = new Review({
    reviewDate: todaysDate,
    reviewerName: req.body.fullName,
    review: req.body.review,
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

exports.getReviews = async (req, res, next) => {
  const allReviews = await Review.find().sort({ createdAt: -1 }); //Sort by createdAt DESCENDING (-1)
  res.status(200).json({
    message: "Fetched Reviews",
    reviews: allReviews,
  });
};