import { Box } from "@mui/material";

import FormTextInput from "../Inputs/FormTextInput";

const FullName = (props) => {
  return (
    <Box component="fieldset" id={props.id} sx={props.sx}>
      <legend>Full Name:</legend>
      <FormTextInput id="first-name" label="First:" />
      <FormTextInput id="middle-initial" label="M.I." />
      <FormTextInput id="last-name" label="Last:" />
    </Box>
  );
};

export default FullName;
