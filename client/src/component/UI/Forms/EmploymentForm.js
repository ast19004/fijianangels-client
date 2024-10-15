import { useState } from "react";
import Form from "./Form.js";
import ApplicantInfo from "../Fieldsets/ApplicantInfo.js";
import { EmploymentFormContextProvider } from "../../../store/EmploymentForm/employment-form-context.js";
import FormStep from "./FormStep.js.js";
import FormTextInput from "../Inputs/FormTextInput.js";
import FormFileInput from "../Inputs/FormFileInput.js";

const EmploymentForm = (props) => {
  const formId = "employmentForm";
  const [position, setPosition] = useState("");

  const handlePositionInputChange = (e) => {
    // setPosition(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
  };

  return (
    <Form
      title="Employment Application"
      id={formId}
      onSubmit={handleSubmit}
      submit
    >
      {/* <FormTextInput
        id="employment_position"
        name="employment_position"
        label="POSITION APPLYING FOR"
        value={position}
        onChange={handlePositionInputChange}
        inputProps={{ required: true }}
      /> */}
      <FormStep
        parentComponent={EmploymentFormContextProvider}
        childComponent={ApplicantInfo}
      />
      <FormFileInput label="ATTACH RESUME" />
    </Form>
  );
};

export default EmploymentForm;
