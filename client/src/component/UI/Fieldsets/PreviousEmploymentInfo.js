import { useState, useContext, useEffect } from "react";
import EmploymentFormContext from "../../../store/EmploymentForm/employment-form-context";
import EmploymentGroup from "../InputGroups/EmploymentGroup";
import { updateInput } from "../../../util/formdata";
import CustomFieldset from "./styles/CustomFieldset";

const PreviousEmploymentInfo = (props) => {
  const ctx = useContext(EmploymentFormContext);
  const [employHistory, setEmployHistory] = useState(ctx.previousEmployment);
  const [errors, setErrors] = useState("");

  //Any previous employment data passed over from parent component
  //is used to set values initially for previous employment inputs
  //and as the parent changes
  useEffect(() => {
    setEmployHistory(ctx.previousEmployment);
  }, [ctx.previousEmployment]);

  const handleChange = (dataName, data) => {
    updateInput(dataName, data, setEmployHistory);
  };

  // If used in a MultiStepForm this component will be
  // wrapped in a FormStep that takes a context and this component.
  // The FormStep component provides the useSaveStep to save the current step's state before moving onto the next formStep
  props.useSaveState &&
    props.useSaveState(employHistory, ctx.updatePreviousEmployment, errors);

  return (
    <CustomFieldset>
      <legend>Previous Employment</legend>
      {Object.keys(employHistory).map((key) => (
        <>
          <EmploymentGroup
            key={key}
            groupName={key}
            group={employHistory[key]}
            onChange={handleChange}
            employment={employHistory[key]}
          />
          <br />
        </>
      ))}
    </CustomFieldset>
  );
};

export default PreviousEmploymentInfo;
