import React, { useState } from "react";
import { updateInput } from "../../util/formdata";

const EmploymentFormContext = React.createContext({
  applicantInput: {
    fullName: {
      first: "",
      middle: "",
      last: "",
    },
    address: {},
    contact: {},
  },
  educationInput: {},
  referencesInput: {},
  previousEmploymentInput: {},
  militaryServiceData: {},
  signature: {},

  updateApplicant: (name, value) => {},
  updateEducation: (name, value) => {},
  updateReferences: (name, value) => {},
  updatePreviousEmployment: (name, value) => {},
  updateMilitaryService: (name, value) => {},
  updateSignature: (name, value) => {},
});

export const EmploymentFormContextProvider = (props) => {
  const [applicant, setApplicant] = useState({
    fullName: {
      first: "",
      middle: "",
      last: "",
    },
    address: {},
    contact: {},
  });
  const [education, setEducation] = useState({});
  const [references, setReferences] = useState({});
  const [previousEmployment, setPreviousEmployment] = useState({});
  const [militaryService, setMilitaryService] = useState({});
  const [signature, setSignature] = useState({});

  return (
    <EmploymentFormContext.Provider
      value={{
        applicantInput: applicant,
        educationInput: education,
        referencesInput: references,
        previousEmploymentInput: previousEmployment,
        militaryServiceData: militaryService,
        signature: signature,

        updateApplicant: (name, value) => {
          updateInput(name, value, setApplicant);
          console.log(applicant);
        },
        updateEducation: (name, value) => {
          updateInput(name, value, setEducation);
        },
        updateReferences: (name, value) => {
          updateInput(name, value, setReferences);
        },
        updatePreviousEmployment: (name, value) => {
          updateInput(name, value, setPreviousEmployment);
        },
        updateMilitaryService: (name, value) => {
          updateInput(name, value, setMilitaryService);
        },
        updateSignature: (name, value) => {
          updateInput(name, value, setSignature);
        },
      }}
    >
      {props.children}
    </EmploymentFormContext.Provider>
  );
};

export default EmploymentFormContext;
