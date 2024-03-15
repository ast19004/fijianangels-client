import { Button, Typography } from "@mui/material";

import Form from "../Forms/Form";
import ApplicantInfo from "../Fieldsets/ApplicantInfo";
import EducationInfo from "../Fieldsets/Education";
import ReferencesInfo from "../Fieldsets/ReferencesInfo";
import PreviousEmploymentInfo from "../Fieldsets/PreviousEmploymentInfo";
import MilitaryServiceInfo from "../Fieldsets/MilitaryServiceInfo";
import SigningInfo from "../Fieldsets/SigningInfo";
import { useEffect, useState } from "react";
import FormInput from "../Inputs/FormInput";
import FormSelectServices from "../Inputs/FormSelectServices";
import FormTextInput from "../Inputs/FormTextInput";
import FormEmailInput from "../Inputs/FormEmailInput";
import FormPhoneInput from "../Inputs/FormPhoneInput";
import FormNumInput from "../Inputs/FormNumInput";
import FormTextareaInput from "../Inputs/FormTextareaInput";
import FormRadioInput from "../Inputs/FormRadioInput";
import Address from "../InputGroups/Address";

const EmploymentForm = (props) => {
  const [formData, setFormData] = useState({});

  // const useFormData = (data) => {
  //   return useEffect(
  //     () => setFormData((prevFormData) => ({ ...prevFormData, data })),
  //     [data]
  //   );
  // };

  const handleChange = (name, value) => {
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(JSON.stringify(formData));
    // Handle form submission data here
  };

  return (
    <Form title=" Employment Application">
      <Address onChange={handleChange} />
      {/* <ApplicantInfo /> */}
      {/* <EducationInfo />
      <ReferencesInfo />
      <PreviousEmploymentInfo />
      <MilitaryServiceInfo />
      <SigningInfo />  */}

      <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={onSubmit}
      >
        Submit
      </Button>
    </Form>
  );
};

export default EmploymentForm;
