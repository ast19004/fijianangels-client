import { useEffect, useState } from "react";
import { updateInput } from "../../../util/formdata";
import { isEmpty, trim, isEmail, isMobilePhone } from "validator";

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
  const emptyError = "Cannot be empty";
  const nameErrFreeState = {
    first_name: "",
    middle_name: "",
    last_name: "",
  };
  const contactErrFreeState = {
    contact_phone: "",
    contact_email: "",
  };
  const serviceErrFreeState = {
    startDate: "",
    endDate: "",
    review: "",
  };
  const [formHasErrors, setFormHasErrors] = useState(false);
  const [reviewerNameErrors, setReviewerNameErrors] =
    useState(nameErrFreeState);
  const [reviewerContactErrors, setReviewerContactErrors] =
    useState(contactErrFreeState);
  const [caregiverNameErrors, setCaregiverNameErrors] =
    useState(nameErrFreeState);
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
    servicesProvided: [],
    startDate: "",
    endDate: "",
    review: "",
  });

  const handleInputChange = (dataName, data) => {
    updateInput(dataName, data, setReviewInfo);
  };

  const setErrors = (name, errors, setFunction) => {
    setFunction((prevState) => ({
      ...prevState,
      [name]: errors,
    }));
  };

  const validate = (value, validationObj) => {
    let errors = "";
    for (let [func, errMsg] of validationObj) {
      //A truthly returning function mean there is an error
      if (func(value)) {
        if (Array.isArray(errors)) {
          errors.push(errMsg);
        } else {
          errors = [errMsg];
        }
      }
      return errors;
    }
  };

  const validateIsEmpty = (value) => {
    const validationObj = [
      [
        (value) => {
          return isEmpty(trim(value));
        },
        emptyError,
      ],
    ];
    const errors = validate(value, validationObj);
    return errors;
  };

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
  };

  const handleReviewerContactValidation = (event) => {
    const errors = validateContact(event.target.name, event.target.value);
    setReviewerContactErrors((prevState) => ({
      ...prevState,
      [event.target.name]: errors,
    }));
  };

  const handleCaregiverNameValidation = (event) => {
    const errors = validateIsEmpty(event.target.value);
    setErrors(event.target.name, errors, setCaregiverNameErrors);
  };

  //TODO: use the bellow on submit to check the form for errors
  // useEffect(() => {
  //   const formErrObjs = [caregiverNameErrors, reviewerNameErrors];
  //   checkFormErrorStatus(formErrObjs);
  // }, [caregiverNameErrors, reviewerNameErrors]);

  const checkFormErrorStatus = (errObjs) => {
    //Reset formErrorStatus to false before check
    formHasErrors && setFormHasErrors(false);
    for (let obj of errObjs) {
      //If form error has already been found do not continue
      if (formHasErrors) {
        break;
      }
      const objHasErrors =
        Object.values(obj).filter((value) => value !== "").length !== 0;
      if (objHasErrors) {
        setFormHasErrors(true);
      }
    }
    console.log("Form has errors: ", formHasErrors);
  };

  return (
    <Form title="Caregiver Review" submit>
      {/* <ProgressBar value={0.5} /> */}
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
        onBlur={handleReviewerNameValidation}
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
          name="serviceProvided"
          services={reviewInfo.servicesProvided}
          onChange={handleInputChange}
        />
        <FormDateInput
          id="startDate"
          htmlFor="startDate"
          label="Care Start Date:"
          onChange={handleInputChange}
          value={reviewInfo.startDate}
        />
        <FormDateInput
          id="enddate"
          htmlFor="endDate"
          label="Care End Date:"
          onChange={handleInputChange}
          value={reviewInfo.endDate}
        />
        <FormTextareaInput
          id="review"
          label="Caregiver Review"
          name="review"
          value={reviewInfo.review}
          onChange={handleInputChange}
        />
      </fieldset>
    </Form>
  );
};

export default CaregiverReviewForm;
