import { useState } from "react";

import { updateInput } from "../../../util/formdata";

import { getTodaysDate } from "../../../util/Date";
import FullName from "../InputGroups/FullName";
import Contact from "../InputGroups/Contact";
import Form from "./Form";
import FormTextareaInput from "../Inputs/FormTextareaInput";
import FormSelectServices from "../Inputs/FormSelectServices";

import sendEmail from "../../../util/Email/send";
import {
  validateEmail,
  validateName,
  validatePhone,
} from "../../../util/validation";

const HomecareRequestForm = (props) => {
  const currentDate = getTodaysDate();
  const [request, setRequest] = useState({
    todaysDate: currentDate,
    fullName: {
      first_name: "",
      last_name: "",
    },
    contact: { contact_phone: "", contact_email: "" },
    requestedServices: [],
    additionalInfo: "",
  });

  const [nameError, setNameError] = useState({
    first_name: "",
    last_name: "",
  });
  const [contactError, setContactError] = useState({
    contact_phone: "",
    contact_email: "",
  });

  const [servicesInputError, setServiceInputError] = useState("");

  const handleInputChange = (dataName, data) => {
    updateInput(dataName, data, setRequest);
  };

  const handleNameInputBlur = (e) => {
    //validate data on blur
    validateName(e.target.value, e.target.name, setNameError);
  };

  const handleContantInputBlur = (e) => {
    //validate data on blur
    switch (e.target.type) {
      case "email":
        validateEmail(e.target.value, e.target.name, setContactError);
        break;
      case "tel":
        validatePhone(e.target.value, e.target.name, setContactError);
        break;
      default:
        break;
    }
  };

  const handleSelectServicesBlur = (isEmpty) => {
    //If err already set, reset to default values before new validation cycle
    servicesInputError && setServiceInputError("");
    isEmpty && setServiceInputError("Please select at least one service");
  };

  return (
    <Form title="Homecare Request Form" submit onSubmit={sendEmail}>
      <FullName
        fullName={request.fullName}
        onChange={handleInputChange}
        onBlur={handleNameInputBlur}
        helperText={nameError}
        resetStyles
      />
      <Contact
        contact={request.contact}
        onChange={handleInputChange}
        onBlur={handleContantInputBlur}
        resetStyles
        helperText={contactError}
      />
      <fieldset>
        <legend>Services</legend>
        <FormSelectServices
          label="Requested Services"
          name="requestedServices"
          services={request.requestedServices}
          onChange={handleInputChange}
          onBlur={handleSelectServicesBlur}
          onMenuClose={() => {}}
          helperText={servicesInputError}
          inputProps={{ required: true }}
        />
        <FormTextareaInput
          id="extra_info"
          label="Comments/ Additional Information"
          name="additionalInfo"
          value={props.additional_info}
          onChange={handleInputChange}
        />
      </fieldset>
    </Form>
  );
};

export default HomecareRequestForm;
