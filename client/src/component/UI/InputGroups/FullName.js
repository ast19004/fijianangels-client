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
  const middle = props.abr ? props.abr + "_middle_name" : "middle_name";
  const last = props.abr ? props.abr + "_last_name" : "last_name";

  //As input values change save them in nameData state
  const handleChange = (name, value) => {
    updateInput(name, value, setNameData);
  };
  //Send input value changes to parent component
  // to be saved in a state for this input group
  useUpdateFormData(props.name || "fullName", nameData, props.onChange);

  return (
    <CustomFieldset id={props.id} resetStyles={props.resetStyles}>
      <legend>{legend}</legend>
      <FormTextInput
        id={first}
        name={first}
        label="First:"
        onChange={handleChange}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        helperText={props.helperText.firstName || ""}
        value={
          props.abr ? nameData[`${props.abr}_first_name`] : nameData.first_name
        }
      />
      <FormTextInput
        id={middle}
        name={middle}
        label="M.I."
        onChange={handleChange}
        onFocus={props.onFocus}
        // onBlur={props.onBlur}
        // helperText={props.helperText.middleName || ""}
        value={
          props.abr
            ? nameData[`${props.abr}_middle_name`]
            : nameData.middle_name
        }
      />
      <FormTextInput
        id={last}
        name={last}
        label="Last:"
        onChange={handleChange}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        helperText={props.helperText ? props.helperText.lastName : ""}
        value={
          props.abr ? nameData[`${props.abr}_last_name`] : nameData.last_name
        }
      />
    </CustomFieldset>
  );
};

export default FullName;
