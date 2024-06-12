import FormInput from "./FormInput";

const FormTextInput = (props) => {
  return (
    <FormInput
      id={props.id}
      name={props.name || props.id}
      htmlFor={props.id}
      label={props.label}
      onChange={props.onChange || (() => {})}
      type="text"
      value={props.value}
    />
  );
};

export default FormTextInput;
