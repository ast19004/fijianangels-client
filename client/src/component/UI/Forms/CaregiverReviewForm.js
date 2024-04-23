import { FormControl, FormLabel, TextField } from "@mui/material";

import FullName from "../InputGroups/FullName";
import Contact from "../InputGroups/Contact";
import Form from "../Forms/Form";
import FormTextareaInput from "../Inputs/FormTextareaInput";
import FormSelectServices from "../Inputs/FormSelectServices";
import ProgressBar from "../ProgressBar";

const CaregiverReviewForm = (props) => {
  return (
    <Form title="Caregiver Review">
      <ProgressBar value={0.5} />
      <FullName legend="Your Name" abr="user" />
      <Contact />
      <FullName legend="Caregiver Name" abr="caregiver" />
      <fieldset>
        <legend>Services</legend>
        <FormSelectServices label="Services Provided" />
        <FormControl>
          <FormLabel htmlFor="company1-duration">Care Dates:</FormLabel>
          <TextField id="start_date" type="date" /> to
          <TextField id="end_date" type="date" />
        </FormControl>
        <FormTextareaInput id="review_text" label="Caregiver Review" />
      </fieldset>
    </Form>
  );
};

export default CaregiverReviewForm;
