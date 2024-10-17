import { useEffect, useState } from "react";

import { updateInput, useUpdateFormData } from "../../../util/formdata";
import FormTextInput from "../Inputs/FormTextInput";
import CustomFieldset from "../Fieldsets/styles/CustomFieldset";

const FullName = (props) => {
  const legend = props.legend || "Full Name:";
  const [nameData, setNameData] = useState(props.fullName);

  //Any name data passed over from parent component
  //is used to set values initially for fullName inputs
  useEffect(() => {
    setNameData(props.fullName);
  }, []);

  const first = props.abr ? props.abr + "_first_name" : "first_name";
  const last = props.abr ? props.abr + "_last_name" : "last_name";

  //As input values change save them in nameData state
  const handleChange = (inputName, inputValue) => {
    updateInput(inputName, inputValue, setNameData);
  };
  //Send input value changes to parent component
  // to be saved in a state for this input group
  useUpdateFormData(props.name || "fullName", nameData, props.onChange);

  return (
    <CustomFieldset id={props.id} resetStyles={props.resetStyles}>
      {props.legend && <legend>{legend}</legend>}
      <FormTextInput
        id={first}
        name={first}
        label="FIRST NAME:"
        onChange={handleChange}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        helperText={props.helperText && props.helperText.first_name}
        value={
          props.abr ? nameData[`${props.abr}_first_name`] : nameData.first_name
        }
        inputProps={{ required: true }}
      />
      <FormTextInput
        id={last}
        name={last}
        label="LAST NAME:"
        onChange={handleChange}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        helperText={props.helperText && props.helperText.last_name}
        value={
          props.abr ? nameData[`${props.abr}_last_name`] : nameData.last_name
        }
        inputProps={{ required: true }}
      />
    </CustomFieldset>
  );
};

export default FullName;
