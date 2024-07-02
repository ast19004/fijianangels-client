import React, { useState } from "react";
import { getTodaysDate } from "../../util/Date";
import { updateObj } from "../../util/formdata";
import { applicantObj } from "./applicantObj";
import { educationObj } from "./educationObj";
import { referencesObj } from "./referencesObj";
import { prevEmploymentObj } from "./prevEmploymentObj";
import { militaryObj } from "./militaryObj";

export const EmploymentFormContext = React.createContext({
  //Applicant Info
  applicant: applicantObj,
  //Education Info
  education: educationObj,

  //References Info
  references: referencesObj,

  //Previous Employment
  previousEmployment: prevEmploymentObj,

  //Miliaty Service
  miliatyService: militaryObj,

  //Signature
  signature: {
    signature: "",
    signatureDate: "",
  },

  //Update Functions
  updateApplicant: (newValues) => {},
  updateEducation: (newValues) => {},
  updatePreviousEmployment: (newValues) => {},
  updateReferences: (newValues) => {},
  updateMilitaryService: (newValues) => {},
  updateSignature: (newValues) => {},
});

export const EmploymentFormContextProvider = (props) => {
  //Update Functions
  const handleUpdateApplicant = (newValues) => {
    updateObj(applicant, newValues, setApplicant);
  };

  const handleUpdateEducation = (newValues) => {
    updateObj(education, newValues, setEducation);
  };

  const handleUpdatePreviousEmployment = (newValues) => {
    updateObj(previousEmployment, newValues, setPreviousEmployment);
  };
  const handleUpdateReferences = (newValues) => {
    updateObj(references, newValues, setReferences);
  };
  const handleUpdateMilitaryService = (newValues) => {
    updateObj(militaryService, newValues, setMilitaryService);
  };
  const handleUpdateSignature = (newValues) => {
    updateObj(signature, newValues, setSignature);
  };

  //Applicant Info
  const [applicant, setApplicant] = useState({
    application_date: getTodaysDate(),
    ...applicantObj,
  });

  //Education Info
  const [education, setEducation] = useState(educationObj);
  const [references, setReferences] = useState(referencesObj);
  const [previousEmployment, setPreviousEmployment] =
    useState(prevEmploymentObj);
  const [militaryService, setMilitaryService] = useState(militaryObj);
  const [signature, setSignature] = useState({
    signature: "",
    signatureDate: "",
  });

  return (
    <EmploymentFormContext.Provider
      value={{
        applicant: applicant,
        education: education,
        references: references,
        previousEmployment: previousEmployment,
        militaryService: militaryService,
        signature: signature,
        updateEducation: handleUpdateEducation,
        updateApplicant: handleUpdateApplicant,
        updatePreviousEmployment: handleUpdatePreviousEmployment,
        updateReferences: handleUpdateReferences,
        updateMilitaryService: handleUpdateMilitaryService,
        updateSignature: handleUpdateSignature,
        test: () => {
          console.log("Hi");
        },
      }}
    >
      {props.children}
    </EmploymentFormContext.Provider>
  );
};

export default EmploymentFormContext;
