import React, { useState } from "react";
import { updateInput } from "../../util/formdata";

export const ApplicantContext = React.createContext({
  applicantInput: {
    fullName: {
      first_name: "",
      middle_name: "",
      last_name: "",
    },
    address: {
      street: "",
      unit_apt: "",
      city: "",
      state: "",
      zipcode: "",
    },
    contact: { contact_phone: "", contact_email: "" },
  },
  updateApplicant: (name, value) => {},
  updateFullName: (value) => {},
  updateAddress: (value) => {},
  updateContact: (value) => {},
});

export const ApplicantContextProvider = (props) => {
  const updateApplicant = (name, value) => {
    updateInput(name, value, setApplicant);
    console.log(applicant);
  };
  const [applicant, setApplicant] = useState({
    fullName: {
      first_name: "",
      middle_name: "",
      last_name: "",
    },
    address: {
      street: "",
      unit_apt: "",
      city: "",
      state: "",
      zipcode: "",
    },
    contact: {
      contact_phone: "",
      contact_email: "",
    },
  });
  return (
    <ApplicantContext.Provider
      value={{
        applicantInput: applicant,
        updateFullName: (value) => {
          updateApplicant("fullName", value);
        },
        updateAddress: (value) => {
          updateApplicant("address", value);
        },
        updateContact: (value) => {
          updateApplicant("contact", value);
        },
      }}
    >
      {props.children}
    </ApplicantContext.Provider>
  );
};
