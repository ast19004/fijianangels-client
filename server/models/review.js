const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reviewSchema = mongoose.Schema({
  staffId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  reviewDate: {
    type: Date,
    required: true,
  },
  reviewerName: {
    firstName: {
      type: String,
      required: true,
    },
    middleName: {
      type: String,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  reviewerContact: {
    contact_phone: {
      type: String,
      required: true,
    },
    contact_email: {
      type: String,
      required: true,
    },
  },
  servicesProvided: {
    type: Array,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Review", reviewSchema);
