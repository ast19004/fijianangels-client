import FormInput from "./FormInput";

const FormEmailInput = (props) => {
  return (
    <FormInput
      id={props.id}
      name={props.name || props.id}
      htmlFor={props.id}
      label={props.label}
      type="email"
      value={props.value}
      onChange={props.onChange || (() => {})}
      required
      inputProps={props.inputProps}
    />
  );
};

export default FormEmailInput;
