import { Box } from "@mui/material";
import { useState } from "react";
import ReferenceGroup from "../InputGroups/ReferenceGroup";
import CustomFieldset from "./styles/CustomFieldset";
// import { useUpdateFormData, updateInput } from "../../../util/formdata";

const ReferencesInfo = (props) => {
  const [references, setReferences] = useState({});

  // const handleInputChange = (name, value) => {
  //   updateInput(name, value, setReferences);
  // };
  // useUpdatedFormData("references", references, props.onChange);

  return (
    <CustomFieldset>
      <legend>References:</legend>
      <p>Please list three professional references.</p>
      {["1", "2", "3"].map((num) => (
        <ReferenceGroup num={num} key={num} />
      ))}
    </CustomFieldset>
  );
};

export default ReferencesInfo;
