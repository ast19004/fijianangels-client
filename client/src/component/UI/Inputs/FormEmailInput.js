import FormInput from "./FormInput";

const FormEmailInput = (props) => {
  return (
    <FormInput
      id={props.id}
      name={props.name || props.id}
      htmlFor={props.id}
      label={props.label}
      type="email"
      onChange={props.onChange || (() => {})}
      required={true}
    />
  );
};

export default FormEmailInput;
