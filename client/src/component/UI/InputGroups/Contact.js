import { useEffect, useState } from "react";

import FormPhoneInput from "../Inputs/FormPhoneInput";
import FormEmailInput from "../Inputs/FormEmailInput";
import { updateInput, useUpdateFormData } from "../../../util/formdata";
import CustomFieldset from "../Fieldsets/styles/CustomFieldset";

const Contact = (props) => {
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
      {props.legend && <legend>Contact</legend>}

      <FormEmailInput
        id="contact_email"
        label="EMAIL"
        value={contactData.contact_email}
        helperText={props.helperText.contact_email}
        onChange={handleChange}
        onBlur={props.onBlur}
        inputProps={{ required: true }}
      />
      <FormPhoneInput
        id="contact_phone"
        label="PHONE"
        value={contactData.contact_phone}
        helperText={props.helperText.contact_phone}
        onChange={handleChange}
        onBlur={props.onBlur}
        inputProps={{ required: true }}
      />
    </CustomFieldset>
  );
};

export default Contact;
