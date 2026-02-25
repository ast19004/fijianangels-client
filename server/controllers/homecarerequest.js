const { validationResult } = require("express-validator");

exports.postCareRequest = async (req, res, next) => {
  if (!req.body) {
  return res.status(400).json({ error: "No data received" }); // Always return!
}
};
