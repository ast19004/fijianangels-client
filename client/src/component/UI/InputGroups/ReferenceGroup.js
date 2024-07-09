import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import FormTextInput from "../Inputs/FormTextInput";
import { useUpdateFormData, updateInput } from "../../../util/formdata";

const ReferenceGroup = (props) => {
  const [reference, setReference] = useState(props.reference);

  const handleInputChange = (name, value) => {
    updateInput(name, value, setReference);
  };

  //Any reference group data passed over from parent component
  //is used to set values initially for reference group inputs
  useEffect(() => {
    setReference(props.reference);
  }, []);

  useUpdateFormData(`${props.refName}`, reference, props.onChange);

  return (
    <Box component="fieldset">
      <legend>{props.label}</legend>
      <FormTextInput
        id={`${props.refName}_full_name`}
        label="Full Name"
        value={reference[`${props.refName}_full_name`]}
        onChange={handleInputChange}
      />

      <FormTextInput
        id={`${props.refName}_relationship`}
        label="Relationship:"
        value={reference[`${props.refName}_relationship`]}
        onChange={handleInputChange}
      />

      <FormTextInput
        id={`${props.refName}_company`}
        label="Company:"
        value={reference[`${props.refName}_company`]}
        onChange={handleInputChange}
      />

      <FormTextInput
        id={`${props.refName}_address`}
        label="Address:"
        value={reference[`${props.refName}_address`]}
        onChange={handleInputChange}
      />

      <FormTextInput
        id={`${props.refName}_phone`}
        label="Phone:"
        onChange={handleInputChange}
      />
    </Box>
  );
};

export default ReferenceGroup;
