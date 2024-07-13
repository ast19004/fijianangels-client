import FormInput from "./FormInput";

const FormDateInput = (props) => {
  return (
    <FormInput
      id={props.id}
      name={props.name || props.id}
      htmlFor={props.id}
      label={props.label}
      type="date"
      value={props.value}
      helperText={props.helperText}
      onChange={props.onChange}
      onBlur={props.onBlur}
      errors={props.errors}
      inputProps={props.inputProps}
    />
  );
};

export default FormDateInput;
