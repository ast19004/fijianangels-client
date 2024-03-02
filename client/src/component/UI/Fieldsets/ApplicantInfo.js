import { TextField, FormLabel, FormControl } from "@mui/material";

import FormTextInput from "../Inputs/FormTextInput";
import FormNumInput from "../Inputs/FormNumInput";
import FormPhoneInput from "../Inputs/FormNumInput";
import FormEmailInput from "../Inputs/FormEmailInput";
import FormRadioInput from "../Inputs/FormRadioInput";

const ApplicantInfo = (props) => {
  return (
    <fieldset>
      <legend>Applicant Information</legend>
      <fieldset>
        <legend>Full Name:</legend>
        <FormTextInput id="first-name" label="First:" />
        <FormTextInput id="middle-initial" label="M.I." />
        <FormTextInput id="last-name" label="Last:" />
      </fieldset>
      <fieldset>
        <legend>Address:</legend>
        <FormTextInput id="street" label="Street Address" />
        <FormNumInput id="unit/apt-number" label="Apartment/Unit #" />
        <FormTextInput id="city" label="City" />
        <FormTextInput id="state" label="State" />
        <FormNumInput id="zipcode" label="ZIP Code" />
      </fieldset>
      <fieldset>
        <legend>Contact</legend>
        <FormPhoneInput id="phone" label="Phone" />
        <FormEmailInput id="email" label="Email" />
      </fieldset>
      <fieldset>
        <legend>Employment Details:</legend>
        <FormNumInput id="ssn" label="Social Security Number:" />
        <FormTextInput id="position" label="Position" />
        <FormTextInput id="availability" label="Date Available:" />
        <FormTextInput id="salary" label="Desired Salary:" />
        <FormRadioInput
          id="is-us-citizen"
          label="            Are you a citizen of the United States?:"
          radiocontrols={[
            { label: "Yes", value: "yes" },
            { label: "No", value: "no" },
          ]}
        />
        <FormRadioInput
          id="is-authorized"
          label="If no, are you authorized to work in the U.S.?:"
          radiocontrols={[
            { label: "Yes", value: "yes" },
            { label: "No", value: "no" },
          ]}
        />
        <FormRadioInput
          id="is-previous-employee"
          label="Have you ever worked for this company?:"
          radiocontrols={[
            { label: "Yes", value: "yes" },
            { label: "No", value: "no" },
          ]}
        />
        <FormControl>
          <FormLabel htmlFor="prev-employment-date">If yes, when?</FormLabel>

          <TextField id="prev-employment-date" type="date" />
        </FormControl>
        <FormRadioInput
          id="is-convicted-felon"
          label="Have you ever been convicted of a felony?"
          radiocontrols={[
            { label: "Yes", value: "yes" },
            { label: "No", value: "no" },
          ]}
        />
        <FormTextInput id="felony-explanation" label="If yes, explain:" />
      </fieldset>
    </fieldset>
  );
};

export default ApplicantInfo;
