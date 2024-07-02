import { TextField, FormLabel, FormControl, Box } from "@mui/material";
import FormTextInput from "../Inputs/FormTextInput";
import { useState } from "react";
// import { useUpdateFormData, updateInput } from "../../../util/formdata";

const MilitaryServiceInfo = (props) => {
  const [service, setService] = useState({});

  // const handleInputChange = (name, value) => {
  //   updateInput(name, value, setService);
  // };
  // useUpdatedFormData("military", service, props.onChange);

  return (
    <Box component="fieldset">
      <legend>Military Service</legend>
      <FormTextInput id="branch" label="Branch" />

      <FormControl>
        <FormLabel htmlFor="duration">Dates:</FormLabel>
        <TextField id="service_start" type="date" /> to
        <TextField id="service_end" type="date" />
      </FormControl>
      <FormTextInput id="rank" label="Rank at Discharge" />
      <FormTextInput id="discharge_type" label="Type of Discharge:" />
      <FormTextInput
        id="discharge_explanation"
        label="If other than honorable, explain:"
      />
    </Box>
  );
};

export default MilitaryServiceInfo;
