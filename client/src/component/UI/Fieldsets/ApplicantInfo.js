// import { useUpdatedFormData, updateInput } from "../../../util/formdata";
import Address from "../InputGroups/Address";
import FullName from "../InputGroups/FullName";
import Contact from "../InputGroups/Contact";
import EmploymentEligibility from "../Fieldsets/EmploymentEligibilty";

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

  return (
    <fieldset>
      <legend>Applicant Information</legend>
      <FullName />
      <Address />
      <Contact />
      <EmploymentEligibility />
    </fieldset>
  );
};

export default ApplicantInfo;
