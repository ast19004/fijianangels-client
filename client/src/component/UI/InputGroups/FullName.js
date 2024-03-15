import { Box } from "@mui/material";

import FormTextInput from "../Inputs/FormTextInput";
import { useEffect, useState } from "react";

const FullName = (props) => {
  const legend = props.legend || "Full Name:";
  const [nameData, setNameData] = useState([]);

  const handleChange = (name, value) => {
    setNameData((prevNameData) => ({ ...prevNameData, [name]: value }));
  };

  useEffect(() => {
    if (!props.onChange) {
      return;
    }
    props.onChange("fullName", nameData);
  }, [nameData]);

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
