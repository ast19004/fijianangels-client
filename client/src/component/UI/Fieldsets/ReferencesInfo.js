import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import ReferenceGroup from "../InputGroups/ReferenceGroup";

const ReferencesInfo = (props) => {
  const [references, setReferences] = useState({});

  const handleInputChange = (name, value) => {
    setReferences((prevRef) => ({ ...prevRef, [name]: value }));
  };

  useEffect(() => {
    if (!props.onChange) {
      return;
    }
    props.onChange("references", references);
  }, [references]);
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
