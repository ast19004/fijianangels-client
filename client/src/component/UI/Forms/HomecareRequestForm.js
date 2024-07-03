import { useState } from "react";
import { updateInput } from "../../../util/formdata";

import { getTodaysDate } from "../../../util/Date";
import FullName from "../InputGroups/FullName";
import Contact from "../InputGroups/Contact";
import Form from "../Forms/Form";
import FormTextareaInput from "../Inputs/FormTextareaInput";
import FormSelectServices from "../Inputs/FormSelectServices";
import ProgressBar from "../ProgressBar";

const HomecareRequestForm = (props) => {
  const currenDate = getTodaysDate();
  const [request, setRequest] = useState({
    todaysDate: currenDate,
    fullName: {
      first_name: "",
      middle_name: "",
      last_name: "",
    },
    contact: { contact_phone: "", contact_email: "" },
    requestedServices: [],
    additionalInfo: "",
  });

  const handleInputChange = (dataName, data) => {
    updateInput(dataName, data, setRequest);
  };

  const handleFormSubmit = () => {};
  return (
    <Form title="Homecare Request Form" submit onSubmit={handleFormSubmit}>
      <FullName fullName={request.fullName} onChange={handleInputChange} />
      <Contact contact={request.contact} onChange={handleInputChange} />
      <fieldset>
        <legend>Services</legend>
        <FormSelectServices
          ervices={props.requestedServices}
          onChange={handleInputChange}
        />
      </fieldset>
      <FormTextareaInput
        id="extra_info"
        label="Comments/ Additional Information"
        name="additionalInfo"
        exampleText="comments..."
        value={props.additional_info}
        onChange={handleInputChange}
      />
    </Form>
  );
};

export default HomecareRequestForm;
