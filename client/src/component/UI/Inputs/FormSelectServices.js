import Select from "react-select";
import FormInput from "./FormInput";
import { useEffect, useState } from "react";
import { useUpdateFormData } from "../../../util/formdata";
import { FormHelperText } from "@mui/material";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

const options = [
  { value: "companion-care", label: "Companion Care" },
  { value: "personal-care", label: "Personal Care" },
  { value: "stroke-care", label: "Stroke Care" },
  {
    value: "mobilitiy-assistance",
    label: "Walking Assistance, Mobility, and Posture Positioning",
  },
  { value: "home-hospice", label: "In Home Hospice" },
  { value: "housekeeping", label: "Light Housekeeping" },
  {
    value: "meals",
    label: "Special Diets, Meal Preparation, Eating Assistance",
  },
  { value: "respite-care", label: "Respite Care" },
  // Add more options as needed
];

const FormSelectServices = (props) => {
  const label = props.label || "Services Needed";

  const [selectedOptions, setSelectedOptions] = useState([]);

  //Any name data passed over from parent component
  //is used to set values initially for fullName inputs
  useEffect(() => {
    setSelectedOptions(props.services);
  }, []);

  useEffect(() => {
    if (!props.onChange) {
      return;
    }
    props.onChange(props.name || "requestedServices", selectedOptions);
  }, [selectedOptions]);

  const handleSelectionChange = (event) => {
    // Handle selected options
    setSelectedOptions(
      event.filter((obj) => Object.keys(obj).includes("value"))
    );
  };

  const handleSelectionClose = () => {
    props.onMenuClose(selectedOptions);
  };

  //Send input value changes to parent component
  // to be saved in a state for this input group
  useUpdateFormData(
    props.name || "requestedServices",
    selectedOptions,
    props.onChange
  );

  return (
    <FormInput
      id="select_services"
      name={props.name || "select_services"}
      className="services"
      label={label}
      inputProps={props.inputProps}
    >
      <Select
        isMulti
        id="select_services"
        name="services"
        components={animatedComponents}
        options={options}
        value={selectedOptions}
        onChange={handleSelectionChange}
        onMenuClose={handleSelectionClose}
      />
      <FormHelperText>
        {!selectedOptions.length && props.helperText}
      </FormHelperText>
    </FormInput>
  );
};

export default FormSelectServices;
