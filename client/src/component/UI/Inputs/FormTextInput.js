import FormInput from "./FormInput";

const FormTextInput = (props) => {
  return (
    <FormInput
      id={props.id}
      name={props.name || props.id}
      htmlFor={props.id}
      label={props.label}
      type="text"
      value={props.value}
      helperText={props.helperText}
      placeholder={props.placeholder}
      onChange={props.onChange || (() => {})}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      inputProps={props.inputProps}
    />
  );
};

export default FormTextInput;
