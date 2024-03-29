import { useState } from "react";
import EducationGroup from "../InputGroups/EducationGroup";
import { useUpdatedFormData, updateInput } from "../../../util/formdata";

const EducationInfo = (props) => {
  const educationTypes = [
    { abr: "high-school", label: "High School" },
    { abr: "college", label: "College" },
    { abr: "other-education", label: "Other Education" },
  ];

  const [educationInfo, setEducationInfo] = useState();
  const handleChange = (name, value) => {
    updateInput(name, value, setEducationInfo);
  };
  useUpdatedFormData("education", educationInfo, props.onChange);
  return (
    <fieldset>
      <legend>Education</legend>
      {educationTypes.map((type) => (
        <EducationGroup type={type} key={type.abr} onChange={handleChange} />
      ))}
    </fieldset>
  );
};

export default EducationInfo;
