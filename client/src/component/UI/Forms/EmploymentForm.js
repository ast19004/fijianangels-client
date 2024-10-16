import { useState } from "react";
import Form from "./Form.js";
import ApplicantInfo from "../Fieldsets/ApplicantInfo.js";
import FormFileInput from "../Inputs/FormFileInput.js";

import { validatePDFFile } from "../../../util/validation.js";

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
  const [error, setError] = useState({ file: "" });

  const handleApplicantInput = (applicant) => {
    setApplicant(applicant);
  };

  const handleFileInput = (selectedFile) => {
    if (!selectedFile) {
      setFile(null);
      return;
    }
    //Validate file type
    const fileIsValid = validatePDFFile(
      selectedFile,
      MAX_FILE_SIZE_MB,
      setError,
      "file"
    );

    //If file is invalid set back to null
    !fileIsValid && setFile(null);

    //If file is valid clear errors and set the file
    fileIsValid &&
      setFile(selectedFile) &&
      setError((prevErr) => ({ ...prevErr, file: "" }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Form
      title="Employment Application"
      id={formId}
      onSubmit={handleSubmit}
      submit
    >
      <ApplicantInfo applicant={applicant} onChange={handleApplicantInput} />
      <FormFileInput
        id="resume_file"
        name="resume_file"
        label="ATTACH RESUME"
        onChange={handleFileInput}
        helperText={error.file}
        accept=".pdf"
        error={error.file}
      />
    </Form>
  );
};

export default EmploymentForm;
