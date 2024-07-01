import { useState, useEffect } from "react";
import { Box } from "@mui/material";

import FormTextInput from "../Inputs/FormTextInput";
import FormNumInput from "../Inputs/FormNumInput";
import { updateInput, useUpdateFormData } from "../../../util/formdata";

const Address = (props) => {
  const [address, setAddress] = useState(props.address);

  //Any address data passed over from parent component
  //is used to set values initially for address inputs
  useEffect(() => {
    setAddress(props.address);
  }, []);

  //As input values change save them in address state
  const handleInputChange = (name, value) => {
    updateInput(name, value, setAddress);
  };

  //Send input value changes to parent component
  // to be saved in a state for this input group
  useUpdateFormData(
    props.abr ? `${props.abr}_address` : "address",
    address,
    props.onChange
  );
  return (
    <Box component="fieldset" id={props.id} sx={props.sx}>
      <legend>Address:</legend>
      <FormTextInput
        id={props.abr ? `${props.abr}_street` : "street"}
        label="Street Address"
        value={address.street}
        onChange={handleInputChange}
      />
      <FormTextInput
        id={props.abr ? `${props.abr}_unit_apt` : "unit_apt"}
        label="Apartment/Unit #"
        value={address["unit_apt"]}
        onChange={handleInputChange}
      />
      <FormTextInput
        id={props.abr ? `${props.abr}_city` : "city"}
        label="City"
        onChange={handleInputChange}
        value={address.city}
      />
      <FormTextInput
        id={props.abr ? `${props.abr}_state` : "state"}
        label="State"
        onChange={handleInputChange}
        value={address.state}
      />
      <FormNumInput
        id={props.abr ? `${props.abr}_zipcode` : "zipcode"}
        label="ZIP Code"
        onChange={handleInputChange}
        value={address.zipcode}
      />
    </Box>
  );
};

export default Address;
