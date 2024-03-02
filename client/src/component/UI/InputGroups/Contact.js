import { Box } from "@mui/material";

import FormPhoneInput from "../Inputs/FormNumInput";
import FormEmailInput from "../Inputs/FormEmailInput";

const Contact = (props) => {
  return (
    <Box component="fieldset" id={props.id} sx={props.sx}>
      <legend>Contact</legend>
      <FormPhoneInput id="phone" label="Phone" />
      <FormEmailInput id="email" label="Email" />
    </Box>
  );
};

export default Contact;
