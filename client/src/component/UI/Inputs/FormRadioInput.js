import {
  FormLabel,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useUpdateFormData } from "../../../util/formdata";

const FormRadioInput = (props) => {
  //If no controls are provided a basic "Yes" or "No" radio selection is given
  const controls = props.radiocontrols || [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ];
  const [radioValue, setRadioValue] = useState(props.value);

  //Any radio value passed over from parent component
  //is used to set value initially for radio inputs
  //and as the parent changes
  useEffect(() => {
    props.value && setRadioValue(props.value);
  }, [props.value]);

  //As input values change save them in radio value state
  const handleInputChange = (event) => {
    setRadioValue(event.target.value);
  };

  //Send input value changes to parent component
  // to be saved in a state for this input group
  // Make sure input name matches context
  useUpdateFormData(props.id, radioValue, props.onChange);

  return (
    <FormControl>
      <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
      <RadioGroup
        id={props.id}
        name={props.name || props.id}
        onChange={handleInputChange}
        value={radioValue || {}}
      >
        {controls.map((control) => (
          <FormControlLabel
            key={control.value}
            value={control.value}
            control={<Radio required />}
            label={control.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default FormRadioInput;
