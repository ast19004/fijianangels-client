import {
  FormLabel,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";

const FormRadioInput = (props) => {
  const controls = props.radiocontrols || [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ];
  return (
    <FormControl>
      <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
      <RadioGroup id={props.id}>
        {controls.map((control) => (
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
