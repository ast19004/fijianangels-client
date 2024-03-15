import { useEffect, useState } from "react";
import FormInput from "./FormInput";

const FormTextareaInput = (props) => {
  const exampleText =
    props.exampleText || "My experience with this caregiver was...";

  const [inputValue, setInputValue] = useState(exampleText);
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  useEffect(() => {
    if (!props.onChange) {
      return;
    }
    props.onChange(props.name, inputValue);
  }, [inputValue, props.onChange]);
  return (
    <FormInput id={props.id} label={props.label}>
      <textarea
        id={props.id}
        name={props.name || props.id}
        rows={props.rows || "5"}
        cols={props.col || "33"}
        value={inputValue}
        onChange={handleInputChange}
      />
    </FormInput>
  );
};

export default FormTextareaInput;
