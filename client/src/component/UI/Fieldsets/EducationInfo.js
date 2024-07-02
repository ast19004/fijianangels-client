import { useContext, useEffect, useState } from "react";
import { updateInput } from "../../../util/formdata";
import EducationGroup from "../InputGroups/EducationGroup";
import CustomFieldset from "./styles/CustomFieldset";
import EmploymentFormContext from "../../../store/EmploymentForm/employment-form-context";

const EducationInfo = (props) => {
  const educationCtx = useContext(EmploymentFormContext);
  const educationTypes = [
    { abr: "high_school", label: "High School" },
    { abr: "college", label: "College" },
    { abr: "other", label: "Other Education" },
  ];

  const [education, setEducation] = useState(educationCtx.education);
  const [errors, setErrors] = useState([]);

  //Any education data passed over from parent component
  //is used to set values initially for education inputs
  //and as the parent changes
  useEffect(() => {
    setEducation(educationCtx.education);
  }, []);

  //As input values change save them in educationInfo value state
  const handleChange = (name, value) => {
    updateInput(name, value, setEducation);
    console.log(education);
  };

  // If used in a MultiStepForm this component will be
  // wrapped in a FormStep that takes a context and this component.
  // The FormStep component provides the useSaveStep to save the current step's state before moving onto the next formStep
  props.useSaveState &&
    props.useSaveState(education, educationCtx.updateEducation, errors);

  useEffect(() => {
    console.log(JSON.stringify(education));
  }, [education]);

  return (
    <CustomFieldset>
      <legend>Education</legend>
      {educationTypes.map((type) => (
        <EducationGroup
          key={type.abr}
          abr={type.abr}
          label={type.label}
          onChange={handleChange}
          education={education[`${type.abr}`]}
        />
      ))}
    </CustomFieldset>
  );
};

export default EducationInfo;
