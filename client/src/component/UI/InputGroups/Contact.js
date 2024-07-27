import { useEffect, useState } from "react";

import FormPhoneInput from "../Inputs/FormPhoneInput";
import FormEmailInput from "../Inputs/FormEmailInput";
import { updateInput, useUpdateFormData } from "../../../util/formdata";
import CustomFieldset from "../Fieldsets/styles/CustomFieldset";

const Contact = (props) => {
  const { helperText = {} } = props; // Default to an empty object if helperText is undefined
  const { helperPhoneText = "", helperEmailText = "" } = helperText;
  const [contactData, setContactData] = useState(props.contact);

  //Any address data passed over from parent component
  //is used to set values initially for address inputs
  useEffect(() => {
    setContactData(props.contact);
  }, []);

  //As input values change save them in contactData state
  const handleChange = (name, value) => {
    updateInput(name, value, setContactData);
  };
  //Send input value changes to parent component
  // to be saved in a state for this input group
  useUpdateFormData(props.name || "contact", contactData, props.onChange);

  return (
    <CustomFieldset id={props.id} resetStyles={props.resetStyles}>
      <legend>Contact</legend>
      <FormPhoneInput
        id="contact_phone"
        label="Phone"
        value={contactData.contact_phone}
        helperText={helperPhoneText}
        onChange={handleChange}
        onBlur={props.onBlur}
        inputProps={{ required: true }}
      />
      <FormEmailInput
        id="contact_email"
        label="Email"
        value={contactData.contact_email}
        helperText={helperEmailText}
        onChange={handleChange}
        onBlur={props.onBlur}
        inputProps={{ required: true }}
      />
    </CustomFieldset>
  );
};

export default Contact;
