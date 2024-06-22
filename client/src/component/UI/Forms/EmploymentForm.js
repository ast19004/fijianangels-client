import { useState } from "react";

import { convertFormToPDF } from "../../../util/formdata";

import { ApplicantContextProvider } from "../../../store/EmploymentForm/applicant-context";
import ApplicantInfo from "../Fieldsets/ApplicantInfo";
import EducationInfo from "../Fieldsets/Education";
import ReferencesInfo from "../Fieldsets/ReferencesInfo";
import PreviousEmploymentInfo from "../Fieldsets/PreviousEmploymentInfo";
import MilitaryServiceInfo from "../Fieldsets/MilitaryServiceInfo";
import SigningInfo from "../Fieldsets/SigningInfo";
import MultiStepForm from "./MultiStepForm";

import { smoothScrollToTop } from "../../../util/scroll";

import FormStep from "./FormStep.js";

const EmploymentForm = (props) => {
  const formId = "employmentForm";
  //Get steps by calling this function in multiform child component
  const steps = 6;
  const [progress, setProgress] = useState(1);
  const hasPrevStep = progress !== 1;
  const hasNextStep = progress !== steps;

  const handleNext = () => {
    //If not last step set progress to next step
    if (progress !== steps) {
      //Set progress to next formStep
      setProgress((prev) => prev + 1);
    }
    smoothScrollToTop();
  };
  const handleBack = () => {
    if (progress !== 1) {
      // Save the state of the current step
      setProgress((prev) => prev - 1);
    }
    smoothScrollToTop();
  };

  // const isStateSaved = (bool) => {
  //   bool === true && setSaveState(false);
  // };

  const onSubmit = (event) => {
    event.preventDefault();
    // console.log(JSON.stringify(formData));
    // Handle form submission data here
  };

  return (
    <MultiStepForm
      title="Employment Application"
      id={formId}
      steps={steps}
      progress={progress}
      hasPrevStep={hasPrevStep}
      hasNextStep={hasNextStep}
      onNext={handleNext}
      onBack={handleBack}
    >
      <FormStep
        parentComponent={ApplicantContextProvider}
        childComponent={ApplicantInfo}
      />
      <FormStep
        parentComponent={ApplicantContextProvider}
        childComponent={EducationInfo}
      />
      <FormStep
        parentComponent={ApplicantContextProvider}
        childComponent={ReferencesInfo}
      />
      <FormStep
        parentComponent={ApplicantContextProvider}
        childComponent={PreviousEmploymentInfo}
      />
      <FormStep
        parentComponent={ApplicantContextProvider}
        childComponent={MilitaryServiceInfo}
      />
      <FormStep
        parentComponent={ApplicantContextProvider}
        childComponent={SigningInfo}
      />
    </MultiStepForm>
  );
};

export default EmploymentForm;
