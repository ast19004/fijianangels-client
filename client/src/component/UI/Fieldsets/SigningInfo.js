import { Box } from "@mui/material";
import FormTextInput from "../Inputs/FormTextInput";
import { useState } from "react";
import { useUpdatedFormData, updateInput } from "../../../util/formdata";

const SigningInfo = (props) => {
  const [signature, setSignature] = useState({});

  const handleInputChange = (name, value) => {
    updateInput(name, value, setSignature);
  };
  useUpdatedFormData("signed", signature, props.onChange);

  return (
    <Box component="fieldset">
      <legend>Disclaimer and Signature</legend>
      <p>
        I certify that my answers are true and complete to the best of my
        knowledge.
      </p>
      <p>
        If this application leads to employment, I understand that false or
        misleading information in my application or interview may result in my
        release.
      </p>
      <FormTextInput
        id="signature"
        label="Signature"
        onChange={handleInputChange}
      />
      <FormTextInput
        id="signature-date"
        label="Date"
        onChange={handleInputChange}
      />
    </Box>
  );
};

export default SigningInfo;
