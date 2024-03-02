import FormInput from "./FormInput";

const FormTextInput = (props) => {
  return (
    <FormInput
      id={props.id}
      htmlFor={props.id}
      label={props.label}
      type="text"
    />
  );
};

export default FormTextInput;
