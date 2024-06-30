import { useState } from "react";
import FormInput from "./FormInput";
import { isMobilePhone, isEmpty } from "validator";

const FormPhoneInput = (props) => {
  const [errors, setErrors] = useState([]);
  const handleValidation = (e) => {
    console.log("in validation");
    //TODO: add a way to verify phone # exists
    isMobilePhone(e.target.value, "en-US") &&
      setErrors((prevErrors) => [...prevErrors, "Not a valid phone #"]);
    isEmpty(e.target.value) &&
      setErrors((prevErrors) => [...prevErrors, "Cannot be Empty"]);

    //If isMobilePhone & isNotEmpty set errors to empty []
    isMobilePhone(e.target.value, "en-US") &&
      !isEmpty(e.target.value) &&
      setErrors([]);
  };
  return (
    <FormInput
      type="tel"
      id={props.id}
      name={props.name || props.id}
      htmlFor={props.id}
      label={props.label}
      value={props.value}
      onChange={props.onChange || (() => {})}
      onFocus={handleValidation}
      errors={errors}
      inputProps={props.inputProps}
    />
  );
};

export default FormPhoneInput;
