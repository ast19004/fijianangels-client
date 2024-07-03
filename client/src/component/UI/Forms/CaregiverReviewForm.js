import { useState } from "react";
import { updateInput } from "../../../util/formdata";

import FullName from "../InputGroups/FullName";
import Contact from "../InputGroups/Contact";
import Form from "../Forms/Form";
import FormTextareaInput from "../Inputs/FormTextareaInput";
import FormSelectServices from "../Inputs/FormSelectServices";
import ProgressBar from "../ProgressBar";
import FormDateInput from "../Inputs/FormDateInput";

const CaregiverReviewForm = (props) => {
  const reviewerNameAbr = "reviewer";
  const caregiverNameAbr = "caregiver";
  const [reviewInfo, setReviewInfo] = useState({
    //Reviewer Info
    [reviewerNameAbr + "fullName"]: {
      first_name: "",
      middle_name: "",
      last_name: "",
    },
    [reviewerNameAbr + "contact"]: {
      contact_phone: "",
      _contact_email: "",
    },
    //Caregiver Info
    [caregiverNameAbr + "fullName"]: {
      first_name: "",
      middle_name: "",
      last_name: "",
    },
    servicesProvided: [],
    start_date: "",
    end_date: "",
    review: "",
  });

  const handleInputChange = (dataName, data) => {
    updateInput(dataName, data, setReviewInfo);
    console.log(reviewInfo);
  };
  return (
    <Form title="Caregiver Review" submit>
      {/* <ProgressBar value={0.5} /> */}
      <FullName
        legend="Your Name"
        fullName={reviewInfo[reviewerNameAbr + "fullName"]}
        name={reviewerNameAbr + "fullName"}
        onChange={handleInputChange}
      />
      <Contact
        contact={reviewInfo[reviewerNameAbr + "contact"]}
        name={reviewerNameAbr + "contact"}
        onChange={handleInputChange}
      />
      <FullName
        legend="Caregiver Name"
        fullName={reviewInfo[caregiverNameAbr + "fullName"]}
        name={caregiverNameAbr + "fullName"}
        onChange={handleInputChange}
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
          id="care_start_date"
          htmlFor="care_start_date"
          label="Care Start Date:"
          onChange={handleInputChange}
          value={reviewInfo.care_start_date}
        />
        <FormDateInput
          id="care_end_date"
          htmlFor="care_end_date"
          label="Care End Date:"
          onChange={handleInputChange}
          value={reviewInfo.care_end_date}
        />
        <FormTextareaInput
          id="review_text"
          label="Caregiver Review"
          name="review"
          value={reviewInfo.additionalInfo}
          onChange={handleInputChange}
        />
      </fieldset>
    </Form>
  );
};

export default CaregiverReviewForm;
