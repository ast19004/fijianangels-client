const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reviewSchema = mongoose.Schema({
  reviewDate: {
    type: Date,
  },
  reviewerName: {
      type: String,
  },
  review: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Review", reviewSchema);
