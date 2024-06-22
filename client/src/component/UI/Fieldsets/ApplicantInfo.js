import { ApplicantContext } from "../../../store/EmploymentForm/applicant-context";
import Address from "../InputGroups/Address";
import FullName from "../InputGroups/FullName";
import Contact from "../InputGroups/Contact";
import EmploymentEligibility from "../Fieldsets/EmploymentEligibilty";
import { useContext, useEffect, useState } from "react";
import { updateInput } from "../../../util/formdata";
import CustomFieldset from "./styles/CustomFieldset";

const ApplicantInfo = (props) => {
  const applicantCtx = useContext(ApplicantContext);
  const [applicant, setApplicant] = useState(applicantCtx.applicant);

  const handleInputChange = (dataName, data) => {
    updateInput(dataName, data, setApplicant);
  };

  useEffect(() => {
    console.log(applicant);
  }, [applicant]);

  // If used in a MultiStepForm this component will be
  // wrapped in a FormStep that takes a context and this component.
  // The FormStep component provides the useSaveStep to save the current step's state before moving onto the next formStep
  props.useSaveState &&
    props.useSaveState(applicant, applicantCtx.updateApplicant);

  return (
    <CustomFieldset>
      <legend>Applicant Information</legend>
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
