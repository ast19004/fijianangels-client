import { TextField, FormLabel, FormControl, Box } from "@mui/material";
import FormTextInput from "../Inputs/FormTextInput";
import { useEffect, useState } from "react";

const MilitaryServiceInfo = (props) => {
  const [service, setService] = useState({});

  const handleInputChange = (name, value) => {
    setService((prevServiceInfo) => ({ ...prevServiceInfo, [name]: value }));
  };

  useEffect(() => {
    if (!props.onChange) {
      return;
    }
    props.onChange("military", service);
  }, [service]);
  return (
    <Box component="fieldset">
      <legend>Military Service</legend>
      <FormTextInput id="branch" label="Branch" onChange={handleInputChange} />

      <FormControl>
        <FormLabel htmlFor="duration">Dates:</FormLabel>
        <TextField
          id="start-date"
          type="date"
          onChange={handleInputChange}
        />{" "}
        to
        <TextField id="end-date" type="date" onChange={handleInputChange} />
      </FormControl>
      <FormTextInput
        id="rank"
        label="Rank at Discharge"
        onChange={handleInputChange}
      />
      <FormTextInput
        id="discharge-type"
        label="Type of Discharge:"
        onChange={handleInputChange}
      />
      <FormTextInput
        id="discharge-explanation"
        label="If other than honorable, explain:"
        onChange={handleInputChange}
      />
    </Box>
  );
};

export default MilitaryServiceInfo;
