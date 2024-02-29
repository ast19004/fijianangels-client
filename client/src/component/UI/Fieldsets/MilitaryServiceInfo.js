import { TextField, FormLabel, FormControl } from "@mui/material";

const MilitaryServiceInfo = (props) => {
  return (
    <fieldset>
      <legend>Military Service</legend>
      <FormControl>
        <FormLabel htmlFor="branch">Branch</FormLabel>

        <TextField id="branch" type="text" />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="duration">Dates:</FormLabel>
        <TextField id="start-date" type="date" /> to
        <TextField id="end-date" type="date" />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="rank">Rank at Discharge</FormLabel>

        <TextField id="rank" type="text" />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="discharge-type">Type of Discharge:</FormLabel>

        <TextField id="discharge-type" type="text" />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="discharge-explanation">
          If other than honorable, explain:
        </FormLabel>

        <TextField id="discharge-explanation" type="text" />
      </FormControl>
    </fieldset>
  );
};

export default MilitaryServiceInfo;
