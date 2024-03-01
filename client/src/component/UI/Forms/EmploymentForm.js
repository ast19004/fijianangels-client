import { Typography, Box } from "@mui/material";
import ApplicantInfo from "../Fieldsets/ApplicantInfo";
import EducationInfo from "../Fieldsets/Education";
import ReferencesInfo from "../Fieldsets/ReferencesInfo";
import PreviousEmploymentInfo from "../Fieldsets/PreviousEmploymentInfo";
import MilitaryServiceInfo from "../Fieldsets/MilitaryServiceInfo";
import SigningInfo from "../Fieldsets/SigningInfo";

const EmploymentForm = (props) => {
  return (
    <Box
      component="form"
      sx={{
        position: "absolute",
        top: "75px",
        left: "0",
        background: "rgba(255,255,255, 0.6)",
        padding: "2%",
      }}
    >
      <Typography component="h2" variant="h3" align="center">
        FIJIAN ANGELS HOME CARE
      </Typography>
      <Typography component="p" variant="h6">
        Employment Application
      </Typography>
      <ApplicantInfo />
      <EducationInfo />
      <ReferencesInfo />
      <PreviousEmploymentInfo />
      <MilitaryServiceInfo />
      <SigningInfo />
    </Box>
  );
};

export default EmploymentForm;
