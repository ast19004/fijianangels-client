import React, { useState } from "react";
import { updateInput } from "../../util/formdata";
import { educationObj } from "./educationObj";

const EducationContext = React.createContext({
  education: educationObj,
  updateEducation: (value) => {},
});

export const EducationContextProvider = (props) => {
  const [education, setEducation] = useState(educationObj);

  return (
    <EducationContext.Provider
      value={{
        education: education,
        updateEducation: (name, value) => {
          updateInput(name, value, setEducation);
        },
      }}
    >
      {props.children}
    </EducationContext.Provider>
  );
};

export default EducationContext;
