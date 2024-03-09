import FormInput from "./FormInput";

const FormTextareaInput = (props) => {
  const exampleText =
    props.exampletext || "My experience with this caregiver was...";
  return (
    <FormInput id={props.id} label={props.label}>
      <textarea
        id={props.id}
        name={props.id}
        rows={props.rows || "5"}
        cols={props.col || "33"}
      >
        {exampleText}
      </textarea>
    </FormInput>
  );
};

export default FormTextareaInput;
