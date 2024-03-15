import Select from "react-select";
import FormInput from "./FormInput";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    if (!props.onChange) {
      return;
    }
    props.onChange("services", selectOptions);
  }, [selectOptions]);

  return (
    <FormInput id="select-services" label={label}>
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
