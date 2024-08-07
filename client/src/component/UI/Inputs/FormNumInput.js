import FormInput from "./FormInput";

const FormPhoneInput = (props) => {
  return (
    <FormInput
      id={props.id}
      name={props.name || props.id}
      htmlFor={props.id}
      label={props.label}
      onChange={props.onChange || (() => {})}
      onBlur={props.onBlur}
      type="num"
      value={props.value}
      errors={props.errors}
      inputProps={{ ...props.inputProps }}
    />
  );
};

export default FormPhoneInput;
