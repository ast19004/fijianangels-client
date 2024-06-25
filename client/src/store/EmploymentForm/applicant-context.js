import React, { useState } from "react";
import { getTodaysDate } from "../../util/Date";

export const ApplicantContext = React.createContext({
  applicant: {
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
    eligibility: {
      ssn: "",
      position: "",
      availability: "",
      salary: "",
      is_us_citizen: "",
      is_authorized: "",
      is_previous_employee: "",
      prev_employment_date: "",
      is_convicted_felon: "",
      felony_explanation: "",
    },
  },
  updateApplicant: (value) => {},
});

export const ApplicantContextProvider = (props) => {
  const updateApplicant = (value) => {
    console.log("applicant: ", applicant);
    console.log("value: ", value);
    const updateApplicant = { ...applicant, ...value };
    setApplicant(updateApplicant);
    console.log("updated applicant: ", updateApplicant);
  };
  const [applicant, setApplicant] = useState({
    application_date: getTodaysDate(),
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
    eligibility: {
      ssn: "",
      position: "",
      availability: "",
      salary: "",
      is_us_citizen: "",
      is_authorized: "",
      is_previous_employee: "",
      prev_employment_date: "",
      is_convicted_felon: "",
      felony_explanation: "",
    },
  });
  return (
    <ApplicantContext.Provider
      value={{
        applicant: applicant,
        updateApplicant: updateApplicant,
      }}
    >
      {props.children}
    </ApplicantContext.Provider>
  );
};
