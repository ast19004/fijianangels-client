import { Box } from "@mui/material";

import FormTextInput from "../Inputs/FormTextInput";
import FormNumInput from "../Inputs/FormNumInput";

const Address = (props) => {
  return (
    <Box component="fieldset" id={props.id} sx={props.sx}>
      <legend>Address:</legend>
      <FormTextInput id="street" label="Street Address" />
      <FormNumInput id="unit/apt-number" label="Apartment/Unit #" />
      <FormTextInput id="city" label="City" />
      <FormTextInput id="state" label="State" />
      <FormNumInput id="zipcode" label="ZIP Code" />
    </Box>
  );
};

export default Address;
