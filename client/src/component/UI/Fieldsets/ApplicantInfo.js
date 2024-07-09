import { useContext, useEffect, useState } from "react";
import { updateInput } from "../../../util/formdata";
import Address from "../InputGroups/Address";
import FullName from "../InputGroups/FullName";
import Contact from "../InputGroups/Contact";
import EmploymentEligibility from "../Fieldsets/EmploymentEligibilty";
import FormDateInput from "../Inputs/FormDateInput";
import EmploymentFormContext from "../../../store/EmploymentForm/employment-form-context";
import { Box } from "@mui/material";

const ApplicantInfo = (props) => {
  const applicantCtx = useContext(EmploymentFormContext);
  const [applicant, setApplicant] = useState(applicantCtx.applicant);
  const [isInputValid, setIsInputValid] = useState(true);
  const [errors, setErrors] = useState("");

  const checkIsEmpty = (inputs, name) => {
    if (!inputs[name]) {
      setIsInputValid(false);
      setErrors((prev) => {
        return { [name]: "Cannot be empty" };
      });
      return isInputValid;
    }
  };

  //Any eligibility data passed over from parent component
  //is used to set values initially for eligibility inputs
  //and as the parent changes
  useEffect(() => {
    setApplicant(applicantCtx.applicant);
  }, [applicantCtx.applicant]);

  const handleInputChange = (dataName, data) => {
    // handleValidation();
    updateInput(dataName, data, setApplicant);
  };

  // If used in a MultiStepForm this component will be
  // wrapped in a FormStep that takes a context and this component.
  // The FormStep component provides the useSaveStep to save the current step's state before moving onto the next formStep
  props.useSaveState &&
    props.useSaveState(applicant, applicantCtx.updateApplicant, errors);

  return (
    <Box component="fieldset" id={props.id} sx={props.sx}>
      <legend>Applicant Information</legend>
      <FormDateInput
        id="application_date"
        htmlFor="application_date"
        label="Application Date:"
        onChange={handleInputChange}
        value={applicant.application_date}
        inputProps={{ readOnly: true }}
      />
      <FullName fullName={applicant.fullName} onChange={handleInputChange} />
      <Address address={applicant.address} onChange={handleInputChange} />
      <Contact contact={applicant.contact} onChange={handleInputChange} />
      <EmploymentEligibility
        eligibility={applicant.eligibility}
        onChange={handleInputChange}
      />
    </Box>
  );
};

export default ApplicantInfo;
