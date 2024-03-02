import { TextField, FormLabel, FormControl } from "@mui/material";
import FormTextInput from "../Inputs/FormTextInput";
import FormRadioInput from "../Inputs/FormRadioInput";

const EducationInfo = (props) => {
  const educationTypes = [
    { abr: "high-school", label: "High School" },
    { abr: "college", label: "College" },
    { abr: "other-education", label: "Other Education" },
  ];
  return (
    <fieldset>
      <legend>Education</legend>
      {educationTypes.map((type) => (
        <fieldset>
          <legend>{type.label}</legend>
          <FormTextInput id={`${type.abr}-address`} label={"Address:"} />
          <FormControl>
            <FormLabel htmlFor={`${type.abr}-attendance`}>Dates:</FormLabel>
            <TextField id={`${type.abr}-start-date`} type="date" /> to
            <TextField id={`${type.abr}-end-date`} type="date" />
          </FormControl>
          <FormRadioInput
            id={`${type.abr}-graduate`}
            label="Did you graduate?"
            radiocontrols={[
              { value: "yes", label: "Yes" },
              { value: "no", label: "No" },
            ]}
          />
        </fieldset>
      ))}
    </fieldset>
  );
};

export default EducationInfo;
