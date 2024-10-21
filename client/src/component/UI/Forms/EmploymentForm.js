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
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import EmploymentApplicationToastContent from "../CustomToastContent/EmploymentApplicantionToastContent.js";
import { getPDFDataUrl } from "../../../util/formdata.js";
import { Box } from "@mui/material";

const EmploymentForm = (props) => {
  const navigate = useNavigate();

  const formId = "employmentForm";
  const MAX_FILE_SIZE_MB = 2;
  const [file, setFile] = useState(null);
  const [base64DataUrl, setBase64DataUrl] = useState("");
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
  const [submitDisabled, setSubmitDisabled] = useState(false);

  const handleFileInput = (selectedFile) => {
    setFile(selectedFile);
    selectedFile && getPDFDataUrl(selectedFile, setBase64DataUrl);
  };
  const handleInputChange = (dataName, data) => {
    updateInput(dataName, data, setApplicant);
  };

  const handleFileInputBlur = (selectedFile) => {
    selectedFile && setFileError("");
    if (!selectedFile) {
      setFileError((prevErr) => "Please attach your resume as a pdf");
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

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      //Disable submit so application can only be sent once
      setSubmitDisabled(true);
      const emailStatus = await sendApplicationEmail(e);
      if (emailStatus === 200) {
        navigate("/");
        window.scrollTo({ top: 0, behavior: "instant" });
        toast.success(
          <EmploymentApplicationToastContent
            name={`${applicant.fullName.first_name} ${applicant.fullName.last_name}`}
          />
        );
      }
    }
  };

  return (
    <Box>
      <Form
        title="Employment Application"
        id={formId}
        onSubmit={handleSubmit}
        submit
        encType="multipart/form-data"
        submitDisabled={submitDisabled}
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
          onBlur={handleFileInputBlur}
          helperText={fileError}
          accept=".pdf"
        />
        {base64DataUrl && !fileError && (
          <Box
            sx={{
              width: "10rem",
              height: "auto",
              margin: "0 auto",
              padding: "1rem",
            }}
          >
            <Box
              component="img"
              src={base64DataUrl}
              alt="File preview"
              sx={{ display: "block", maxWidth: "100%" }}
            />
          </Box>
        )}
      </Form>
    </Box>
  );
};

export default EmploymentForm;
