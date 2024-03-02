import FormInput from "./FormInput";

const FormPhoneInput = (props) => {
  return (
    <FormInput
      id={props.id}
      htmlFor={props.id}
      label={props.label}
      type="tel"
    />
  );
};

export default FormPhoneInput;
