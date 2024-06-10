import FormInput from "./FormInput";

const FormPhoneInput = (props) => {
  return (
    <FormInput
      id={props.id}
      name={props.name || props.id}
      htmlFor={props.id}
      label={props.label}
      // onChange={props.onChange}
      type="tel"
    />
  );
};

export default FormPhoneInput;
