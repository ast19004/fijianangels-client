import {
  isEmpty,
  trim,
  isLength,
  isMimeType,
  isEmail,
  isMobilePhone,
} from "validator";

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

export const checkIsFormEmpty = (valuesArray) => {
  return valuesArray.filter((value) => value === "").length;
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

export const validateName = (inputValue, inputName, errFunc) => {
  //Reset errors to empty before check
  clearError(inputName, errFunc);

  //Ensure input is not empty
  const emptyError = validateIsEmpty(inputValue);

  if (emptyError) {
    errFunc((prevState) => ({
      ...prevState,
      [inputName]: emptyError,
    }));
    return;
  }

  // Ensure only valid characters (letters and certain special characters like spaces and hyphens) are used. You can use a regular expression for this.
  const isCorrectLength = isLength(inputValue.trim(), {
    min: 2,
    max: 50,
  });
  const isAlphaWithSpaces = /^[a-zA-Z\s'-]+$/.test(inputValue.trim());

  if (!isCorrectLength) {
    errFunc((prevState) => ({
      ...prevState,
      [inputName]: "Name must be between 2 & 5 characters long",
    }));
    return;
  }

  if (!isAlphaWithSpaces) {
    errFunc((prevState) => ({
      ...prevState,
      [inputName]:
        "Only letters and certain special characters like spaces and hyphens permitted",
    }));
  }
};

export const validatePDFFile = (file, MAX_SIZE_MB, errFunc, errName) => {
  const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024;
  if (!file) {
    console.log("No file");
    return false;
  }
  //Ensure the file is less than MAX_SIZE_BYTES
  const isCorrectSize = file.size <= MAX_SIZE_BYTES;
  const isPDF = isMimeType(file.type) && file.type === "application/pdf";
  if (!isCorrectSize) {
    setErrors(
      errName,
      errFunc,
      `File is too large. Maximum size is ${MAX_SIZE_MB}MB.`
    );
    //return false if validation fails
    return false;
  }
  //Ensure the file is a pdf
  if (!isPDF) {
    setErrors(errName, errFunc, "Only .pdf files are allowed.");
    //return false if validation fails
    return false;
  }
  errFunc("");
  return true;
};

export const validateEmail = (inputValue, inputName, errFunc) => {
  //Reset errors to empty before check
  clearError(inputName, errFunc);

  //Ensure input is not empty
  const emptyError = validateIsEmpty(inputValue.trim());

  if (emptyError) {
    errFunc((prevState) => ({
      ...prevState,
      [inputName]: emptyError,
    }));
    return;
  }

  //Check if valid email
  const isValidEmail = isEmail(inputValue.trim());
  if (!isValidEmail) {
    errFunc((prevState) => ({
      ...prevState,
      [inputName]: "Please enter a valid email",
    }));
    return;
  }
};

export const validatePhone = (inputValue, inputName, errFunc) => {
  //Reset errors to empty before check
  clearError(inputName, errFunc);

  //Ensure input is not empty
  const emptyError = validateIsEmpty(inputValue.trim());

  if (emptyError) {
    errFunc((prevState) => ({
      ...prevState,
      [inputName]: emptyError,
    }));
    return;
  }

  const isValidPhone = isMobilePhone(inputValue.trim());

  if (!isValidPhone) {
    errFunc((prevState) => ({
      ...prevState,
      [inputName]: "Please enter a valid phone #",
    }));
    return;
  }
};

const clearError = (name, setError) => {
  setError((prevErrors) => ({ ...prevErrors, [name]: "" }));
};
