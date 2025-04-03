import { useState } from "react";

import { updateInput } from "../../../util/formdata";

import { getTodaysDate } from "../../../util/Date";
import FullName from "../InputGroups/FullName";
import Contact from "../InputGroups/Contact";
import Form from "./Form";
import FormTextareaInput from "../Inputs/FormTextareaInput";
import FormSelectServices from "../Inputs/FormSelectServices";

import { sendCareRequestEmail } from "../../../util/Email/send";
import {
  checkIsFormEmpty,
  checkIsFormValid,
  validateEmail,
  validateName,
  validatePhone,
} from "../../../util/validation";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import HomecareRequestToastContent from "../CustomToastContent/HomecareRequestToastContent";

const HomecareRequestForm = (props) => {
  const navigate = useNavigate();

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
  const [submitDisabled, setSubmitDisabled] = useState(false);

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

  const handleSubmit = async (e) => {
    //Prevent form reload
    e.preventDefault();
    const formIsValid = checkIsFormValid([
      nameError,
      contactError,
      servicesInputError,
    ]);
    const formHasEmptyValues = checkIsFormEmpty([
      request.fullName.first_name,
      request.fullName.last_name,
      request.contact.contact_email,
      request.contact.contact_phone,
      request.requestedServices,
    ]);

    //If form is valid and required inputs are not empty send email
    if (formIsValid && !formHasEmptyValues) {
      //Set Submit to disabled so form is sent only once.
      setSubmitDisabled(true);
      const emailStatus = await sendCareRequestEmail(e);
      if (emailStatus === 200) {
        navigate("/");
        window.scrollTo({ top: 0, behavior: "instant" });
        toast.success(
          <HomecareRequestToastContent
            name={`${request.fullName.first_name} ${request.fullName.last_name}`}
          />
        );
      }
    }
  };

  return (
    <Form
      title="Homecare Request Form"
      titleColor="white"
      submit
      onSubmit={handleSubmit}
    >
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
