import { TextField, FormLabel, FormControl } from "@mui/material";
import FormTextInput from "../Inputs/FormTextInput";

const MilitaryServiceInfo = (props) => {
  return (
    <fieldset>
      <legend>Military Service</legend>
      <FormTextInput id="branch" text="Branch" />

      <FormControl>
        <FormLabel htmlFor="duration">Dates:</FormLabel>
        <TextField id="start-date" type="date" /> to
        <TextField id="end-date" type="date" />
      </FormControl>
      <FormTextInput id="rank" label="Rank at Discharge" />
      <FormTextInput id="discharge-type" label="Type of Discharge:" />
      <FormTextInput
        id="discharge-explanation"
        label="If other than honorable, explain:"
      />
    </fieldset>
  );
};

export default MilitaryServiceInfo;
