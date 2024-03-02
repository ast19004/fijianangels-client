import { Box, Typography } from "@mui/material";
import Select from "react-select";
import FullName from "../InputGroups/FullName";
import Contact from "../InputGroups/Contact";
import FormTextInput from "../Inputs/FormTextInput";

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

const HomecareRequestForm = (props) => {
  const handleSelectionChange = (selectedOptions) => {
    // Handle selected options
    console.log(selectedOptions);
  };

  return (
    <Box component="form" sx={props.sx}>
      <Typography component="h2">Homecare Service Inquiry Form</Typography>
      <FullName />
      <Contact />
      <Select options={options} isMulti onChange={handleSelectionChange} />

      <FormTextInput id="extra-info" label="Comments/ Additional Information" />
    </Box>
  );
};

export default HomecareRequestForm;
