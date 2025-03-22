const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reviewSchema = mongoose.Schema(
  {
  reviewDate: {
    type: String,
    required: true,
  },
  reviewerName: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
  },
  { timestamps: true } // Auto-generates createdAt & updatedAt
);

module.exports = mongoose.model("Review", reviewSchema);
