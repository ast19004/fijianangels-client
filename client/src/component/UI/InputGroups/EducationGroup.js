import { useEffect, useState } from "react";
import { Box, FormControl, FormLabel, TextField } from "@mui/material";
import { updateInput, useUpdateFormData } from "../../../util/formdata";
import FormTextInput from "../Inputs/FormTextInput";
import FormRadioInput from "../Inputs/FormRadioInput";
import Address from "./Address";
import FormDateInput from "../Inputs/FormDateInput";

const EducationGroup = (props) => {
  const [education, setEducation] = useState(props.education);
  const handleInputChange = (name, value) => {
    updateInput(name, value, setEducation);
  };

  //As parent component changes update values for this child
  useEffect(() => {
    setEducation(props.education);
  }, [props.education]);

  useUpdateFormData(props.abr, education, props.onChange);
  return (
    <Box component="fieldset">
      <legend>{props.label}</legend>
      <FormTextInput
        id={`${props.abr}_name` || "school_name"}
        label={props.label}
        onChange={handleInputChange}
        value={props.education[`${props.abr}_name`]}
      />
      <Address
        id={`${props.abr}_address`}
        abr={props.abr}
        address={education[`${props.abr}_address`]}
        onChange={handleInputChange}
      />
      <FormControl>
        <FormLabel htmlFor={`${props.abr}_attendance`}>Dates:</FormLabel>
        <FormDateInput
          id={`${props.abr}_start_date`}
          htmlFor={`${props.abr}_start_date`}
          label="Start Date:"
          onChange={handleInputChange}
          value={education[`${props.abr}_start_date`]}
        />
        <FormDateInput
          id={`${props.abr}_end_date`}
          htmlFor={`${props.abr}_end_date`}
          label="End Date:"
          onChange={handleInputChange}
          value={education[`${props.abr}_end_date`]}
        />
      </FormControl>
      <FormRadioInput
        id={`is_${props.abr}_graduate`}
        label="Did you graduate?"
        onChange={handleInputChange}
        value={education[`is_${props.abr}_graduate`]}
      />
    </Box>
  );
};

export default EducationGroup;
