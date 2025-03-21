import { FormLabel, FormControl } from "@mui/material";
import { useEffect, useState } from "react";

import CustomTextField from "../Inputs/CustomTextField";

const FormInput = (props) => {
  const [inputValue, setInputValue] = useState(props.value || "");

  const handleInputChange = (event) => {
    props.type === "file"
      ? setInputValue(event.target.files[0])
      : setInputValue(event.target.value);
  };
  useEffect(() => {
    if (!props.onChange) {
      return;
    }
    props.type === "file"
      ? props.onChange(inputValue)
      : props.onChange(props.name, inputValue);
  }, [inputValue, props.type]);

  return (
    <FormControl
      className={props.className}
      sx={{ margin: "1rem", backgroundColor: "white" }}
    >
      <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
      {props.children || (
        <CustomTextField
          helperText={props.helperText}
          placeholder={ props.placeholder}
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
