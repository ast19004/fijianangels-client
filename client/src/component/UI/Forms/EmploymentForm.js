import {
  TextField,
  Checkbox,
  Radio,
  Select,
  Slider,
  Switch,
  DatePicker,
  TimePicker,
  DateTimePicker,
  FormLabel,
  FormControl,
  FormHelperText,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import ApplicantInfo from "../Fieldsets/ApplicantInfo";
import EducationInfo from "../Fieldsets/Education";
import ReferencesInfo from "../Fieldsets/ReferencesInfo";
import PreviousEmploymentInfo from "../Fieldsets/PreviousEmploymentInfo";
import MilitaryServiceInfo from "../Fieldsets/MilitaryServiceInfo";
import SigningInfo from "../Fieldsets/SigningInfo";

const EmploymentForm = (props) => {
  return (
    <form>
      <ApplicantInfo />
      <EducationInfo />
      <ReferencesInfo />
      <PreviousEmploymentInfo />
      <MilitaryServiceInfo />
      <SigningInfo />
    </form>
  );
};

export default EmploymentForm;
