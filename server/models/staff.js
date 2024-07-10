const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const staffSchema = mongoose.Schema({
  staffId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  fullName: {
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
  contact: {
    contact_phone: {
      type: String,
      required: true,
    },
    contact_email: {
      type: String,
      required: true,
    },
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Staff", staffSchema);
