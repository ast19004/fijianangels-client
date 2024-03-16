import { useState } from "react";
import { Box } from "@mui/material";

import { updateInput, useUpdatedFormData } from "../../../util/formdata";
import FormTextInput from "../Inputs/FormTextInput";

const FullName = (props) => {
  const legend = props.legend || "Full Name:";
  const [nameData, setNameData] = useState([]);

  const handleChange = (name, value) => {
    updateInput(name, value, setNameData);
  };
  useUpdatedFormData("fullName", nameData, props.onChange);

  return (
    <Box component="fieldset" id={props.id} sx={props.sx}>
      <legend>{legend}</legend>
      <FormTextInput id="first-name" label="First:" onChange={handleChange} />
      <FormTextInput id="middle-initial" label="M.I." onChange={handleChange} />
      <FormTextInput id="last-name" label="Last:" onChange={handleChange} />
    </Box>
  );
};

export default FullName;
