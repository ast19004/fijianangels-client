import { useState } from "react";

import { convertFormToPDF } from "../../../util/formdata";

import { EmploymentFormContextProvider } from "../../../store/EmploymentForm/employment-form-context";
import { ApplicantContextProvider } from "../../../store/EmploymentForm/applicant-context";
import Form from "../Forms/Form";
import ApplicantInfo from "../Fieldsets/ApplicantInfo";
import EducationInfo from "../Fieldsets/Education";
import ReferencesInfo from "../Fieldsets/ReferencesInfo";
import PreviousEmploymentInfo from "../Fieldsets/PreviousEmploymentInfo";
import MilitaryServiceInfo from "../Fieldsets/MilitaryServiceInfo";
import SigningInfo from "../Fieldsets/SigningInfo";
import ProgressBar from "../ProgressBar";

const EmploymentForm = (props) => {
  const formId = "employmentForm";
  // const [formData, setFormData] = useState({});

  // const handleChange = (name, value) => {
  //   setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  // };

  const onSubmit = (event) => {
    event.preventDefault();
    // console.log(JSON.stringify(formData));
    // Handle form submission data here
  };

  return (
    // <EmploymentFormContextProvider>
    <Form title="Employment Application" id={formId} submit progressButtons>
      <ProgressBar value={0.5} />
      <ApplicantContextProvider>
        <ApplicantInfo />
      </ApplicantContextProvider>
      {/* data={formData} */}
      <EducationInfo />
      <ReferencesInfo />
      <PreviousEmploymentInfo />
      <MilitaryServiceInfo />
      <SigningInfo />
    </Form>
    // </EmploymentFormContextProvider>
  );
};

export default EmploymentForm;
