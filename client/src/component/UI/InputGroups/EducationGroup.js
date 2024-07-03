import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { updateInput, useUpdateFormData } from "../../../util/formdata";
import FormTextInput from "../Inputs/FormTextInput";
import FormRadioInput from "../Inputs/FormRadioInput";
import Address from "./Address";
import FormDateInput from "../Inputs/FormDateInput";

const EducationGroup = (props) => {
  const groupName = props.abr || "";
  const [educationGroup, setEducationGroup] = useState(props.education);
  const handleInputChange = (name, value) => {
    updateInput(name, value, setEducationGroup);
  };

  //Any education group data passed over from parent component
  //is used to set values initially for education group inputs
  useEffect(() => {
    setEducationGroup(props.education);
  }, []);

  useUpdateFormData(groupName, educationGroup, props.onChange);

  return (
    <Box component="fieldset">
      <legend>{props.label}</legend>
      <FormTextInput
        id={`${groupName}_name`}
        label={props.label}
        onChange={handleInputChange}
        value={educationGroup[`${groupName}_name`]}
      />
      <Address
        id={`${groupName}_address`}
        abr={groupName}
        address={educationGroup[`${groupName}_address`]}
        onChange={handleInputChange}
      />
      <FormDateInput
        id={`${groupName}_start_date`}
        htmlFor={`${groupName}_start_date`}
        label="Start Date:"
        onChange={handleInputChange}
        value={educationGroup[`${groupName}_start_date`]}
      />
      <FormDateInput
        id={`${groupName}_end_date`}
        htmlFor={`${groupName}_end_date`}
        label="End Date:"
        onChange={handleInputChange}
        value={educationGroup[`${groupName}_end_date`]}
      />
      <FormRadioInput
        id={`is_${groupName}_graduate`}
        label="Did you graduate?"
        onChange={handleInputChange}
        value={educationGroup[`is_${groupName}_graduate`]}
      />
    </Box>
  );
};

export default EducationGroup;
