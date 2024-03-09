import { Box, Typography } from "@mui/material";

import FullName from "../InputGroups/FullName";
import Contact from "../InputGroups/Contact";
import FormTextInput from "../Inputs/FormTextInput";
import SelectServices from "../Inputs/SelectServices";

const HomecareRequestForm = (props) => {
  return (
    <Box component="form" sx={props.sx}>
      <Typography component="h2">Homecare Service Inquiry Form</Typography>
      <FullName />
      <Contact />
      <SelectServices />

      <FormTextInput id="extra-info" label="Comments/ Additional Information" />
    </Box>
  );
};

export default HomecareRequestForm;
