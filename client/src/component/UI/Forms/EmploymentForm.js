import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Box, Button, Typography } from "@mui/material";

//Utility functions
import {
  checkIsFormEmpty,
  checkIsFormValid,
  validateEmail,
  validateName,
  validatePDFFile,
  validatePhone,
} from "../../../util/validation.js";
import { sendApplicationEmail } from "../../../util/Email/send.js";
import { updateInput } from "../../../util/formdata.js";
import { getPDFDataUrl } from "../../../util/formdata.js";

//Child Components
import Form from "./Form/Form.js";
import FormFileInput from "../Inputs/FormFileInput.js";
import EmploymentApplicationToastContent from "../CustomToastContent/EmploymentApplicantionToastContent.js";
import FullName from "../InputGroups/FullName.js";
import Contact from "../InputGroups/Contact.js";
import Reference from "../InputGroups/Reference.js";


const EmploymentForm = (props) => {
  const navigate = useNavigate();

  const formId = "employmentForm";
  const MAX_FILE_SIZE_MB = 2;

  //Loading states
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  
  //File states
  const [file, setFile] = useState(null);
  const [base64DataUrl, setBase64DataUrl] = useState("");

  //Input states
  const [applicant, setApplicant] = useState({
    fullName: {
      first_name: "",
      last_name: "",
    },
    contact: { contact_phone: "", contact_email: "" },
  });

  //References
  const [references, setReferences] = useState([]);

  const addReference = () => {
    setReferences(prev => [
      ...prev,
      {
        id: Date.now(), //unique ID,
        name: "",
        relationship: "",
        phone: "",
        email: ""
      }
    ]);
  }

  const updateReference = (id, updatedData) => {
    setReferences(prev =>
      prev.map(ref => (ref.id === id ? { ...ref, ...updatedData } : ref))
    )
  }

  const removeReference = (id) => {
    setReferences(prev => prev.filter(ref => ref.id !== id));
  }

  //Error states
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
      window.scrollTo({ top: 10000, behavior: "instant" });
      //Disable submit so application can only be sent once
      setSubmitDisabled(true);
      setLoading(true);
      setLoadingText("Saving form...");
      
      const emailStatus = await sendApplicationEmail(e, references);
      
      if (emailStatus === 200) {
        setTimeout(() => { setLoadingText("Form Sent!") }, 3000);
        setTimeout(() => {
          navigate("/");
          window.scrollTo({ top: 0, behavior: "instant" });
          toast.success(
            <EmploymentApplicationToastContent
              name={`${applicant.fullName.first_name} ${applicant.fullName.last_name}`}
            />
          );
        }, 6000);
      } else { 
        setTimeout(() => setLoadingText("Server error..."), 2500);
        setTimeout(() => { setLoadingText("Please try again later...");}, 5000);
        setTimeout(() => { setSubmitDisabled(false); setLoading(false); setLoadingText("") }, 7500);
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
        loading={loading}
        loadingText={ loadingText}
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
        <Box sx={{
          marginLeft: '0.5rem',
          color: 'rgb(6,105,136)'
        }}>
          <Typography component="h3" variant="h5"  sx={{display: "inline-block"}}>References:&nbsp;</Typography>
          <Typography sx={{display: "inline-block"}}><i>Please list at least 2 professional references</i></Typography>
        </Box>
        
        {references.map((ref, index) => (
          <Reference
            key={ref.id}
            id={ref.id}
            index={ index + 1}
            data={ref}
            onChange={updateReference}
            onRemove={removeReference}
          /> 
        ))}
        <Button
          sx={{
            margin: '0.5rem',
            background: 'rgba(6,105,136, 0.8)',
            color: 'white',
            cursor: 'pointer',
            '&:hover:': {
              background: 'rgba(6,105,136, 0.8) !important'
            }
          }}
          onClick={addReference}
        >+ Reference</Button>

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
