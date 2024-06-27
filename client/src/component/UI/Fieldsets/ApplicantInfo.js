import { ApplicantContext } from "../../../store/EmploymentForm/applicant-context";
import Address from "../InputGroups/Address";
import FullName from "../InputGroups/FullName";
import Contact from "../InputGroups/Contact";
import EmploymentEligibility from "../Fieldsets/EmploymentEligibilty";
import { useContext, useEffect, useState } from "react";
import { updateInput } from "../../../util/formdata";
import CustomFieldset from "./styles/CustomFieldset";
import FormDateInput from "../Inputs/FormDateInput";

const ApplicantInfo = (props) => {
  const applicantCtx = useContext(ApplicantContext);
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

  // //Check validity of this component's inputs
  // const handleValidation = () => {
  //   const formFields = { ...applicant };
  //   //FullName
  //   checkIsEmpty(formFields.fullName, "first_name");
  //   checkIsEmpty(formFields.fullName, "last_name");

  //   //Address
  //   checkIsEmpty(formFields.address, "street");
  //   checkIsEmpty(formFields.address, "city");
  //   checkIsEmpty(formFields.address, "state");
  //   checkIsEmpty(formFields.address, "state");
  //   checkIsEmpty(formFields.address, "zipcode");

  //   //Eligibility
  //   checkIsEmpty(formFields.eligibility, "ssn");
  //   checkIsEmpty(formFields.eligibility, "position");
  //   checkIsEmpty(formFields.eligibility, "availability");
  //   checkIsEmpty(formFields.eligibility, "salary");
  //   checkIsEmpty(formFields.eligibility, "is_us_citizen");
  //   checkIsEmpty(formFields.eligibility, "is_authorized");
  //   checkIsEmpty(formFields.eligibility, "is_previous_employee");
  //   // checkIsEmpty(formFields.eligibility, 'prev_employment_date');
  //   checkIsEmpty(formFields.eligibility, "is_convicted_felon");
  //   // checkIsEmpty(formFields.eligibility, 'felony_explanation');

  //   console.log(isInputValid);
  //   console.log(JSON.stringify(errors));
  // };

  //Any eligibility data passed over from parent component
  //is used to set values initially for eligibility inputs
  //and as the parent changes
  useEffect(() => {
    setApplicant(applicantCtx.applicant);
  }, []);

  const handleInputChange = (dataName, data) => {
    // handleValidation();
    updateInput(dataName, data, setApplicant);
  };

  useEffect(() => {
    console.log(applicant);
  }, [applicant]);

  // If used in a MultiStepForm this component will be
  // wrapped in a FormStep that takes a context and this component.
  // The FormStep component provides the useSaveStep to save the current step's state before moving onto the next formStep
  props.useSaveState &&
    props.useSaveState(applicant, applicantCtx.updateApplicant, errors);

  return (
    <CustomFieldset>
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
    </CustomFieldset>
  );
};

export default ApplicantInfo;
