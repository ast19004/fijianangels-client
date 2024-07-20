import { FormLabel, FormControl } from "@mui/material";
import { useEffect, useState } from "react";

import CustomTextField from "../Inputs/CustomTextField";

const FormInput = (props) => {
  const [inputValue, setInputValue] = useState(props.value || "");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  useEffect(() => {
    if (!props.onChange) {
      return;
    }
    props.onChange(props.name, inputValue);
  }, [inputValue]);

  return (
    <FormControl
      className={props.className}
      sx={{ margin: "1rem", backgroundColor: "white" }}
    >
      <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
      {props.children || (
        <CustomTextField
          helperText={props.helperText}
          id={props.id}
          name={props.name || props.id}
          type={props.type}
          value={props.value}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
          onChange={handleInputChange}
          inputProps={props.inputProps}
        />
      )}
    </FormControl>
  );
};

export default FormInput;
