import { TextField, FormLabel, FormControl, Box } from "@mui/material";

import FormTextInput from "../Inputs/FormTextInput";
import FormPhoneInput from "../Inputs/FormPhoneInput";
import FormRadioInput from "../Inputs/FormRadioInput";

import Address from "../InputGroups/Address";
import { useEffect, useState } from "react";

const EmploymentGroup = (props) => {
  const [employment, setEmployment] = useState({});

  const handleInputChange = (name, value) => {
    setEmployment((prevEmployment) => ({ ...prevEmployment, [name]: value }));
  };

  useEffect(() => {
    if (!props.onChange) {
      return;
    }
    props.onChange(`job#${props.num}`, employment);
  }, [employment]);

  return (
    <Box component="fieldset">
      <legend>Previous Employment</legend>
      <FormTextInput
        id="company1-name"
        label="Company"
        onChange={handleInputChange}
      />
      <FormPhoneInput
        id="company1-phone"
        label="Phone:"
        onChange={handleInputChange}
      />
      <Address id="company1-address" onChange={handleInputChange} />
      <FormTextInput
        id="company1-supervisor"
        label="Supervisor:"
        onChange={handleInputChange}
      />
      <FormTextInput
        id="company1-job-title"
        label="Job Title:"
        onChange={handleInputChange}
      />
      <FormTextInput
        id="company1-end-salary"
        label="Ending Salary:"
        onChange={handleInputChange}
      />
      <FormTextInput
        id="company1-responsibilities"
        label="Responsibilities:"
        onChange={handleInputChange}
      />

      <FormControl>
        <FormLabel htmlFor="company1-duration">Dates:</FormLabel>
        <TextField
          id="company1-start-date"
          type="date"
          onChange={handleInputChange}
        />{" "}
        to
        <TextField
          id="company1-end-date"
          type="date"
          onChange={handleInputChange}
        />
      </FormControl>
      <FormTextInput
        id="company1-leaving-reason"
        label="Reason for Leaving:"
        onChange={handleInputChange}
      />

      <FormRadioInput
        id="company1-reference"
        label="May we contact your previous supervisor for a reference?"
        onChange={handleInputChange}
      />
    </Box>
  );
};

export default EmploymentGroup;
