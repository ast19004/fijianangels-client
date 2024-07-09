import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { isEmpty, trim } from "validator";

import { updateInput, useUpdateFormData } from "../../../util/formdata";
import FormTextInput from "../Inputs/FormTextInput";
import CustomFieldset from "../Fieldsets/styles/CustomFieldset";

const FullName = (props) => {
  const legend = props.legend || "Full Name:";
  const [nameData, setNameData] = useState(props.fullName);
  const [errors, setErrors] = useState(null);

  //Any name data passed over from parent component
  //is used to set values initially for fullName inputs
  useEffect(() => {
    setNameData(props.fullName);
  }, []);

  const first = props.abr ? props.abr + "_first_name" : "first_name";
  const middle = props.abr ? props.abr + "_middle_name" : "middle_name";
  const last = props.abr ? props.abr + "_last_name" : "last_name";

  const handleValidation = (name, value) => {
    if (
      name === props.abr
        ? props.abr + "_first_name"
        : "first_name" || props.abr
        ? props.abr + "_last_name"
        : "last_name"
    ) {
      const trimmedValue = trim(value);
      if (isEmpty(trimmedValue)) {
        !errors
          ? setErrors(["Cannot be empty"])
          : setErrors((prevErrors) => [...prevErrors, "Cannot be empty"]);
      } else {
        setErrors(null);
      }
    }
  };

  //As input values change save them in nameData state
  const handleChange = (name, value) => {
    // validate(name, value);
    errors && props.errors(errors);
    !errors && name && updateInput(name, value, setNameData);
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
        onValidate={handleValidation}
        value={
          props.abr ? nameData[`${props.abr}_first_name`] : nameData.first_name
        }
      />
      <FormTextInput
        id={middle}
        name={middle}
        label="M.I."
        onChange={handleChange}
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
        value={
          props.abr ? nameData[`${props.abr}_last_name`] : nameData.last_name
        }
      />
    </CustomFieldset>
  );
};

export default FullName;
