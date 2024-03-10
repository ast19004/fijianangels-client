import {
  Box,
  Typography,
  FormControl,
  FormLabel,
  TextField,
} from "@mui/material";

import FullName from "../InputGroups/FullName";
import Contact from "../InputGroups/Contact";
import Form from "../Forms/Form";
import FormTextareaInput from "../Inputs/FormTextareaInput";
import FormSelectServices from "../Inputs/FormSelectServices";

const CaregiverReviewForm = (props) => {
  return (
    <Form title="Caregiver Review">
      <FullName legend="Your Name" />
      <Contact />
      <FullName legend="Caregiver Name" />
      <fieldset>
        <legend>Services</legend>
        <FormSelectServices label="Services Provided" />
        <FormControl>
          <FormLabel htmlFor="company1-duration">Care Dates:</FormLabel>
          <TextField id="start-date" type="date" /> to
          <TextField id="end-date" type="date" />
        </FormControl>
        <FormTextareaInput id="review-text" label="Caregiver Review" />
      </fieldset>
    </Form>
  );
};

export default CaregiverReviewForm;
