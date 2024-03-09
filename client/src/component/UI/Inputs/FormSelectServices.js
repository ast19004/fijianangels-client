import Select from "react-select";
import FormInput from "./FormInput";

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
  const handleSelectionChange = (selectedOptions) => {
    // Handle selected options
    console.log(selectedOptions);
  };
  const label = props.label || "Services Needed";

  return (
    <FormInput id="select-services" label={label}>
      <Select
        id="select-services"
        options={options}
        isMulti
        onChange={handleSelectionChange}
      />
    </FormInput>
  );
};

export default FormSelectServices;
