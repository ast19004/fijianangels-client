import { useState } from "react";
import { updateInput } from "../../../util/formdata";
// import Address from "../InputGroups/Address";
import FullName from "../InputGroups/FullName";
import Contact from "../InputGroups/Contact";
// import EmploymentFormContext from "../../../store/EmploymentForm/employment-form-context";
import { Box } from "@mui/material";

const ApplicantInfo = (props) => {
  // const applicantCtx = useContext(EmploymentFormContext);
  const [applicant, setApplicant] = useState(props.applicant);

  const handleInputChange = (dataName, data) => {
    //Update the applicant in child & parent components
    updateInput(dataName, data, setApplicant);
    props.onChange(applicant);
  };

  return (
    <Box component="fieldset" id={props.id} sx={props.sx}>
      <FullName
        fullName={applicant.fullName}
        onChange={handleInputChange}
        onBlur={props.onNameBlur}
        helperText={props.helperText.nameError}
      />
      {/* <Address address={applicant.address} onChange={handleInputChange} /> */}
      <Contact
        name="contact"
        resetStyles
        contact={applicant.contact}
        onChange={handleInputChange}
        onBlur={props.onContactBlur}
        helperText={props.helperText.contactError}
      />
    </Box>
  );
};

export default ApplicantInfo;
