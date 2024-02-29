import {
  TextField,
  Radio,
  FormLabel,
  FormControl,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";

const ApplicantInfo = (props) => {
  return (
    <fieldset>
      <legend>Applicant Information</legend>
      <fieldset>
        <legend>Full Name:</legend>
        <FormControl>
          <FormLabel htmlFor="first-name">First: </FormLabel>
          <TextField id="first-name" type="text" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="middle-initial">M.I. </FormLabel>
          <TextField id="middle-initial" type="text" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="last-name">Last: </FormLabel>
          <TextField id="last-name" type="text" />
        </FormControl>
      </fieldset>
      <fieldset>
        <legend>Address:</legend>
        <FormControl>
          <FormLabel htmlFor="street">Street Address</FormLabel>
          <TextField id="street" type="text" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="unit/apt-number">Apartment/Unit #</FormLabel>
          <TextField id="unit/apt-number" type="number" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="city">City</FormLabel>
          <TextField id="city" type="text" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="state">State</FormLabel>
          <TextField id="state" type="text" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="zipcode">ZIP Code</FormLabel>
          <TextField id="zipcode" type="number" />
        </FormControl>
      </fieldset>
      <fieldset>
        <legend>Contact</legend>
        <FormControl>
          <FormLabel htmlFor="phone">Phone</FormLabel>
          <TextField id="phone" type="number" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="email">ZIP Code</FormLabel>
          <TextField id="email" type="email" />
        </FormControl>
      </fieldset>
      <fieldset>
        <legend>Employment Details:</legend>
        <FormControl>
          <FormLabel htmlFor="ssn">Social Security Number:</FormLabel>
          <TextField id="ssn" type="number" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="position">Position Applied For:</FormLabel>
          <TextField id="position" type="text" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="availablitiy">Date Available:</FormLabel>
          <TextField id="availability" type="date" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="salary">Desired Salary:</FormLabel>
          <TextField id="salary" type="text" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="is-us-citizen">
            Are you a citizen of the United States?:
          </FormLabel>
          <RadioGroup id="is-us-citizen">
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="is-authorized">
            If no, are you authorized to work in the U.S.?:
          </FormLabel>
          <RadioGroup id="is-authorized">
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="is-previous-employee">
            Have you ever worked for this company?:
          </FormLabel>
          <RadioGroup id="is-previous-employee">
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="prev-employment-date">If yes, when?</FormLabel>

          <TextField id="prev-employment-date" type="date" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="is-us-citizen">
            Are you a citizen of the United States?:
          </FormLabel>
          <RadioGroup id="is-us-citizen">
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="is-covicted-felon">
            Have you ever been convicted of a felony?
          </FormLabel>
          <RadioGroup id="is-covicted-felon">
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="felony-explanation">If yes, explain:</FormLabel>

          <TextField id="felony-explanation" type="text" />
        </FormControl>
      </fieldset>
    </fieldset>
  );
};

export default ApplicantInfo;
