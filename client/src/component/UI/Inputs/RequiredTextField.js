import CustomTextField from "./CustomTextField";

const RequiredTextField = (props) => {
  return (
    <CustomTextField
      helperText={props.helperText}
      id={props.id}
      label={props.label}
      variant={props.variant}
      name={props.name || props.id}
      type={props.type}
      value={props.value}
      onChange={props.onChange}
      inputProps={{ required: true, ...props.inputProps }}
    />
  );
};

export default RequiredTextField;
