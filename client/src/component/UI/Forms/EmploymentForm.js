import { convertFormToPDF } from "../../../util/formdata";

import { ApplicantContextProvider } from "../../../store/EmploymentForm/applicant-context";
import ApplicantInfo from "../Fieldsets/ApplicantInfo";
import EducationInfo from "../Fieldsets/Education";
import ReferencesInfo from "../Fieldsets/ReferencesInfo";
import PreviousEmploymentInfo from "../Fieldsets/PreviousEmploymentInfo";
import MilitaryServiceInfo from "../Fieldsets/MilitaryServiceInfo";
import SigningInfo from "../Fieldsets/SigningInfo";
import MultiStepForm from "./MultiStepForm";

const EmploymentForm = (props) => {
  const formId = "employmentForm";
  // const [formData, setFormData] = useState({});

  // const handleChange = (name, value) => {
  //   setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  // };

  const onSubmit = (event) => {
    event.preventDefault();
    // console.log(JSON.stringify(formData));
    // Handle form submission data here
  };

  return (
    <MultiStepForm title="Employment Application" id={formId}>
      <ApplicantContextProvider>
        <ApplicantInfo />
      </ApplicantContextProvider>
      <EducationInfo />
      <ReferencesInfo />
      <PreviousEmploymentInfo />
      <MilitaryServiceInfo />
      <SigningInfo />
    </MultiStepForm>
  );
};

export default EmploymentForm;
