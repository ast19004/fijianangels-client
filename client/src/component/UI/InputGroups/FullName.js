import { useEffect, useState } from "react";
import { Box } from "@mui/material";

import { updateInput } from "../../../util/formdata";
import FormTextInput from "../Inputs/FormTextInput";

const FullName = (props) => {
  const legend = props.legend || "Full Name:";
  const [nameData, setNameData] = useState({});

  const first = props.abr ? props.abr + "_first_name" : "first_name";
  const middle = props.abr ? props.abr + "_middle_name" : "middle_name";
  const last = props.abr ? props.abr + "_last_name" : "last_name";

  const handleChange = (name, value) => {
    updateInput(name, value, setNameData);
  };

  useEffect(() => props.update("fullName", nameData), [nameData]);

  return (
    <Box component="fieldset" id={props.id} sx={props.sx}>
      <legend>{legend}</legend>
      <FormTextInput
        id={first}
        label="First:"
        onChange={handleChange}
        value={props.fullName.first}
      />
      <FormTextInput
        id={middle}
        label="M.I."
        onChange={handleChange}
        value={props.fullName.middle}
      />
      <FormTextInput
        id={last}
        label="Last:"
        onChange={handleChange}
        value={props.fullName.last}
      />
    </Box>
  );
};

export default FullName;
