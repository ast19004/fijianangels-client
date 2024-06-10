import { useEffect, useState } from "react";
import { TextField, FormLabel, FormControl } from "@mui/material";

import { useUpdatedFormData, updateInput } from "../../../util/formdata";

import FormTextInput from "../Inputs/FormTextInput";
import FormNumInput from "../Inputs/FormNumInput";
import FormRadioInput from "../Inputs/FormRadioInput";

import Address from "../InputGroups/Address";
import FullName from "../InputGroups/FullName";
import Contact from "../InputGroups/Contact";

const ApplicantInfo = (props) => {
  const [applicantInfo, setApplicantInfo] = useState();
  // const handleChange = (name, value) => {
  //   setApplicantInfo((prevApplicantData) => ({
  //     ...prevApplicantData,
  //     [name]: value,
  //   }));
  // };
  const handleChange = (name, value) => {
    updateInput(name, value, setApplicantInfo);
  };
  useUpdatedFormData("applicantData", applicantInfo, props.onChange);
  useEffect(() => console.log(props.data), [props.data]);

  return (
    <fieldset>
      <legend>Applicant Information</legend>
      <FullName onChange={handleChange} />
      <Address onChange={handleChange} />
      <Contact onChange={handleChange} />
      <fieldset>
        <legend>Employment Details:</legend>
        <FormNumInput
          id="ssn"
          label="Social Security Number:"
          onChange={handleChange}
        />
        <FormTextInput id="position" label="Position" onChange={handleChange} />
        <FormTextInput
          id="availability"
          label="Date Available:"
          onChange={handleChange}
        />
        <FormTextInput
          id="salary"
          label="Desired Salary:"
          onChange={handleChange}
        />
        <FormRadioInput
          id="is-us-citizen"
          label="Are you a citizen of the United States?:"
          onChange={handleChange}
        />
        <FormRadioInput
          id="is-authorized"
          label="If no, are you authorized to work in the U.S.?:"
          onChange={handleChange}
        />
        <FormRadioInput
          id="is-previous-employee"
          label="Have you ever worked for this company?:"
          onChange={handleChange}
        />
        <FormControl>
          <FormLabel htmlFor="prev-employment-date">If yes, when?</FormLabel>

          <TextField
            id="prev-employment-date"
            type="date"
            onChange={handleChange}
          />
        </FormControl>
        <FormRadioInput
          id="is-convicted-felon"
          label="Have you ever been convicted of a felony?"
          onChange={handleChange}
        />
        <FormTextInput
          id="felony-explanation"
          label="If yes, explain:"
          onChange={handleChange}
        />
      </fieldset>
    </fieldset>
  );
};

export default ApplicantInfo;
