import { useEffect, useState } from "react";
import { updateInput } from "../../../util/formdata";
import { isEmpty, trim } from "validator";

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
  const errorFreeState = {
    reviewerContact: {
      contact_phone: "",
      _contact_email: "",
    },
    servicesProvided: "",
    startDate: "",
    endDate: "",
    review: "",
  };
  const [formHasErrors, setFormHasErrors] = useState(false);
  const [formErrors, setFormErrors] = useState(errorFreeState);
  const [reviewerNameErrors, setReviewerFormErrors] =
    useState(nameErrFreeState);
  const [caregiverNameErrors, setCaregiverFormErrors] =
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
      _contact_email: "",
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

  const resetValidation = () => {
    // setFormErrors(errorFreeState);
    return;
  };

  const handleInputChange = (dataName, data) => {
    updateInput(dataName, data, setReviewInfo);
  };

  const setErrors = (name, errors, setFunction) => {
    setFunction((prevState) => {
      return {
        ...prevState,
        [name]: errors,
      };
    });
  };

  const handleValidation = (event) => {
    return;
  };

  const handleReviewerNameValidation = (event) => {
    let errors = "";
    if (isEmpty(trim(event.target.value))) {
      if (Array.isArray(errors)) {
        errors.push(emptyError);
      } else {
        errors = [emptyError];
      }
    }
    console.log("In reviewer name validation function");
    errors.length &&
      setErrors(event.target.name, errors, setReviewerFormErrors);
  };

  const handleCaregiverNameValidation = (event) => {
    let errors = "";
    // isEmpty(trim(value)) &&
    console.log("In caregiver name validation function");
    setErrors(event.target.name, errors, setCaregiverFormErrors);
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
        setFormErrors(true);
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
        onFocus={resetValidation}
        onBlur={handleReviewerNameValidation}
      />
      <Contact
        resetStyles
        contact={reviewInfo.reviewerContact}
        name="reviewerContact"
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
        onFocus={resetValidation}
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
