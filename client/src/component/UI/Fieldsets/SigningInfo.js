import {
  TextField,
  FormLabel,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";

const SigningInfo = (props) => {
  return (
    <fieldset>
      <legend>Disclaimer and Signature</legend>
      <p>
        I certify that my answers are true and complete to the best of my
        knowledge.
      </p>
      <p>
        If this application leads to employment, I understand that false or
        misleading information in my application or interview may result in my
        release.
      </p>
      <FormControl>
        <FormLabel htmlFor="signature">Signature</FormLabel>

        <TextField id="signature" type="text" />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="signature-date">Date</FormLabel>

        <TextField id="signature-date" type="text" />
      </FormControl>
    </fieldset>
  );
};

export default SigningInfo;
