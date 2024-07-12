import { TextField } from "@mui/material";
import React from "react";

const CustomTextField = (props) => {
  return (
    <TextField
      helperText={props.helperText}
      id={props.id}
      label={props.label}
      variant={props.variant}
      name={props.name || props.id}
      type={props.type}
      value={props.value}
      onChange={props.onChange}
      onBlur={props.onBlur}
      onFocus={props.onFocus}
      inputProps={{
        ...props.inputProps,
      }}
    />
  );
};

export default CustomTextField;
