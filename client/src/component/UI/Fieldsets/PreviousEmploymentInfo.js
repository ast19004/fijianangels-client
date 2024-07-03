import { useState, useContext, useEffect } from "react";
import EmploymentFormContext from "../../../store/EmploymentForm/employment-form-context";
import EmploymentGroup from "../InputGroups/EmploymentGroup";
import { updateInput } from "../../../util/formdata";

const PreviousEmploymentInfo = (props) => {
  const ctx = useContext(EmploymentFormContext);
  const [history, setHistory] = useState(ctx.previousEmployment);
  const [errors, setErrors] = useState("");

  //Any previous employment data passed over from parent component
  //is used to set values initially for previous employment inputs
  //and as the parent changes
  useEffect(() => {
    setHistory(ctx.employmentHistory);
    console.log(history);
  }, [ctx.employmentHistory]);

  const handleChange = (name, value) => {
    updateInput(name, value, setHistory);
  };

  // If used in a MultiStepForm this component will be
  // wrapped in a FormStep that takes a context and this component.
  // The FormStep component provides the useSaveStep to save the current step's state before moving onto the next formStep
  props.useSaveState &&
    props.useSaveState(history, ctx.updatePreviousEmployment, errors);

  return (
    <EmploymentGroup num={1} onChange={handleChange} employment={history[0]} />
  );
};

export default PreviousEmploymentInfo;
