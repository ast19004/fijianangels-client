import React, { useState } from "react";
import { updateInput } from "../../util/formdata";

const EducationContext = React.createContext({
  educationInput: {},
  updateEducation: (name, value) => {},
});

export const EducationContextProvider = (props) => {
  const [education, setEducation] = useState({});

  return (
    <EducationContext.Provider
      value={{
        educationInput: education,
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
