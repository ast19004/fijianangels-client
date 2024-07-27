import { useEffect, useState } from "react";
import FormInput from "./FormInput";
import { useUpdateFormData } from "../../../util/formdata";
import { FormHelperText } from "@mui/material";

const FormTextareaInput = (props) => {
  const exampleText =
    props.exampleText || "My experience with this caregiver was...";

  const { inputProps = {} } = props; // Default to an empty object if inputProps is undefined
  const { required = false } = inputProps; // Default to false if required is undefined

  const [inputValue, setInputValue] = useState(exampleText);

  //Any name data passed over from parent component
  //is used to set values initially for fullName inputs
  useEffect(() => {
    setInputValue(props.value);
  }, []);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  useUpdateFormData(props.name, inputValue, props.onChange);

  return (
    <FormInput id={props.id} label={props.label} inputProps={props.inputProps}>
      <textarea
        id={props.id}
        name={props.name || props.id}
        rows={props.rows || "5"}
        cols={props.col || "33"}
        value={inputValue}
        onChange={handleInputChange}
        onBlur={props.onBlur}
        required={required}
      />
      <FormHelperText>{props.helperText}</FormHelperText>
    </FormInput>
  );
};

export default FormTextareaInput;
