import { useState } from "react";
import EducationGroup from "../InputGroups/EducationGroup";
import { useUpdateFormData, updateInput } from "../../../util/formdata";
import CustomFieldset from "./styles/CustomFieldset";

const EducationInfo = (props) => {
  const educationTypes = [
    { abr: "high_school", label: "High School" },
    { abr: "college", label: "College" },
    { abr: "other", label: "Other Education" },
  ];

  const [educationInfo, setEducationInfo] = useState();

  //As input values change save them in educationInfo value state
  const handleChange = (name, value) => {
    updateInput(name, value, setEducationInfo);
  };

  //Send input value changes to parent component
  // to be saved in a state for this input group
  // Make sure input name matches context
  useUpdateFormData("education", educationInfo, props.onChange);

  return (
    <CustomFieldset>
      <legend>Education</legend>
      {educationTypes.map((type) => (
        <EducationGroup type={type} key={type.abr} onChange={handleChange} />
      ))}
    </CustomFieldset>
  );
};

export default EducationInfo;
