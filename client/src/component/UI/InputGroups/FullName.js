import { useState } from "react";
import { Box } from "@mui/material";

import { updateInput, useUpdatedFormData } from "../../../util/formdata";
import FormTextInput from "../Inputs/FormTextInput";

const FullName = (props) => {
  const legend = props.legend || "Full Name:";
  const [nameData, setNameData] = useState([]);

  const first = props.abr ? props.abr + "_first_name" : "first_name";
  const middle = props.abr ? props.abr + "_middle_name" : "middle_name";
  const last = props.abr ? props.abr + "_last_name" : "last_name";

  const handleChange = (name, value) => {
    updateInput(name, value, setNameData);
  };
  useUpdatedFormData("fullName", nameData, props.onChange);

  return (
    <Box component="fieldset" id={props.id} sx={props.sx}>
      <legend>{legend}</legend>
      <FormTextInput id={first} label="First:" onChange={handleChange} />
      <FormTextInput id={middle} label="M.I." onChange={handleChange} />
      <FormTextInput id={last} label="Last:" onChange={handleChange} />
    </Box>
  );
};

export default FullName;
