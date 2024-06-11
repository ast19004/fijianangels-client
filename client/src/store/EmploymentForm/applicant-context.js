import React, { useState } from "react";
import { updateInput } from "../../util/formdata";

export const ApplicantContext = React.createContext({
  applicantInput: {
    fullName: {
      first: "",
      middle: "",
      last: "",
    },
    address: {},
    contact: {},
  },
  updateApplicant: (name, value) => {},
});

export const ApplicantContextProvider = (props) => {
  const [applicant, setApplicant] = useState({
    fullName: {
      first: "",
      middle: "",
      last: "",
    },
    address: {},
    contact: {},
  });
  return (
    <ApplicantContext.Provider
      value={{
        applicantInput: applicant,
        updateApplicant: (name, value) => {
          updateInput(name, value, setApplicant);
          console.log(applicant);
        },
      }}
    >
      {props.children}
    </ApplicantContext.Provider>
  );
};
