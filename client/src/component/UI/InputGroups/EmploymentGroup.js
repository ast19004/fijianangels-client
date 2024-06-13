import { useState } from "react";
import { TextField, FormLabel, FormControl, Box } from "@mui/material";

import FormTextInput from "../Inputs/FormTextInput";
import FormPhoneInput from "../Inputs/FormPhoneInput";
import FormRadioInput from "../Inputs/FormRadioInput";

import Address from "../InputGroups/Address";
// import { useUpdatedFormData, updateInput } from "../../../util/formdata";

const EmploymentGroup = (props) => {
  const [employment, setEmployment] = useState({});

  // const handleInputChange = (name, value) => {
  //   updateInput(name, value, setEmployment);
  // };

  // useUpdatedFormData(`job#${props.num}`, employment, props.onChange);

  return (
    <Box component="fieldset">
      <legend>Previous Employment</legend>
      <FormTextInput id="company1-name" label="Company" />
      <FormPhoneInput id="company1-phone" label="Phone:" />
      {/* TODO uncomment once updated<Address id="company1-address" /> */}
      <FormTextInput id="company1-supervisor" label="Supervisor:" />
      <FormTextInput id="company1-job-title" label="Job Title:" />
      <FormTextInput id="company1-end-salary" label="Ending Salary:" />
      <FormTextInput id="company1-responsibilities" label="Responsibilities:" />

      <FormControl>
        <FormLabel htmlFor="company1-duration">Dates:</FormLabel>
        <TextField id="company1-start-date" type="date" /> to
        <TextField id="company1-end-date" type="date" />
      </FormControl>
      <FormTextInput id="company1-leaving-reason" label="Reason for Leaving:" />

      <FormRadioInput
        id="company1-reference"
        label="May we contact your previous supervisor for a reference?"
      />
    </Box>
  );
};

export default EmploymentGroup;
