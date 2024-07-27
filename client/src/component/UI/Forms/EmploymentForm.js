import { useState } from "react";

import { convertFormToPDF } from "../../../util/formdata";

import { EmploymentFormContextProvider } from "../../../store/EmploymentForm/employment-form-context.js";
import ApplicantInfo from "../Fieldsets/ApplicantInfo";
import EducationInfo from "../Fieldsets/EducationInfo.js";
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

  const handleSubmit = (event, getFormData) => {
    event.preventDefault();
    console.log(getFormData());
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
      onSubmit={handleSubmit}
    >
      <FormStep
        parentComponent={EmploymentFormContextProvider}
        childComponent={ApplicantInfo}
      />
      <FormStep
        parentComponent={EmploymentFormContextProvider}
        childComponent={EducationInfo}
      />
      <FormStep
        parentComponent={EmploymentFormContextProvider}
        childComponent={ReferencesInfo}
      />
      <FormStep
        parentComponent={EmploymentFormContextProvider}
        childComponent={PreviousEmploymentInfo}
      />
      <FormStep
        parentComponent={EmploymentFormContextProvider}
        childComponent={MilitaryServiceInfo}
      />
      <FormStep
        parentComponent={EmploymentFormContextProvider}
        childComponent={SigningInfo}
      />
    </MultiStepForm>
  );
};

export default EmploymentForm;
