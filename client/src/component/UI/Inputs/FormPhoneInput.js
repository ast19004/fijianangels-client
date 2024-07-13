import FormInput from "./FormInput";

const FormPhoneInput = (props) => {
  return (
    <FormInput
      type="tel"
      id={props.id}
      name={props.name || props.id}
      htmlFor={props.id}
      helperText={props.helperText}
      label={props.label}
      value={props.value}
      onChange={props.onChange || (() => {})}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      inputProps={props.inputProps}
    />
  );
};

export default FormPhoneInput;
