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
      onChange={props.onChange || (() => {})}
      errors={props.errors}
      inputProps={props.inputProps}
    />
  );
};

export default FormDateInput;