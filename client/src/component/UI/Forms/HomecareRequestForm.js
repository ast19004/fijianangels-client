import { useState } from "react";
import { updateInput } from "../../../util/formdata";

import { getTodaysDate } from "../../../util/Date";
import FullName from "../InputGroups/FullName";
import Contact from "../InputGroups/Contact";
import Form from "../Forms/Form";
import FormTextareaInput from "../Inputs/FormTextareaInput";
import FormSelectServices from "../Inputs/FormSelectServices";

const HomecareRequestForm = (props) => {
  const currentDate = getTodaysDate();
  const [request, setRequest] = useState({
    todaysDate: currentDate,
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
      <FullName
        fullName={request.fullName}
        onChange={handleInputChange}
        resetStyles
      />
      <Contact
        contact={request.contact}
        onChange={handleInputChange}
        resetStyles
        helperText={{
          contact_phone: "",
          contact_email: "",
        }}
      />
      <fieldset>
        <legend>Services</legend>
        <FormSelectServices
          label="Requested Services"
          name="requestedServices"
          services={request.requestedServices}
          onChange={handleInputChange}
          onMenuClose={() => {}}
          // helperText={servicesErrors}
          inputProps={{ required: true }}
        />
        <FormTextareaInput
          id="extra_info"
          label="Comments/ Additional Information"
          name="additionalInfo"
          exampleText="comments..."
          value={props.additional_info}
          onChange={handleInputChange}
        />
      </fieldset>
    </Form>
  );
};

export default HomecareRequestForm;
