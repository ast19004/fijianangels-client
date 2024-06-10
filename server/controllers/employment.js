const { validationResult } = require("express-validator");

exports.postEmploymentRequest = async (req, res, next) => {
  //*****   Applicant info   *****
  //Applicant name
  const firstName = req.body.first_name;
  const middleName = req.body.middle_initial;
  const lastName = req.body.last_name;

  //Applicant address info
  const street = req.body.street;
  const unitNum = req.body.unit_apt;
  const city = req.body.city;
  const state = req.body.state;
  const zipcode = req.body.zipcode;

  //*****     Education info     *****
  //High School
  const highSchoolName = req.body.high_school;
  //High School Address
  const highSchoolStreet = req.body.high_school_street;
  const highSchoolUnitNum = req.body.high_school_unit_apt;
  const highSchoolCity = req.body.high_school_city;
  const highSchoolState = req.body.high_school_state;
  const highSchoolZipcode = req.body.high_school_zipcode;

  //High School Attendance
  const highSchoolStartDate = req.body.high_school_start_date;
  const highSchoolEndDate = req.body.high_school_end_date;
  const isHighSchoolGraduate = req.is_high_school_graduate;

  //College
  const collegeName = req.body.college;
  //College Address
  const collegeStreet = req.body.college_street;
  const collegeUnitNum = req.body.college_unit_apt;
  const collegeCity = req.body.college_city;
  const collegeState = req.body.college_state;
  const collegeZipcode = req.body.college_zipcode;

  //College Attendance
  const collegeStartDate = req.body.college_start_date;
  const collegeEndDate = req.body.college_end_date;
  const isCollegeGraduate = req.is_college_graduate;

  //Other Education
  const otherName = req.body.other;
  //Other Education Address
  const otherStreet = req.body.other_street;
  const otherUnitNum = req.body.other_unit_apt;
  const otherCity = req.body.other_city;
  const otherState = req.body.other_state;
  const otherZipcode = req.body.other_zipcode;

  //Other Education Attendance
  const otherStartDate = req.body.college_start_date;
  const otherEndDate = req.body.college_end_date;
  const isOtherGraduate = req.is_college_graduate;

  //*****   References info   *****

  //*****   Previous Employment info   *****

  //*****   Miliary Service   *****

  //*****   Form Signature   *****

  const phone = req.body.phone;
  const email = req.body.email;

  const services = req.body.services;
  const reviewText = req.body.extra_info;
};
