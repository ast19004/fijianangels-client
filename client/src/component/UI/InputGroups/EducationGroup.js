import { useState } from "react";
import { Box, FormControl, FormLabel, TextField } from "@mui/material";
import FormTextInput from "../Inputs/FormTextInput";
import FormRadioInput from "../Inputs/FormRadioInput";
import Address from "./Address";
// import { useUpdateFormData, updateInput } from "../../../util/formdata";

const EducationGroup = (props) => {
  const [educationInfo, setEducationInfo] = useState({});
  // const handleInputChange = (name, value) => {
  //   updateInput(name, value, setEducationInfo);
  // };
  // useUpdatedFormData(props.type.abr, educationInfo, props.onChange);
  return (
    <Box component="fieldset">
      <legend>{props.type.label}</legend>
      <FormTextInput id={props.type.abr} label={props.type.label} />
      {/* TODO Uncomment this once Address component fixed<Address id={`${props.type.abr}_address`} />  */}
      <FormControl>
        <FormLabel htmlFor={`${props.type.abr}_attendance`}>Dates:</FormLabel>
        <TextField id={`${props.type.abr}_start_date`} type="date" /> to
        <TextField id={`${props.type.abr}_end_date`} type="date" />
      </FormControl>
      <FormRadioInput
        id={`is_${props.type.abr}_graduate`}
        label="Did you graduate?"
      />
    </Box>
  );
};

export default EducationGroup;
