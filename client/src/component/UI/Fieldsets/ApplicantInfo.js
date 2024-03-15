import { TextField, FormLabel, FormControl } from "@mui/material";

import FormTextInput from "../Inputs/FormTextInput";
import FormNumInput from "../Inputs/FormNumInput";
import FormRadioInput from "../Inputs/FormRadioInput";

import Address from "../InputGroups/Address";
import FullName from "../InputGroups/FullName";
import Contact from "../InputGroups/Contact";
import { useState } from "react";

const ApplicantInfo = (props) => {
  const [applicantInfo, setApplicantInfo] = useState();
  const handleChange = (name, value) => {
    setApplicantInfo((prevApplicantData) => ({
      ...prevApplicantData,
      [name]: value,
    }));
  };
  return (
    <fieldset>
      <legend>Applicant Information</legend>
      <FullName />
      <Address />
      <Contact />
      <fieldset>
        <legend>Employment Details:</legend>
        <FormNumInput id="ssn" label="Social Security Number:" />
        <FormTextInput id="position" label="Position" />
        <FormTextInput id="availability" label="Date Available:" />
        <FormTextInput id="salary" label="Desired Salary:" />
        <FormRadioInput
          id="is-us-citizen"
          label="Are you a citizen of the United States?:"
        />
        <FormRadioInput
          id="is-authorized"
          label="If no, are you authorized to work in the U.S.?:"
        />
        <FormRadioInput
          id="is-previous-employee"
          label="Have you ever worked for this company?:"
        />
        <FormControl>
          <FormLabel htmlFor="prev-employment-date">If yes, when?</FormLabel>

          <TextField id="prev-employment-date" type="date" />
        </FormControl>
        <FormRadioInput
          id="is-convicted-felon"
          label="Have you ever been convicted of a felony?"
        />
        <FormTextInput id="felony-explanation" label="If yes, explain:" />
      </fieldset>
    </fieldset>
  );
};

export default ApplicantInfo;
