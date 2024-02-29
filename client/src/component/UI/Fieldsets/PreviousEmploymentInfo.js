import {
  TextField,
  FormLabel,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";

const PreviousEmploymentInfo = (props) => {
  return (
    <fieldset>
      <legend>Previous Employment</legend>
      <FormControl>
        <FormLabel htmlFor="company1-name">Company</FormLabel>

        <TextField id="company1-name" type="text" />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="company1-phone">Company:</FormLabel>

        <TextField id="company1-phone" type="tel" />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="company1-address">Address:</FormLabel>

        <TextField id="company1-address" type="text" />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="company1-supervisor">Supervisor:</FormLabel>

        <TextField id="company1-supervisor" type="text" />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="company1-job-title">Job Title:</FormLabel>

        <TextField id="company1-job-title" type="text" />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="company1-start-salary">Starting Salary:</FormLabel>

        <TextField id="company1-start-salary" type="text" />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="company1-end-salary">Ending Salary:</FormLabel>

        <TextField id="company1-end-salary" type="text" />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="company1-responsibilities">
          Responsibilities:
        </FormLabel>

        <TextField id="company1-responsibilities" type="text" />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="company1-duration">Dates:</FormLabel>
        <TextField id="company1-start-date" type="date" /> to
        <TextField id="company1-end-date" type="date" />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="company1-leaving-reason">
          Reason for Leaving
        </FormLabel>
        <TextField id="company1-leaving-reason" type="text" />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="company1-reference">
          May we contact your previous supervisor for a reference?
        </FormLabel>
        <RadioGroup id="company1-reference">
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>
    </fieldset>
  );
};

export default PreviousEmploymentInfo;
