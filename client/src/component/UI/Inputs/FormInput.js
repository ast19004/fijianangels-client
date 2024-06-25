import { FormLabel, FormControl } from "@mui/material";
import { useEffect, useState } from "react";

import CustomTextField from "../Inputs/CustomTextField";

const FormInput = (props) => {
  const [inputValue, setInputValue] = useState("");
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
    <FormControl sx={{ margin: "1rem", backgroundColor: "white" }}>
      <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
      {props.children || (
        <CustomTextField
          helperText="Some important text"
          id={props.id}
          name={props.name || props.id}
          type={props.type}
          value={props.value}
          onChange={handleInputChange}
          inputProps={props.inputProps}
        />
      )}
    </FormControl>
  );
};

export default FormInput;
