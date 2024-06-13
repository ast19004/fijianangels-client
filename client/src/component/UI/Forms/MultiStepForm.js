import { useEffect, useState } from "react";
import ProgressBar from "../ProgressBar";
import Form from "./Form";

const MultiStepForm = (props) => {
  //This component wraps a form component to provide it with the ability to be broken up into steps
  const steps = props.children.length;

  const [progress, setProgress] = useState(1);
  const hasPrevStep = progress !== 1;
  const hasNextStep = progress !== steps;

  const next = () => {
    if (progress !== steps) {
      setProgress((prev) => prev + 1);
    }
  };
  const back = () => {
    if (progress !== 1) {
      setProgress((prev) => prev - 1);
    }
  };

  return (
    <Form
      title={props.title}
      id={props.id}
      multiStep={true}
      hasNextStep={hasNextStep}
      hasPrevStep={hasPrevStep}
      onNext={next}
      onPrev={back}
    >
      <ProgressBar value={progress} />
      {props.children.filter(
        //   since progress begins with one step,
        //   filter index, which starts @ 0 must add 1 to compare the two
        (formStep, index) => progress === index + 1
      )}
    </Form>
  );
};

export default MultiStepForm;
