import { useState } from "react";
import { updateInput } from "../../../util/formdata";
// import Address from "../InputGroups/Address";
import FullName from "../InputGroups/FullName";
import Contact from "../InputGroups/Contact";
// import EmploymentFormContext from "../../../store/EmploymentForm/employment-form-context";
import { Box } from "@mui/material";
import {
  validateEmail,
  validateName,
  validatePhone,
} from "../../../util/validation";

const ApplicantInfo = (props) => {
  // const applicantCtx = useContext(EmploymentFormContext);
  const [applicant, setApplicant] = useState(props.applicant);
  const [nameError, setNameError] = useState({
    first_name: "",
    last_name: "",
  });
  const [contactError, setContactError] = useState({
    contact_phone: "",
    contact_email: "",
  });

  const handleInputChange = (dataName, data) => {
    //Update the applicant in child & parent components
    updateInput(dataName, data, setApplicant);
    props.onChange(applicant);
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

  return (
    <Box component="fieldset" id={props.id} sx={props.sx}>
      <FullName
        fullName={applicant.fullName}
        onChange={handleInputChange}
        onBlur={handleNameInputBlur}
        helperText={{
          first_name: [nameError.first_name],
          last_name: [nameError.last_name],
        }}
      />
      {/* <Address address={applicant.address} onChange={handleInputChange} /> */}
      <Contact
        name="contact"
        resetStyles
        contact={applicant.contact}
        onChange={handleInputChange}
        onBlur={handleContantInputBlur}
        helperText={contactError}
      />
    </Box>
  );
};

export default ApplicantInfo;
