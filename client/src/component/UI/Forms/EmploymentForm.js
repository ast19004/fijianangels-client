import { useEffect, useState } from "react";
import { Button } from "@mui/material";

import Form from "../Forms/Form";
import ApplicantInfo from "../Fieldsets/ApplicantInfo";
import EducationInfo from "../Fieldsets/Education";
import ReferencesInfo from "../Fieldsets/ReferencesInfo";
import PreviousEmploymentInfo from "../Fieldsets/PreviousEmploymentInfo";
import MilitaryServiceInfo from "../Fieldsets/MilitaryServiceInfo";
import SigningInfo from "../Fieldsets/SigningInfo";

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
    <Form title="Employment Application">
      {/* <ApplicantInfo onChange={handleChange} />
      <EducationInfo onChange={handleChange} />
      <ReferencesInfo onChange={handleChange} /> */}
      <PreviousEmploymentInfo onChange={handleChange} />
      {/* <MilitaryServiceInfo />
      <SigningInfo /> */}
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
