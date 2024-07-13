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
