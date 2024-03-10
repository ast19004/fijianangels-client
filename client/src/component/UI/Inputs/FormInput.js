import { TextField, FormLabel, FormControl } from "@mui/material";

const FormInput = (props) => {
  return (
    <FormControl sx={{ margin: "1rem", backgroundColor: "white" }}>
      <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
      {props.children || <TextField id={props.id} type={props.type} />}
    </FormControl>
  );
};

export default FormInput;
