import { Typography } from "@mui/material";

import Form from "../Forms/Form";
import ApplicantInfo from "../Fieldsets/ApplicantInfo";
import EducationInfo from "../Fieldsets/Education";
import ReferencesInfo from "../Fieldsets/ReferencesInfo";
import PreviousEmploymentInfo from "../Fieldsets/PreviousEmploymentInfo";
import MilitaryServiceInfo from "../Fieldsets/MilitaryServiceInfo";
import SigningInfo from "../Fieldsets/SigningInfo";

const EmploymentForm = (props) => {
  return (
    <Form title=" Employment Application">
      <ApplicantInfo />
      <EducationInfo />
      <ReferencesInfo />
      <PreviousEmploymentInfo />
      <MilitaryServiceInfo />
      <SigningInfo />
    </Form>
  );
};

export default EmploymentForm;
