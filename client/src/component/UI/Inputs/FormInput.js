import { FormLabel, FormControl } from "@mui/material";
import { useEffect, useState } from "react";

import CustomTextField from "../Inputs/CustomTextField";

const FormInput = (props) => {
  const [inputValue, setInputValue] = useState(props.value || "");
  const [errMsg, setErrMsg] = useState([""]);

  useEffect(() => {}, [inputValue]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleValidation = (event) => {
    //pass the input valid to the parent and recieve error messages if input is not valid;
    setErrMsg(props.errors ? props.errors : []);
    !errMsg && setInputValue(event.target.value);
  };
  useEffect(() => {
    if (!props.onChange) {
      return;
    }
    //TODO: check value against a validation obj that contain functions that test the value for certain criteria and corresponding errMessages should the value fail the test
    props.onChange(props.name, inputValue);
  }, [inputValue]);

  return (
    <FormControl sx={{ margin: "1rem", backgroundColor: "white" }}>
      <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
      {props.children || (
        <CustomTextField
          helperText={errMsg[0]}
          id={props.id}
          name={props.name || props.id}
          type={props.type}
          value={props.value}
          onFocus={props.onFocus}
          onChange={handleInputChange}
          onBlur={handleValidation}
          errors={props.errors}
          inputProps={props.inputProps}
        />
      )}
    </FormControl>
  );
};

export default FormInput;
