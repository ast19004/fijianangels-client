import { Box } from "@mui/material";

import FormTextInput from "../Inputs/FormTextInput";
import FormNumInput from "../Inputs/FormNumInput";
import { useEffect, useState } from "react";

const Address = (props) => {
  const [address, setAddress] = useState({});

  const handleInputChange = (name, value) => {
    setAddress((prevAddress) => ({ ...prevAddress, [name]: value }));
  };

  useEffect(() => {
    if (!props.onChange) {
      return;
    }
    props.onChange("address", address);
  }, [address]);

  useEffect(() => {
    if (!props.onChange) {
      return;
    }
    props.onChange("address", address);
  }, [address]);

  return (
    <Box component="fieldset" id={props.id} sx={props.sx}>
      <legend>Address:</legend>
      <FormTextInput
        id="street"
        label="Street Address"
        value={address.street}
        onChange={handleInputChange}
      />
      <FormTextInput
        id="unit/apt-number"
        label="Apartment/Unit #"
        value={address["unit/apt-number"]}
        onChange={handleInputChange}
      />
      <FormTextInput
        id="city"
        label="City"
        value={address.city}
        onChange={handleInputChange}
      />
      <FormTextInput
        id="state"
        label="State"
        value={address.state}
        onChange={handleInputChange}
      />
      <FormNumInput
        id="zipcode"
        label="ZIP Code"
        value={address.zipcode}
        onChange={handleInputChange}
      />
    </Box>
  );
};

export default Address;
