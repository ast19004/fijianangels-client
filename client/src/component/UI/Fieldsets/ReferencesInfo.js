import { useState, useContext, useEffect } from "react";
import { updateInput } from "../../../util/formdata";
import EmploymentFormContext from "../../../store/EmploymentForm/employment-form-context";
import ReferenceGroup from "../InputGroups/ReferenceGroup";
import CustomFieldset from "./styles/CustomFieldset";
// import { useUpdateFormData, updateInput } from "../../../util/formdata";

const ReferencesInfo = (props) => {
  const referencesCtx = useContext(EmploymentFormContext);
  const [references, setReferences] = useState(referencesCtx.references);
  const [errors, setErrors] = useState("");

  //Any eligibility data passed over from parent component
  //is used to set values initially for eligibility inputs
  //and as the parent changes
  useEffect(() => {
    setReferences(referencesCtx.references);
  }, [referencesCtx.references]);

  const handleInputChange = (dataName, data) => {
    // handleValidation();
    updateInput(dataName, data, setReferences);
  };

  // If used in a MultiStepForm this component will be
  // wrapped in a FormStep that takes a context and this component.
  // The FormStep component provides the useSaveStep to save the current step's state before moving onto the next formStep
  props.useSaveState &&
    props.useSaveState(references, referencesCtx.updateReferences, errors);

  return (
    <CustomFieldset>
      <legend>References:</legend>
      <p>Please list three professional references.</p>
      {Object.keys(references).map((key, index) => (
        <ReferenceGroup
          label={`Reference ${index + 1}`}
          key={key}
          onChange={handleInputChange}
          reference={references[key]}
        />
      ))}
    </CustomFieldset>
  );
};

export default ReferencesInfo;
