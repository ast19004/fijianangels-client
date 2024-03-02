import {
  FormLabel,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";

const FormRadioInput = (props) => {
  return (
    <FormControl>
      <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
      <RadioGroup id={props.id}>
        {props.radiocontrols.map((control) => (
          <FormControlLabel
            value={control.value}
            control={<Radio />}
            label={control.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default FormRadioInput;
