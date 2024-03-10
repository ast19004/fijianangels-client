import FullName from "../InputGroups/FullName";
import Contact from "../InputGroups/Contact";
import Form from "../Forms/Form";
import FormTextareaInput from "../Inputs/FormTextareaInput";
import FormSelectServices from "../Inputs/FormSelectServices";

const HomecareRequestForm = (props) => {
  return (
    <Form title="Homecare Request Form">
      <FullName />
      <Contact />
      <fieldset>
        <legend>Services</legend>
        <FormSelectServices />
        <FormTextareaInput
          id="extra-info"
          label="Comments/ Additional Information"
          exampleText="comments..."
        />
      </fieldset>
    </Form>
  );
};

export default HomecareRequestForm;
