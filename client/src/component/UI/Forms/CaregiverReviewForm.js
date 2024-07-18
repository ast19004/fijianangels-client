import { useState } from "react";
import { updateInput } from "../../../util/formdata";
import { isEmail, isMobilePhone } from "validator";
import {
  validate,
  validateIsEmpty,
  setErrors,
  checkIsFormValid,
} from "../../../util/validation";

import FullName from "../InputGroups/FullName";
import Contact from "../InputGroups/Contact";
import Form from "../Forms/Form";
import FormTextareaInput from "../Inputs/FormTextareaInput";
import FormSelectServices from "../Inputs/FormSelectServices";
import FormDateInput from "../Inputs/FormDateInput";
import { getTodaysDate } from "../../../util/Date";

const CaregiverReviewForm = (props) => {
  //TODO: find efficient way to see if form has any errors
  const currentDate = getTodaysDate();

  //Error state initial values
  const nameErrFreeState = {
    first_name: "",
    middle_name: "",
    last_name: "",
  };
  const contactErrFreeState = {
    contact_phone: "",
    contact_email: "",
  };

  //Error states
  const [formHasErrors, setFormHasErrors] = useState(false);
  const [reviewerNameErrors, setReviewerNameErrors] =
    useState(nameErrFreeState);
  const [reviewerContactErrors, setReviewerContactErrors] =
    useState(contactErrFreeState);
  const [caregiverNameErrors, setCaregiverNameErrors] =
    useState(nameErrFreeState);
  const [servicesErrors, setServicesErrors] = useState("");
  const [startDateErrors, setStateDateErrors] = useState("");
  const [endDateErrors, setEndDateErrors] = useState("");
  const [reviewErrors, setReviewErrors] = useState("");

  //All types on inputErrors
  const inputErrors = [
    reviewerNameErrors,
    reviewerContactErrors,
    caregiverNameErrors,
    servicesErrors,
    startDateErrors,
    endDateErrors,
    reviewErrors,
  ];

  //Form input values
  const [reviewInfo, setReviewInfo] = useState({
    todaysDate: currentDate,
    //Reviewer Info
    reviewerName: {
      first_name: "",
      middle_name: "",
      last_name: "",
    },
    reviewerContact: {
      contact_phone: "",
      contact_email: "",
    },
    //Caregiver Info
    caregiverName: {
      first_name: "",
      middle_name: "",
      last_name: "",
    },
    services: [],
    startDate: "",
    endDate: "",
    review: "",
  });

  const handleInputChange = (dataName, data) => {
    updateInput(dataName, data, setReviewInfo);
  };

  const handleServiceInputChange = (dataName, data) => {
    handleInputChange(dataName, data);
  };

  //Form validation functions
  const validateContact = (name, value) => {
    const emptyError = validateIsEmpty(value);
    let errors = emptyError;
    let validationObj;
    switch (name) {
      case "contact_phone":
        const checkInvalidPhone = (value) => {
          return !isMobilePhone(value, "en-US");
        };
        validationObj = [[checkInvalidPhone, "Must be a valid phone #"]];
        break;
      case "contact_email":
        const checkInvalidEmail = (value) => {
          return !isEmail(value);
        };
        validationObj = [[checkInvalidEmail, "Must be a valid email"]];
        break;

      default:
        validationObj = [[() => {}, ""]];
    }
    const validationErrors = validate(value, validationObj);
    errors = errors.length ? errors.concat(validationErrors) : validationErrors;
    return errors;
  };

  const handleReviewerNameValidation = (event) => {
    const errors = validateIsEmpty(event.target.value);
    setErrors(event.target.name, errors, setReviewerNameErrors);

    checkIsFormValid(inputErrors, formHasErrors, setFormHasErrors);
  };

  const handleReviewerContactValidation = (event) => {
    const errors = validateContact(event.target.name, event.target.value);
    setReviewerContactErrors((prevState) => ({
      ...prevState,
      [event.target.name]: errors,
    }));

    checkIsFormValid(inputErrors, formHasErrors, setFormHasErrors);
  };

  const handleCaregiverNameValidation = (event) => {
    const errors = validateIsEmpty(event.target.value);
    setErrors(event.target.name, errors, setCaregiverNameErrors);

    checkIsFormValid(inputErrors, formHasErrors, setFormHasErrors);
  };

  const handleSelectServiceValidation = (selectedOptions) => {
    let errors = [];
    const errMsg = "Please select at least one service provided";
    if (!selectedOptions.length) {
      errors.push(errMsg);
    }
    if (!servicesErrors.length && !errors) {
      return;
    } else {
      setServicesErrors(errors);
    }
  };

  const handleStartDateValidation = (event) => {
    const errors = validateIsEmpty(
      event.target.value,
      "Please start enter date"
    );
    setStateDateErrors(errors);
    checkIsFormValid(inputErrors, formHasErrors, setFormHasErrors);
  };

  const handleEndDateValidation = (event) => {
    const errors = validateIsEmpty(event.target.value, "Please end enter date");
    //TODO: make sure end date is after start date
    setEndDateErrors(errors);
    checkIsFormValid(inputErrors, formHasErrors, setFormHasErrors);
  };

  const handleReviewValidation = (event) => {
    const errors = validateIsEmpty(
      event.target.value,
      "Review needed, tell us about your experience"
    );
    setReviewErrors(errors);
    checkIsFormValid(inputErrors, formHasErrors, setFormHasErrors);
  };

  //Form submit function
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(reviewInfo);
  };

  return (
    <Form
      title="Caregiver Review"
      submit
      onSubmit={handleOnSubmit}
      submitDisabled={formHasErrors}
    >
      <FullName
        resetStyles
        legend="Your Name"
        fullName={reviewInfo.reviewerName}
        name="reviewerName"
        helperText={{
          firstName: reviewerNameErrors.first_name[0] || "",
          middleName: reviewerNameErrors.middle_name[0] || "",
          lastName: reviewerNameErrors.last_name[0] || "",
        }}
        onChange={handleInputChange}
        onMenuClose={handleReviewerNameValidation}
      />
      <Contact
        resetStyles
        contact={reviewInfo.reviewerContact}
        name="reviewerContact"
        helperText={{
          contact_phone: reviewerContactErrors.contact_phone[0] || "",
          contact_email: reviewerContactErrors.contact_email[0] || "",
        }}
        onBlur={handleReviewerContactValidation}
        onChange={handleInputChange}
      />
      <FullName
        resetStyles
        legend="Caregiver Name"
        fullName={reviewInfo.caregiverName}
        name="caregiverName"
        helperText={{
          firstName: caregiverNameErrors.first_name[0] || "",
          middleName: caregiverNameErrors.middle_name[0] || "",
          lastName: caregiverNameErrors.last_name[0] || "",
        }}
        onChange={handleInputChange}
        onBlur={handleCaregiverNameValidation}
      />
      <fieldset>
        <legend>Services</legend>
        <FormSelectServices
          label="Services Provided"
          name="services"
          services={reviewInfo.services}
          onChange={handleServiceInputChange}
          onMenuClose={handleSelectServiceValidation}
          helperText={servicesErrors}
        />
        <FormDateInput
          id="startDate"
          htmlFor="startDate"
          label="Care Start Date:"
          onChange={handleInputChange}
          onBlur={handleStartDateValidation}
          value={reviewInfo.startDate}
          helperText={startDateErrors}
        />
        <FormDateInput
          id="endDate"
          htmlFor="endDate"
          label="Care End Date:"
          onChange={handleInputChange}
          onBlur={handleEndDateValidation}
          value={reviewInfo.endDate}
          helperText={endDateErrors}
        />
        <FormTextareaInput
          id="review"
          label="Caregiver Review"
          name="review"
          value={reviewInfo.review}
          onChange={handleInputChange}
          onBlur={handleReviewValidation}
          helperText={reviewErrors}
        />
      </fieldset>
    </Form>
  );
};

export default CaregiverReviewForm;
