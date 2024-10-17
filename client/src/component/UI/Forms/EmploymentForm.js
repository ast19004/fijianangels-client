import { useState } from "react";
import Form from "./Form.js";
import FormFileInput from "../Inputs/FormFileInput.js";

import {
  checkIsFormEmpty,
  checkIsFormValid,
  validateEmail,
  validateName,
  validatePDFFile,
  validatePhone,
} from "../../../util/validation.js";
import { sendApplicationEmail } from "../../../util/Email/send.js";
import FullName from "../InputGroups/FullName.js";
import Contact from "../InputGroups/Contact.js";
import { updateInput } from "../../../util/formdata.js";

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyA5nOEM2K-Y8wmgeQubTSc2ul8cLE5QqUs",
  authDomain: "resume-d23f7.firebaseapp.com",
  projectId: "resume-d23f7",
  storageBucket: "resume-d23f7.appspot.com",
  messagingSenderId: "1080852758987",
  appId: "1:1080852758987:web:4d3a03a74777d17ed1b64e",
  measurementId: "G-E92ZPQ05E0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase Storage
const resume_storage = getStorage(app);

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

  const handleFileInput = (selectedFile) => {
    setFile(selectedFile);
  };
  const handleInputChange = (dataName, data) => {
    updateInput(dataName, data, setApplicant);
  };

  const handleFileInputBlur = (selectedFile) => {
    selectedFile && setFileError("");
    if (!selectedFile) {
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

  const handleSubmit = (e) => {
    e.preventDefault();
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
    if (formIsValid && !formHasEmptyValues) {
      const formData = new FormData(e.target);
      formData.append("reply_to", applicant.contact.contact_email);
      sendApplicationEmail(formData);
    }
  };

  return (
    <Form
      title="Employment Application"
      id={formId}
      onSubmit={handleSubmit}
      submit
      encType="multipart/form-data"
    >
      <FullName
        fullName={applicant.fullName}
        onChange={handleInputChange}
        onBlur={handleNameInputBlur}
        helperText={nameError}
        resetStyles
      />
      <Contact
        contact={applicant.contact}
        onChange={handleInputChange}
        onBlur={handleContantInputBlur}
        resetStyles
        helperText={contactError}
      />
      <FormFileInput
        id="resume_file"
        name="resume_file"
        label="ATTACH RESUME"
        onChange={handleFileInput}
        onBlur={(selectedFile) => {
          selectedFile && setFileError("");
        }}
        helperText={fileError}
        accept=".pdf"
      />
    </Form>
  );
};

export default EmploymentForm;
