import FormInput from "./FormInput";

const FormFileInput = (props) => {
  // TODO: Add labelSpan prop to add file requirements i.e. :
  // (accepted file formats: .doc, .docx, .pdf | max: 10mb)
  return (
    <FormInput
      helperText={props.helperText}
      id={props.id}
      name={props.name || props.id}
      label={props.label}
      type="file"
      value={props.value}
      error={props.error}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      onChange={props.onChange}
      inputProps={{ accept: props.accept, ...props.inputProps }}
    />
  );
};

export default FormFileInput;
