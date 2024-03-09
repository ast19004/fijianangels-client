import {
  Box,
  Typography,
  FormControl,
  FormLabel,
  TextField,
} from "@mui/material";

import FullName from "../InputGroups/FullName";
import Contact from "../InputGroups/Contact";
import FormTextareaInput from "../Inputs/FormTextareaInput";
import FormSelectServices from "../Inputs/FormSelectServices";

const CaregiverReviewForm = (props) => {
  return (
    <Box component="form" sx={props.sx}>
      <Typography component="h2" variant="h2">
        Caregiver Review
      </Typography>
      <FullName legend="Your Name" />
      <Contact />
      <FullName legend="Caregiver Name" />
      <FormSelectServices label="Services Provided" />
      <FormControl>
        <FormLabel htmlFor="company1-duration">Care Dates:</FormLabel>
        <TextField id="start-date" type="date" /> to
        <TextField id="end-date" type="date" />
      </FormControl>
      <FormTextareaInput id="review-text" label="Caregiver Review" />
    </Box>
  );
};

export default CaregiverReviewForm;
