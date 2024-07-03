import { useState, useEffect } from "react";
import { TextField, Box } from "@mui/material";

import FormTextInput from "../Inputs/FormTextInput";
import FormPhoneInput from "../Inputs/FormPhoneInput";
import FormRadioInput from "../Inputs/FormRadioInput";

import Address from "../InputGroups/Address";
import { useUpdateFormData, updateInput } from "../../../util/formdata";

const EmploymentGroup = (props) => {
  const [employment, setEmployment] = useState(props.employment);

  const handleInputChange = (name, value) => {
    updateInput(name, value, setEmployment);
  };

  //Any reference group data passed over from parent component
  //is used to set values initially for reference group inputs
  useEffect(() => {
    setEmployment(props.employment);
  }, []);

  useUpdateFormData(props.num, employment, props.onChange);

  return (
    <Box component="fieldset">
      <legend>Previous Employment</legend>
      <FormTextInput
        id={`company${props.num}_name`}
        label="Company"
        value={employment[`company${props.num}_name`]}
        onChange={handleInputChange}
      />
      <FormPhoneInput
        id={`company${props.num}_phone`}
        label="Phone:"
        value={employment[`company${props.num}_phone`]}
        onChange={handleInputChange}
      />
      <Address
        id={`company${props.num}_address`}
        address={employment[`company${props.num}_address`]}
        abr={`company${props.num}`}
        onChange={handleInputChange}
      />
      <FormTextInput
        id={`company${props.num}_supervisor`}
        label="Supervisor:"
        value={employment[`company${props.num}_supervisor`]}
        onChange={handleInputChange}
      />
      <FormTextInput
        id={`company${props.num}_job_title`}
        label="Job Title:"
        value={employment[`company${props.num}_job_title`]}
        onChange={handleInputChange}
      />
      <FormTextInput
        id={`company${props.num}_end_salary`}
        label="Ending Salary:"
        value={employment[`company${props.num}_end_salary`]}
        onChange={handleInputChange}
      />
      <FormTextInput
        id={`company${props.num}_responsibilities`}
        label="Responsibilities:"
        value={employment[`company${props.num}_responsibilities`]}
        onChange={handleInputChange}
      />
      <TextField
        id={`company${props.num}_start_date`}
        type="date"
        value={employment[`company${props.num}_start_date`]}
        onChange={handleInputChange}
      />
      <TextField
        id={`company${props.num}_end_date`}
        type="date"
        value={employment[`company${props.num}_end_date`]}
        onChange={handleInputChange}
      />
      <FormTextInput
        id={`company${props.num}_leaving_reason`}
        label="Reason for Leaving:"
        value={employment[`company${props.num}_leaving_reason`]}
        onChange={handleInputChange}
      />
      <FormRadioInput
        label="May we contact your previous supervisor for a reference?"
        value={employment[`company${props.num}_can_contact `]}
        onChange={handleInputChange}
      />
    </Box>
  );
};

export default EmploymentGroup;
