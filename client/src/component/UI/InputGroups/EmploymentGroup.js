import { useState, useEffect } from "react";
import { Box } from "@mui/material";

import FormTextInput from "../Inputs/FormTextInput";
import FormPhoneInput from "../Inputs/FormPhoneInput";
import FormRadioInput from "../Inputs/FormRadioInput";

import Address from "../InputGroups/Address";
import { useUpdateFormData, updateInput } from "../../../util/formdata";
import FormDateInput from "../Inputs/FormDateInput";

const EmploymentGroup = (props) => {
  const [employment, setEmployment] = useState(props.group);

  const handleInputChange = (name, value) => {
    updateInput(name, value, setEmployment);
  };

  //Any reference group data passed over from parent component
  //is used to set values initially for reference group inputs
  useEffect(() => {
    setEmployment(props.employment);
  }, []);

  useUpdateFormData(props.groupName, employment, props.onChange);

  return (
    <Box component="fieldset">
      <FormTextInput
        id={`${props.groupName}_name`}
        label="Company"
        value={employment[`${props.groupName}_name`]}
        onChange={handleInputChange}
      />
      <FormPhoneInput
        id={`${props.groupName}_phone`}
        label="Phone:"
        value={employment[`${props.groupName}_phone`]}
        onChange={handleInputChange}
      />
      <Address
        id={`${props.groupName}_address`}
        address={employment[`${props.groupName}_address`]}
        abr={`${props.groupName}`}
        onChange={handleInputChange}
      />
      <FormTextInput
        id={`${props.groupName}_supervisor`}
        label="Supervisor:"
        value={employment[`${props.groupName}_supervisor`]}
        onChange={handleInputChange}
      />
      <FormTextInput
        id={`${props.groupName}_job_title`}
        label="Job Title:"
        value={employment[`${props.groupName}_job_title`]}
        onChange={handleInputChange}
      />
      <FormTextInput
        id={`${props.groupName}_end_salary`}
        label="Ending Salary:"
        value={employment[`${props.groupName}_end_salary`]}
        onChange={handleInputChange}
      />
      <FormTextInput
        id={`${props.groupName}_responsibilities`}
        label="Responsibilities:"
        value={employment[`${props.groupName}_responsibilities`]}
        onChange={handleInputChange}
      />
      <FormDateInput
        id={`${props.groupName}_start_date`}
        htmlFor={`${props.groupName}_start_date`}
        label="From:"
        onChange={handleInputChange}
        value={employment[`${props.groupName}_start_date`]}
      />
      <FormDateInput
        id={`${props.groupName}_end_date`}
        htmlFor={`${props.groupName}_end_date`}
        label="To:"
        onChange={handleInputChange}
        value={employment[`${props.groupName}_end_date`]}
      />
      <FormTextInput
        id={`${props.groupName}_leaving_reason`}
        label="Reason for Leaving:"
        value={employment[`${props.groupName}_leaving_reason`]}
        onChange={handleInputChange}
      />
      <FormRadioInput
        id={`${props.groupName}_can_contact`}
        label="May we contact your previous supervisor for a reference?"
        name={`${props.groupName}_can_contact`}
        value={employment[`${props.groupName}_can_contact`]}
        onChange={handleInputChange}
      />
    </Box>
  );
};

export default EmploymentGroup;
