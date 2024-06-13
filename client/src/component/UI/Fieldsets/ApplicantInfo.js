import { ApplicantContext } from "../../../store/EmploymentForm/applicant-context";
import Address from "../InputGroups/Address";
import FullName from "../InputGroups/FullName";
import Contact from "../InputGroups/Contact";
import EmploymentEligibility from "../Fieldsets/EmploymentEligibilty";
import { useContext } from "react";

const ApplicantInfo = (props) => {
  // const [applicantInfo, setApplicantInfo] = useState();
  // const handleChange = (name, value) => {
  //   setApplicantInfo((prevApplicantData) => ({
  //     ...prevApplicantData,
  //     [name]: value,
  //   }));
  // };
  // const handleChange = (name, value) => {
  //   updateInput(name, value, setApplicantInfo);
  // };
  // useUpdatedFormData("applicantData", applicantInfo, props.onChange);
  // useEffect(() => console.log(props.data), [props.data]);
  const applicantCtx = useContext(ApplicantContext);
  const { updateFullName, updateAddress, updateContact } = applicantCtx;
  const applicant = applicantCtx.applicantInput;

  //TODO: form input should be sent to context when next button is pressed and not before?
  return (
    <fieldset>
      <legend>Applicant Information</legend>
      <FullName updateFullName={updateFullName} fullName={applicant.fullName} />
      <Address updateAddress={updateAddress} address={applicant.address} />
      <Contact updateContact={updateContact} contact={applicant.contact} />
      <EmploymentEligibility />
    </fieldset>
  );
};

export default ApplicantInfo;
