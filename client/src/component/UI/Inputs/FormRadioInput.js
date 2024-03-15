import {
  FormLabel,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import { useEffect, useState } from "react";

const FormRadioInput = (props) => {
  //If no controls are provided a basic "Yes" or "No" radio selection is given
  const controls = props.radiocontrols || [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ];
  const [radioValue, setRadioValue] = useState();
  const handleInputChange = (event) => {
    setRadioValue(event.target.value);
  };

  useEffect(() => {
    props.onChange(props.id, radioValue);
  }, [radioValue]);
  return (
    <FormControl>
      <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
      <RadioGroup
        id={props.id}
        name={props.name || props.id}
        onChange={handleInputChange}
      >
        {controls.map((control) => (
          <FormControlLabel
            key={control.value}
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
