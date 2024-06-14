import { TextField, FormLabel, FormControl, Box } from "@mui/material";
import FormTextInput from "../Inputs/FormTextInput";
import { useState } from "react";
import CustomFieldset from "./styles/CustomFieldset";
// import { useUpdatedFormData, updateInput } from "../../../util/formdata";

const MilitaryServiceInfo = (props) => {
  const [service, setService] = useState({});

  // const handleInputChange = (name, value) => {
  //   updateInput(name, value, setService);
  // };
  // useUpdatedFormData("military", service, props.onChange);

  return (
    <CustomFieldset>
      <legend>Military Service</legend>
      <FormTextInput id="branch" label="Branch" />

      <FormControl>
        <FormLabel htmlFor="duration">Dates:</FormLabel>
        <TextField id="start-date" type="date" /> to
        <TextField id="end-date" type="date" />
      </FormControl>
      <FormTextInput id="rank" label="Rank at Discharge" />
      <FormTextInput id="discharge-type" label="Type of Discharge:" />
      <FormTextInput
        id="discharge-explanation"
        label="If other than honorable, explain:"
      />
    </CustomFieldset>
  );
};

export default MilitaryServiceInfo;
