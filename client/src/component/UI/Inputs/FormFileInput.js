import FormInput from "./FormInput";

const FormFileInput = (props) => {
  // TODO: Add labelSpan prop to add file requirements i.e. :
  // (accepted file formats: .doc, .docx, .pdf | max: 10mb)
  return (
    <FormInput
      helperText={props.helperText}
      id="resume_file"
      name="resume_file"
      label={props.label}
      type="file"
      value={props.value}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      onChange={props.onChange}
      inputProps={props.inputProps}
    />
  );
};

export default FormFileInput;
