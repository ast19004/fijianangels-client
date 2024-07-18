import { isEmpty, trim } from "validator";

const emptyError = "Cannot be empty";

export const validate = (value, validationObj) => {
  let errors = "";
  for (let [func, errMsg] of validationObj) {
    //A truthly returning function mean there is an error
    if (func(value)) {
      if (Array.isArray(errors)) {
        errors.push(errMsg);
      } else {
        errors = [errMsg];
      }
    }
    return errors;
  }
};

export const validateIsEmpty = (value, errMsg = emptyError) => {
  const validationObj = [
    [
      (value) => {
        return isEmpty(trim(value));
      },
      errMsg,
    ],
  ];
  const errors = validate(value, validationObj);
  return errors;
};

export const setErrors = (name, errors, setFunction) => {
  setFunction((prevState) => ({
    ...prevState,
    [name]: errors,
  }));
};

export const checkIsFormValid = (
  inputErrors,
  formHasErrors,
  setFormHasErrors
) => {
  let formInvalid = false;
  for (let input of inputErrors) {
    if (formInvalid) {
      break;
    }
    //If inputErrors contains all empty values then there are no errors
    if (typeof input === "object") {
      formInvalid = Object.values(input).filter((i) => i !== "").length !== 0;
    } else {
      formInvalid = input !== "";
    }

    !formHasErrors && formInvalid && setFormHasErrors(true);
    formHasErrors && !formInvalid && setFormHasErrors(false);
  }
};
