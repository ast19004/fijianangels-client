import { useEffect, useState } from "react";
import { Box } from "@mui/material";

import { updateInput } from "../../../util/formdata";
import FormTextInput from "../Inputs/FormTextInput";

const FullName = (props) => {
  const legend = props.legend || "Full Name:";
  const [nameData, setNameData] = useState(props.fullName);

  const first = props.abr ? props.abr + "_first_name" : "first_name";
  const middle = props.abr ? props.abr + "_middle_name" : "middle_name";
  const last = props.abr ? props.abr + "_last_name" : "last_name";

  const handleChange = (name, value) => {
    updateInput(name, value, setNameData);
  };

  useEffect(() => props.updateFullName(nameData), [nameData]);

  return (
    <Box component="fieldset" id={props.id} sx={props.sx}>
      <legend>{legend}</legend>
      <FormTextInput
        id={first}
        name="first_name"
        label="First:"
        onChange={handleChange}
        value={nameData.first_name}
      />
      <FormTextInput
        id={middle}
        name="middle_name"
        label="M.I."
        onChange={handleChange}
        value={nameData.middle_name}
      />
      <FormTextInput
        id={last}
        name="last_name"
        label="Last:"
        onChange={handleChange}
        value={nameData.last_name}
      />
    </Box>
  );
};

export default FullName;
