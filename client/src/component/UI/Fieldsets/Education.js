import {
  TextField,
  Radio,
  FormLabel,
  FormControl,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";

const EducationInfo = (props) => {
  return (
    <fieldset>
      <legend>Education</legend>
      <fieldset>
        <legend>High School</legend>
        <FormControl>
          <FormLabel htmlFor="high-school-address">Address:</FormLabel>
          <TextField id="high-school-address" type="text" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="hs-attendance">Dates:</FormLabel>
          <TextField id="hs-start-date" type="date" /> to
          <TextField id="hs-end-date" type="date" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="hs-graduate">Did you graduate?</FormLabel>
          <RadioGroup id="hs-graduate">
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
      </fieldset>

      <fieldset>
        <legend>College:</legend>
        <FormControl>
          <FormLabel htmlFor="college-address">Address:</FormLabel>
          <TextField id="college-address" type="text" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="college-attendance">Dates:</FormLabel>
          <TextField id="hs-start-date" type="date" /> to
          <TextField id="hs-end-date" type="date" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="college-graduate">Did you graduate?</FormLabel>
          <RadioGroup id="college-graduate">
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="college-degree">Degree</FormLabel>
          <TextField id="college-degree" type="text" />
        </FormControl>
      </fieldset>

      <fieldset>
        <legend>Other Education:</legend>
        <FormControl>
          <FormLabel htmlFor="other-education-address">Address:</FormLabel>
          <TextField id="other-education-address" type="text" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="other-education-attendance">Dates:</FormLabel>
          <TextField id="hs-start-date" type="date" /> to
          <TextField id="hs-end-date" type="date" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="graduate">Did you graduate?</FormLabel>
          <RadioGroup id="graduate">
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="other-education-degree">Degree</FormLabel>
          <TextField id="other-education-degree" type="text" />
        </FormControl>
      </fieldset>
    </fieldset>
  );
};

export default EducationInfo;
