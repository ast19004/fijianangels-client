import { useState } from "react";
import { Box, FormControl, FormLabel, TextField } from "@mui/material";
import FormTextInput from "../Inputs/FormTextInput";
import FormRadioInput from "../Inputs/FormRadioInput";
import Address from "./Address";
import { useUpdatedFormData, updateInput } from "../../../util/formdata";

const EducationGroup = (props) => {
  const [educationInfo, setEducationInfo] = useState({});
  const handleInputChange = (name, value) => {
    updateInput(name, value, setEducationInfo);
  };
  useUpdatedFormData(props.type.abr, educationInfo, props.onChange);
  return (
    <Box component="fieldset">
      <legend>{props.type.label}</legend>
      <FormTextInput
        id={props.type.abr}
        label={props.type.label}
        onChange={handleInputChange}
      />
      <Address id={`${props.type.abr}-address`} onChange={handleInputChange} />
      <FormControl>
        <FormLabel htmlFor={`${props.type.abr}-attendance`}>Dates:</FormLabel>
        <TextField
          id={`${props.type.abr}-start-date`}
          type="date"
          onChange={handleInputChange}
        />{" "}
        to
        <TextField
          id={`${props.type.abr}-end-date`}
          type="date"
          onChange={handleInputChange}
        />
      </FormControl>
      <FormRadioInput
        id={`${props.type.abr}-graduate`}
        label="Did you graduate?"
        onChange={handleInputChange}
      />
    </Box>
  );
};

export default EducationGroup;
