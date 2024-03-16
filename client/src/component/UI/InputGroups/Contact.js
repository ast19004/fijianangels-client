import { useState } from "react";
import { Box } from "@mui/material";

import FormPhoneInput from "../Inputs/FormNumInput";
import FormEmailInput from "../Inputs/FormEmailInput";
import { useUpdatedFormData } from "../../util/formdata";

const Contact = (props) => {
  const [contactData, setContactData] = useState([]);

  const handleChange = (name, value) => {
    setContactData((prevContactData) => ({
      ...prevContactData,
      [name]: value,
    }));
  };

  useUpdatedFormData("contact", contactData, props.onChange);

  return (
    <Box component="fieldset" id={props.id} sx={props.sx}>
      <legend>Contact</legend>
      <FormPhoneInput id="phone" label="Phone" onChange={handleChange} />
      <FormEmailInput id="email" label="Email" onChange={handleChange} />
    </Box>
  );
};

export default Contact;
