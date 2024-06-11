import { FormControl, FormLabel, TextField } from "@mui/material";
import FormNumInput from "../Inputs/FormNumInput";
import FormTextInput from "../Inputs/FormTextInput";
import FormRadioInput from "../Inputs/FormRadioInput";

const EmploymentEligibility = () => {
  return (
    <fieldset>
      <legend>Employment Details:</legend>
      <FormNumInput id="ssn" label="Social Security Number:" />
      <FormTextInput id="position" label="Position" />
      <FormTextInput id="availability" label="Date Available:" />
      <FormTextInput id="salary" label="Desired Salary:" />
      <FormRadioInput
        id="is-us-citizen"
        label="Are you a citizen of the United States?:"
      />
      <FormRadioInput
        id="is-authorized"
        label="If no, are you authorized to work in the U.S.?:"
      />
      <FormRadioInput
        id="is-previous-employee"
        label="Have you ever worked for this company?:"
      />
      <FormControl>
        <FormLabel htmlFor="prev-employment-date">If yes, when?</FormLabel>

        <TextField id="prev-employment-date" type="date" />
      </FormControl>
      <FormRadioInput
        id="is-convicted-felon"
        label="Have you ever been convicted of a felony?"
      />
      <FormTextInput id="felony-explanation" label="If yes, explain:" />
    </fieldset>
  );
};

export default EmploymentEligibility;
