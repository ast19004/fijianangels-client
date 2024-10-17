import { useState } from "react";
import Form from "./Form.js";
import ApplicantInfo from "../Fieldsets/ApplicantInfo.js";
import FormFileInput from "../Inputs/FormFileInput.js";

import {
  checkIsFormEmpty,
  checkIsFormValid,
  validateEmail,
  validateName,
  validatePDFFile,
  validatePhone,
} from "../../../util/validation.js";

const EmploymentForm = (props) => {
  const formId = "employmentForm";
  const MAX_FILE_SIZE_MB = 25;

  const [file, setFile] = useState(null);
  const [applicant, setApplicant] = useState({
    fullName: {
      first_name: "",
      last_name: "",
    },
    contact: { contact_phone: "", contact_email: "" },
  });
  const [fileError, setFileError] = useState("");
  const [nameError, setNameError] = useState({
    first_name: "",
    last_name: "",
  });
  const [contactError, setContactError] = useState({
    contact_phone: "",
    contact_email: "",
  });

  const handleApplicantInput = (applicant) => {
    setApplicant(applicant);
  };

  const handleFileInput = (selectedFile) => {
    setFile(selectedFile);
  };

  const handleFileInputBlur = () => {
    //Reset err value before validating
    setFileError("");
    console.log(file);

    if (!file) {
      setFileError((prevErr) => "Please attach your resume");
      return;
    }

    //Validate file type
    const fileIsValid = validatePDFFile(file, MAX_FILE_SIZE_MB, setFileError);

    //If file is valid clear errors
    fileIsValid && setFileError("");
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

  const handleSubmit = (event) => {
    event.preventDefault();
    handleFileInputBlur();
    const formIsValid = checkIsFormValid([nameError, contactError, fileError]);
    const formHasEmptyValues = checkIsFormEmpty([
      applicant.fullName.first_name,
      applicant.fullName.last_name,
      applicant.contact.contact_email,
      applicant.contact.contact_phone,
      file,
    ]);

    //If form is valid and required inputs are not empty send email
    console.log(`formIsValid: ${formIsValid}`);
    console.log(`formHasEmptyValues: ${formHasEmptyValues}`);
  };

  return (
    <Form
      title="Employment Application"
      id={formId}
      onSubmit={handleSubmit}
      submit
    >
      <ApplicantInfo
        applicant={applicant}
        onChange={handleApplicantInput}
        onNameBlur={handleNameInputBlur}
        onContactBlur={handleContantInputBlur}
        helperText={{ nameError: nameError, contactError: contactError }}
      />
      <FormFileInput
        id="resume_file"
        name="resume_file"
        label="ATTACH RESUME"
        onChange={handleFileInput}
        helperText={fileError}
        accept=".pdf"
      />
    </Form>
  );
};

export default EmploymentForm;
