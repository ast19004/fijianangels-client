import { useState } from "react";
import { Button } from "@mui/material";

import { convertFormToPDF } from "../../../util/formdata";

import Form from "../Forms/Form";
import ApplicantInfo from "../Fieldsets/ApplicantInfo";
import EducationInfo from "../Fieldsets/Education";
import ReferencesInfo from "../Fieldsets/ReferencesInfo";
import PreviousEmploymentInfo from "../Fieldsets/PreviousEmploymentInfo";
import MilitaryServiceInfo from "../Fieldsets/MilitaryServiceInfo";
import SigningInfo from "../Fieldsets/SigningInfo";
import ProgressBar from "../ProgressBar";

const EmploymentForm = (props) => {
  const formId = "employmentForm";
  const [formData, setFormData] = useState({});

  const handleChange = (name, value) => {
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(JSON.stringify(formData));
    // Handle form submission data here
  };

  return (
    <Form title="Employment Application" id={formId}>
      <ProgressBar value={0.5} />
      <ApplicantInfo onChange={handleChange} />
      <EducationInfo onChange={handleChange} />
      <ReferencesInfo onChange={handleChange} />
      <PreviousEmploymentInfo onChange={handleChange} />
      <MilitaryServiceInfo onChange={handleChange} />
      <SigningInfo onChange={handleChange} />
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
