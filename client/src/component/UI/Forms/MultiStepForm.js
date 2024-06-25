import { useEffect, useState } from "react";
import ProgressBar from "../ProgressBar";
import Form from "./Form";

import EnhanceChildren from "../../../util/EnhanceChildren";

const MultiStepForm = (props) => {
  //This component wraps a form component to provide it with the ability to be broken up into steps
  const [currentStep, setCurrentStep] = useState();

  //Only display the current step of the form
  useEffect(() => {
    const child = props.children.filter(
      //   since progress begins with one step,
      //   filter index, which starts @ 0 must add 1 to compare the two
      (formStep, index) => props.progress === index + 1
    );
    setCurrentStep(child);
  }, [props.children, props.progress]);

  return (
    <Form
      title={props.title}
      id={props.id}
      multiStep={true}
      hasPrevStep={props.hasPrevStep}
      hasNextStep={props.hasNextStep}
      onNext={props.onNext}
      onPrev={props.onBack}
    >
      <ProgressBar steps={props.steps} currentStep={props.progress} />
      <EnhanceChildren progress={props.progress}>{currentStep}</EnhanceChildren>
    </Form>
  );
};

export default MultiStepForm;
