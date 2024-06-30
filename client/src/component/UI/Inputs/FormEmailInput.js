import { useState } from "react";
import FormInput from "./FormInput";
import { isEmail, isEmpty } from "validator";

const FormEmailInput = (props) => {
  const [errors, setErrors] = useState([]);
  const handleValidation = (e) => {
    //TODO: add a way to verify email exists
    //If isEmail & isNotEmpty set errors to empty []
    isEmail(e.target.value) && !isEmpty(e.target.value) && setErrors([]);
    !isEmail(e.target.value) &&
      setErrors((prevErrors) => [...prevErrors, "Not a valid email"]);
    isEmpty(e.target.value) &&
      setErrors((prevErrors) => [...prevErrors, "Cannot be Empty"]);
  };
  return (
    <FormInput
      id={props.id}
      name={props.name || props.id}
      htmlFor={props.id}
      label={props.label}
      type="email"
      value={props.value}
      onChange={props.onChange || (() => {})}
      onFocus={handleValidation}
      errors={errors}
      inputProps={props.inputProps}
    />
  );
};

export default FormEmailInput;
