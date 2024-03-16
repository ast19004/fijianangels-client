import { Box } from "@mui/material";
import { useState } from "react";
import ReferenceGroup from "../InputGroups/ReferenceGroup";
import { useUpdatedFormData, updateInput } from "../../../util/formdata";

const ReferencesInfo = (props) => {
  const [references, setReferences] = useState({});

  const handleInputChange = (name, value) => {
    updateInput(name, value, setReferences);
  };
  useUpdatedFormData("references", references, props.onChange);

  return (
    <Box component="fieldset">
      <legend>References:</legend>
      <p>Please list three professional references.</p>
      {["1", "2", "3"].map((num) => (
        <ReferenceGroup num={num} onChange={handleInputChange} key={num} />
      ))}
    </Box>
  );
};

export default ReferencesInfo;
