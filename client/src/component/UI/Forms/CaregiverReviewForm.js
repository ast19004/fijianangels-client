import { useState } from "react";
import { PDFViewer, pdf } from "@react-pdf/renderer";
import { CaregiverReviewPDF } from "./PDF/CareReview";

import { updateInput } from "../../../util/formdata";
import { isEmail, isMobilePhone } from "validator";
import {
  validate,
  validateIsEmpty,
  setErrors,
  checkIsFormValid,
} from "../../../util/validation";
import { smoothScrollToTop } from "../../../util/scroll";

import FullName from "../InputGroups/FullName";
import Contact from "../InputGroups/Contact";
import Form from "./Form/Form";
import FormTextareaInput from "../Inputs/FormTextareaInput";
import FormSelectServices from "../Inputs/FormSelectServices";
import DateRange from "../InputGroups/DateRange";
import { getTodaysDate } from "../../../util/Date";
import { Typography } from "@mui/material";

const CaregiverReviewForm = (props) => {
  const currentDate = getTodaysDate();
  //Set isLoading after form submit
  const [isLoading, setIsLoading] = useState(false);

  //Text to be displayed under loading icon
  const [loadingText, setLoadingText] = useState("");

  //Error state initial values
  const nameErrFreeState = {
    first_name: "",
    last_name: "",
  };
  const contactErrFreeState = {
    contact_phone: "",
    contact_email: "",
  };

  //Error states
  const [formHasErrors, setFormHasErrors] = useState(false);
  const [formIncomplete, setFormIncomplete] = useState(false);
  const [reviewerNameErrors, setReviewerNameErrors] =
    useState(nameErrFreeState);
  const [reviewerContactErrors, setReviewerContactErrors] =
    useState(contactErrFreeState);
  const [caregiverNameErrors, setCaregiverNameErrors] =
    useState(nameErrFreeState);
  const [servicesErrors, setServicesErrors] = useState("");
  const [startDateErrors, setStartDateErrors] = useState("");
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
  };

  const handleContactValidation = (event) => {
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

  const handleDateValidation = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    let errors = "";
    const startErrMsg = "Start date must be a date < end date";
    const endErrMsg = "End date must be a date > start date";
    switch (name) {
      case "startDate":
        errors = validateIsEmpty(value, "Please enter start date");
        if (reviewInfo.endDate && value > reviewInfo.endDate) {
          errors.length ? errors.push(startErrMsg) : (errors = [startErrMsg]);
        }
        setStartDateErrors(errors);
        break;
      case "endDate":
        errors = validateIsEmpty(value, "Please enter end date");
        if (!reviewInfo.startDate || value < reviewInfo.startDate) {
          errors.length ? errors.push(endErrMsg) : (errors = [endErrMsg]);
        }
        setEndDateErrors(errors);
        break;
      default:
        break;
    }
  };

  const handleReviewValidation = (event) => {
    const errors = validateIsEmpty(
      event.target.value,
      "Review needed, tell us about your experience"
    );
    setReviewErrors(errors);
  };

  //Check all input values in an obj that have required keys
  //eturn empty if any required inputs are empty
  const hasEmptyRequiredInputs = (obj) => {
    const nonRequiredInputKeys = ["middle_name"];
    //Check if any required inputs are empty
    let hasEmpty = false;
    for (let [key, value] of Object.entries(obj)) {
      if (hasEmpty) {
        break;
      }
      if (nonRequiredInputKeys.includes(key)) {
        return;
      }
      if ((Array.isArray(value) && !value.length) || value === "") {
        hasEmpty = true;
      } else if (typeof value == "object") {
        hasEmptyRequiredInputs(value);
      }
    }
    return hasEmpty;
  };

  //Generate pdf and send to company email
  const generateAndSendPDF = async (reviewInfo) => {
  try {
    // Generate PDF and get its Blob
    const blob = await pdf(
      <CaregiverReviewPDF reviewInfo={reviewInfo} />
    ).toBlob();

    // Prepare form data
    const formData = new FormData();
    formData.append(
      "file",
      blob,
      `Review_${reviewInfo.reviewerName.last_name},${reviewInfo.reviewerName.first_name}.pdf`
    );
    formData.append(
      "name",
      `${reviewInfo.reviewerName.first_name} ${reviewInfo.reviewerName.last_name}`
    );
    formData.append("email", reviewInfo.reviewerContact.contact_email);
    formData.append("message", "Please view the attached PDF");

    // Make the request
    const response = await fetch("http://localhost:5000/send-email", {
      method: "POST",
      body: formData,
      headers: {
        Authorization: process.env.REACT_APP_SENDGRID_API_KEY,
      },
    });

    // Check if the response is OK (status code 200–299)
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! Status: ${response.status}. Message: ${errorText}`);
    }

    const data = await response.json();
    return { success: true, data }; // success

  } catch (error) {
    return { success: false, error: error.message }; // failure
  }
};


  //Form submit function
  const handleOnSubmit = async(e) => {
    e.preventDefault();
    setIsLoading(true);
    setLoadingText("Checking form completeness");
    const isIncomplete = hasEmptyRequiredInputs(reviewInfo);
    isIncomplete && setLoadingText("Please complete the form");
    setFormIncomplete(isIncomplete);
    checkIsFormValid(inputErrors, formHasErrors, setFormHasErrors);
    if (!formHasErrors && !isIncomplete) {
      setLoadingText("Sending");
      const result = await generateAndSendPDF(reviewInfo);
      result.success ? setLoadingText("Sent!") : setLoadingText("Server Error. Please c ontact Fijian Angels Homecare");
    } else {
      smoothScrollToTop();
    }
    setIsLoading(false);
  };

  return (
    <>
      {/* <PDFViewer height="1200" width="100%">
        <CaregiverReviewPDF reviewInfo={reviewInfo} />
      </PDFViewer> */}
      <Form
        title="Caregiver Review"
        submit
        onSubmit={handleOnSubmit}
        loading={false}
        loadingText={""}
      >
        {formIncomplete && (
          <Typography
            component="span"
            align="center"
            sx={{ display: "block", color: "red", fontSize: "1.2rem" }}
          >
            <i>Please fill out all required input fields</i>
          </Typography>
        )}
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
          onBlur={handleContactValidation}
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
            inputProps={{ required: true }}
          />
          <DateRange
            onChange={handleInputChange}
            onValidate={handleDateValidation}
            inputProps={{ required: true }}
            startId="startDate"
            startLabel="Care Start Date:"
            startValue={reviewInfo.startDate}
            startHelperText={startDateErrors}
            endId="endDate"
            endLabel="Care End Date:"
            endValue={reviewInfo.endDate}
            endHelperText={endDateErrors}
          />
          <FormTextareaInput
            id="review"
            label="Caregiver Review"
            name="review"
            value={reviewInfo.review}
            onChange={handleInputChange}
            onBlur={handleReviewValidation}
            helperText={reviewErrors}
            inputProps={{ required: true }}
          />
        </fieldset>
      </Form>
    </>
  );
};

export default CaregiverReviewForm;
