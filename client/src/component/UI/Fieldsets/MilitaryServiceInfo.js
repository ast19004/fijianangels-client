import { FormLabel, FormControl, Box } from "@mui/material";
import { EmploymentFormContext } from "../../../store/EmploymentForm/employment-form-context";
import FormTextInput from "../Inputs/FormTextInput";
import { useContext, useEffect, useState } from "react";
import { updateInput } from "../../../util/formdata";
import FormDateInput from "../Inputs/FormDateInput";

const MilitaryServiceInfo = (props) => {
  const ctx = useContext(EmploymentFormContext);
  const [service, setService] = useState(ctx.militaryService);
  const [errors, setErrors] = useState(null);

  //Any military data passed over from parent component
  //is used to set values initially for military inputs
  //and as the parent changes
  useEffect(() => {
    setService(ctx.militaryService);
  }, [ctx.militaryService]);

  const handleInputChange = (dataName, data) => {
    updateInput(dataName, data, setService);
  };

  // If used in a MultiStepForm this component will be
  // wrapped in a FormStep that takes a context and this component.
  // The FormStep component provides the useSaveStep to save the current step's state before moving onto the next formStep
  props.useSaveState &&
    props.useSaveState(service, ctx.updateMilitaryService, errors);

  return (
    <Box component="fieldset">
      <legend>Military Service</legend>
      <FormTextInput
        id="branch"
        label="Branch"
        value={service.branch}
        onChange={handleInputChange}
      />

      <FormControl>
        <FormLabel htmlFor="duration">Dates:</FormLabel>
        <FormDateInput
          id="service_start"
          htmlFor="service_start"
          label="From:"
          onChange={handleInputChange}
          value={service.service_start}
        />
        <FormDateInput
          id="service_end"
          htmlFor="service_end"
          label="To:"
          onChange={handleInputChange}
          value={service.service_end}
        />
      </FormControl>
      <FormTextInput
        id="rank"
        label="Rank at Discharge"
        value={service.rank}
        onChange={handleInputChange}
      />
      <FormTextInput
        id="discharge_type"
        label="Type of Discharge:"
        value={service.discharge_type}
        onChange={handleInputChange}
      />
      <FormTextInput
        id="discharge_explanation"
        label="If other than honorable, explain:"
        value={service.discharge_explanation}
        onChange={handleInputChange}
      />
    </Box>
  );
};

export default MilitaryServiceInfo;
