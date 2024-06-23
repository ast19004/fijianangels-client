import { useEffect, useState } from "react";
import { Box } from "@mui/material";

import FormPhoneInput from "../Inputs/FormNumInput";
import FormEmailInput from "../Inputs/FormEmailInput";
import { updateInput, useUpdateFormData } from "../../../util/formdata";

const Contact = (props) => {
  const [contactData, setContactData] = useState(props.contact);

  //Any address data passed over from parent component
  //is used to set values initially for address inputs
  //and as the parent changes
  useEffect(() => {
    setContactData(props.contact);
  }, [props.contact]);

  //As input values change save them in contactData state
  const handleChange = (name, value) => {
    updateInput(name, value, setContactData);
  };
  //Send input value changes to parent component
  // to be saved in a state for this input group
  useUpdateFormData("contact", contactData, props.onChange);

  return (
    <Box component="fieldset" id={props.id} sx={props.sx}>
      <legend>Contact</legend>
      <FormPhoneInput
        id="contact_phone"
        label="Phone"
        value={contactData.contact_phone}
        onChange={handleChange}
      />
      <FormEmailInput
        id="contact_email"
        label="Email"
        value={contactData.contact_email}
        onChange={handleChange}
      />
    </Box>
  );
};

export default Contact;
