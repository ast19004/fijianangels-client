import { useState } from "react";
import { Box } from "@mui/material";
import FormTextInput from "../Inputs/FormTextInput";
import { useUpdatedFormData } from "../../util/formdata";

const ReferenceGroup = (props) => {
  const [reference, setReference] = useState({});

  const handleInputChange = (name, value) => {
    setReference((prevReferenceInfo) => ({
      ...prevReferenceInfo,
      [name]: value,
    }));
  };
  useUpdatedFormData(`ref#${props.num}`, reference, props.onChange);

  return (
    <Box component="fieldset">
      <legend>Reference #{props.num}</legend>
      <FormTextInput
        id={`ref${props.num}-full-name`}
        label="Full Name"
        onChange={handleInputChange}
      />

      <FormTextInput
        id={`ref${props.num}-relationship`}
        label="Relationship:"
        onChange={handleInputChange}
      />

      <FormTextInput
        id={`ref${props.num}-company`}
        label="Company:"
        onChange={handleInputChange}
      />

      <FormTextInput
        id={`ref${props.num}-address`}
        label="Address:"
        onChange={handleInputChange}
      />

      <FormTextInput
        id={`ref${props.num}-phone`}
        label="Phone:"
        onChange={handleInputChange}
      />
    </Box>
  );
};

export default ReferenceGroup;
