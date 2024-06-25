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
      onChange={props.onChange || (() => {})}
      inputProps={props.inputProps}
    />
  );
};

export default FormTextInput;
