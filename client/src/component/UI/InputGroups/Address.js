import { useState } from "react";
import { Box } from "@mui/material";

import FormTextInput from "../Inputs/FormTextInput";
import FormNumInput from "../Inputs/FormNumInput";
// import { useUpdatedFormData, updateInput } from "../../../util/formdata";

const Address = (props) => {
  const [address, setAddress] = useState({});

  // const handleInputChange = (name, value) => {
  //   updateInput(name, value, setAddress);
  // };
  // useUpdatedFormData("address", address, props.onChange);

  return (
    <Box component="fieldset" id={props.id} sx={props.sx}>
      <legend>Address:</legend>
      <FormTextInput
        id="street"
        label="Street Address"
        // value={address.street}
      />
      <FormTextInput
        id="unit_apt"
        label="Apartment/Unit #"
        // value={address["unit/apt-number"]}
      />
      <FormTextInput id="city" label="City" />
      {/* value={address.city} */}
      <FormTextInput id="state" label="State" />
      {/* value={address.state} */}
      <FormNumInput id="zipcode" label="ZIP Code" />
      {/* value={address.zipcode} */}
    </Box>
  );
};

export default Address;
