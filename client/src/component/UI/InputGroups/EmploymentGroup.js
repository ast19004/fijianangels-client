import { useState } from "react";
import { TextField, FormLabel, FormControl, Box } from "@mui/material";

import FormTextInput from "../Inputs/FormTextInput";
import FormPhoneInput from "../Inputs/FormPhoneInput";
import FormRadioInput from "../Inputs/FormRadioInput";

import Address from "../InputGroups/Address";
// import { useUpdateFormData, updateInput } from "../../../util/formdata";

const EmploymentGroup = (props) => {
  const [employment, setEmployment] = useState({});

  // const handleInputChange = (name, value) => {
  //   updateInput(name, value, setEmployment);
  // };

  // useUpdatedFormData(`job#${props.num}`, employment, props.onChange);

  return (
    <Box component="fieldset">
      <legend>Previous Employment</legend>
      <FormTextInput id="company1_name" label="Company" />
      <FormPhoneInput id="company1_phone" label="Phone:" />
      {/* TODO uncomment once updated<Address id="company1-address" /> */}
      <FormTextInput id="company1_supervisor" label="Supervisor:" />
      <FormTextInput id="company1_job_title" label="Job Title:" />
      <FormTextInput id="company1_end_salary" label="Ending Salary:" />
      <FormTextInput id="company1_responsibilities" label="Responsibilities:" />

      <FormControl>
        <FormLabel htmlFor="company1_duration">Dates:</FormLabel>
        <TextField id="company1_start_date" type="date" /> to
        <TextField id="company1_end_date" type="date" />
      </FormControl>
      <FormTextInput id="company1_leaving_reason" label="Reason for Leaving:" />

      <FormRadioInput
        id="company1_can_contact"
        label="May we contact your previous supervisor for a reference?"
      />
    </Box>
  );
};

export default EmploymentGroup;
