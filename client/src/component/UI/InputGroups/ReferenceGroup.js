import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import FormTextInput from "../Inputs/FormTextInput";

const ReferenceGroup = (props) => {
  const [reference, setReference] = useState({});

  const handleInputChange = (name, value) => {
    setReference((prevReferenceInfo) => ({
      ...prevReferenceInfo,
      [name]: value,
    }));
  };
  useEffect(() => {
    if (!props.onChange) {
      return;
    }
    props.onChange(`ref#${props.num}`, reference);
  }, [reference]);

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
