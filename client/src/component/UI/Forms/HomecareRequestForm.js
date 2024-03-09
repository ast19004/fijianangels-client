import { Box, Typography } from "@mui/material";
import FullName from "../InputGroups/FullName";
import Contact from "../InputGroups/Contact";
import FormTextInput from "../Inputs/FormTextInput";
import FormSelectServices from "../Inputs/FormSelectServices";

const HomecareRequestForm = (props) => {
  return (
    <Box component="form" sx={props.sx}>
      <Typography component="h2" variant="h2">
        Homecare Service Inquiry Form
      </Typography>
      <FullName />
      <Contact />
      <FormSelectServices />

      <FormTextInput id="extra-info" label="Comments/ Additional Information" />
    </Box>
  );
};

export default HomecareRequestForm;
