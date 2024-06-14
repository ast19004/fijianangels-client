import { FormControl, FormLabel, TextField } from "@mui/material";
import FormNumInput from "../Inputs/FormNumInput";
import FormTextInput from "../Inputs/FormTextInput";
import FormRadioInput from "../Inputs/FormRadioInput";
import { useEffect, useState } from "react";
import { updateInput } from "../../../util/formdata";
import CustomFieldset from "./styles/CustomFieldset";

const EmploymentEligibility = (props) => {
  const [eligibilityData, setEligibilityData] = useState(props.eligibility);

  const handleChange = (name, value) => {
    updateInput(name, value, setEligibilityData);
  };

  useEffect(() => {
    props.updateEligibility(eligibilityData);
  }, [eligibilityData]);

  return (
    <CustomFieldset>
      <legend>Employment Details:</legend>
      <FormNumInput
        id="ssn"
        label="Social Security Number:"
        onChange={handleChange}
        value={eligibilityData.ssn}
      />
      <FormTextInput id="position" label="Position" />
      <FormTextInput
        id="availability"
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
      <FormControl>
        <FormLabel htmlFor="prev_employment_date">If yes, when?</FormLabel>

        <TextField
          id="prev_employment_date"
          type="date"
          onChange={handleChange}
          value={eligibilityData.prev_employment_date}
        />
      </FormControl>
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
    </CustomFieldset>
  );
};

export default EmploymentEligibility;
