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

  useUpdateFormData(`ref${props.num}`, reference, props.onChange);

  return (
    <Box component="fieldset">
      <legend>Reference #{props.num}</legend>
      <FormTextInput
        id={`ref${props.num}_full_name`}
        label="Full Name"
        value={reference[`ref${props.num}_full_name`]}
        onChange={handleInputChange}
      />

      <FormTextInput
        id={`ref${props.num}_relationship`}
        label="Relationship:"
        value={reference[`ref${props.num}_relationship`]}
        onChange={handleInputChange}
      />

      <FormTextInput
        id={`ref${props.num}_company`}
        label="Company:"
        value={reference[`ref${props.num}_company`]}
        onChange={handleInputChange}
      />

      <FormTextInput
        id={`ref${props.num}_address`}
        label="Address:"
        value={reference[`ref${props.num}_address`]}
        onChange={handleInputChange}
      />

      <FormTextInput
        id={`ref${props.num}_phone`}
        label="Phone:"
        onChange={handleInputChange}
      />
    </Box>
  );
};

export default ReferenceGroup;
