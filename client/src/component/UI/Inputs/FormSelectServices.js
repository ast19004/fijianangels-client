import Select from "react-select";
import FormInput from "./FormInput";
import { useEffect, useState } from "react";
import { useUpdateFormData } from "../../../util/formdata";

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

  const [selectOptions, setSelectOptions] = useState([]);
  const handleSelectionChange = (selectedOptions) => {
    // Handle selected options
    setSelectOptions(selectedOptions.map((item) => item.label));
  };

  //Any name data passed over from parent component
  //is used to set values initially for fullName inputs
  useEffect(() => {
    setSelectOptions(props.services);
  }, []);

  useEffect(() => {
    if (!props.onChange) {
      return;
    }
    props.onChange("services", selectOptions);
  }, [selectOptions]);

  //Send input value changes to parent component
  // to be saved in a state for this input group
  useUpdateFormData(
    props.name || "requestedServices",
    selectOptions,
    props.onChange
  );

  return (
    <FormInput id="select-services" label={label} inputProps={props.inputProps}>
      <Select
        id="select-services"
        name="services"
        options={options}
        isMulti
        onChange={handleSelectionChange}
      />
    </FormInput>
  );
};

export default FormSelectServices;
