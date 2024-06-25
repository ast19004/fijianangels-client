import FormNumInput from "../Inputs/FormNumInput";
import FormTextInput from "../Inputs/FormTextInput";
import FormRadioInput from "../Inputs/FormRadioInput";
import { useEffect, useState } from "react";
import { updateInput, useUpdateFormData } from "../../../util/formdata";
import FormDateInput from "../Inputs/FormDateInput";

const EmploymentEligibility = (props) => {
  const [eligibilityData, setEligibilityData] = useState(props.eligibility);

  //Any eligibility data passed over from parent component
  //is used to set values initially for eligibility inputs
  //and as the parent changes
  useEffect(() => {
    setEligibilityData(props.eligibility);
  }, []);

  //As input values change save them in address state
  const handleChange = (name, value) => {
    updateInput(name, value, setEligibilityData);
  };

  //Send input value changes to parent component
  // to be saved in a state for this input group
  useUpdateFormData("eligibility", eligibilityData, props.onChange);
  return (
    <fieldset>
      <legend>Employment Details:</legend>
      <FormNumInput
        id="ssn"
        label="Social Security Number:"
        onChange={handleChange}
        value={eligibilityData.ssn}
      />
      <FormTextInput
        id="position"
        label="Position"
        onChange={handleChange}
        value={eligibilityData.position}
      />
      <FormDateInput
        id="availability"
        htmlFor="availability"
        label="Date Available:"
        onChange={handleChange}
        value={eligibilityData.availability}
      />
      <FormTextInput
        id="salary"
        label="Desired Salary:"
        onChange={handleChange}
        value={eligibilityData.salary}
      />
      <FormRadioInput
        id="is_us_citizen"
        label="Are you a citizen of the United States?:"
        onChange={handleChange}
        value={eligibilityData.is_us_citizen}
      />
      <FormRadioInput
        id="is_authorized"
        label="If no, are you authorized to work in the U.S.?:"
        onChange={handleChange}
        value={eligibilityData.is_authorized}
      />
      <FormRadioInput
        id="is_previous_employee"
        label="Have you ever worked for this company?:"
        onChange={handleChange}
        value={eligibilityData.is_previous_employee}
      />
      <FormDateInput
        id="prev_employment_date"
        htmlFor="prev_employment_date"
        label="If yes, when?"
        onChange={handleChange}
        value={eligibilityData.prev_employment_date}
      />

      <FormRadioInput
        id="is_convicted_felon"
        label="Have you ever been convicted of a felony?"
        onChange={handleChange}
        value={eligibilityData.is_convicted_felon}
      />
      <FormTextInput
        id="felony_explanation"
        label="If yes, explain:"
        onChange={handleChange}
        value={eligibilityData.felony_explanation}
      />
    </fieldset>
  );
};

export default EmploymentEligibility;
