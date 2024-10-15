import { useState, useEffect } from "react";

import CustomFieldset from "../Fieldsets/styles/CustomFieldset";

import FormTextInput from "../Inputs/FormTextInput";
import FormNumInput from "../Inputs/FormNumInput";
import { updateInput, useUpdateFormData } from "../../../util/formdata";

const Address = (props) => {
  const [address, setAddress] = useState(props.address);
  const abbreviation = props.abr;

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
    abbreviation ? `${abbreviation}_address` : "address",
    address,
    props.onChange
  );

  return (
    <CustomFieldset id={props.id}>
      {props.legend && <legend>Address</legend>}
      <FormTextInput
        id={abbreviation ? `${abbreviation}_street` : "street"}
        label="Street Address"
        value={
          abbreviation ? address[`${abbreviation}_street`] : address.street
        }
        onChange={handleInputChange}
      />
      <FormTextInput
        id={abbreviation ? `${abbreviation}_unit_apt` : "unit_apt"}
        label="Apartment/Unit #"
        value={
          abbreviation
            ? address[`${abbreviation}_unit_apt`]
            : address["unit_apt"]
        }
        onChange={handleInputChange}
      />
      <FormTextInput
        id={abbreviation ? `${abbreviation}_city` : "city"}
        label="City"
        onChange={handleInputChange}
        value={abbreviation ? address[`${abbreviation}_city`] : address.city}
      />
      <FormTextInput
        id={abbreviation ? `${abbreviation}_state` : "state"}
        label="State"
        onChange={handleInputChange}
        value={abbreviation ? address[`${abbreviation}_state`] : address.state}
      />
      <FormNumInput
        id={abbreviation ? `${abbreviation}_zipcode` : "zipcode"}
        label="ZIP Code"
        onChange={handleInputChange}
        value={
          abbreviation ? address[`${abbreviation}_zipcode`] : address.zipcode
        }
      />
    </CustomFieldset>
  );
};

export default Address;
