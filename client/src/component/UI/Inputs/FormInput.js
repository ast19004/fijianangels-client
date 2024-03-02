import { TextField, FormLabel, FormControl } from "@mui/material";

const FormInput = (props) => {
  return (
    <FormControl>
      <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
      <TextField id={props.id} type={props.type} />
    </FormControl>
  );
};

export default FormInput;
