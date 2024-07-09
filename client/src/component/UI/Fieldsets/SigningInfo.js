import { useState, useContext, useEffect } from "react";
import { EmploymentFormContext } from "../../../store/EmploymentForm/employment-form-context";
import { Box } from "@mui/material";
import { updateInput } from "../../../util/formdata";
import FormDateInput from "../Inputs/FormDateInput";
import SignaturePad from "../Inputs/SignaturePad";

const SigningInfo = (props) => {
  const ctx = useContext(EmploymentFormContext);
  const [signature, setSignature] = useState(ctx.signature);

  //Any signature data passed over from parent component
  //is used to set values initially for signature inputs
  //and as the parent changes
  useEffect(() => {
    setSignature(ctx.signature);
  }, [ctx.signature]);

  const handleInputChange = (dataName, data) => {
    updateInput(dataName, data, setSignature);
  };

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
      <SignaturePad onChange={handleInputChange} value={signature.signature} />
      {/* <FormTextInput
        id="signature"
        label="Signature"
        value={signature.signature}
        onChange={handleInputChange}
      /> */}
      <FormDateInput
        id="signature-date"
        htmlFor="signature-date"
        label="Date"
        value={signature.signatureDate}
        inputProps={{ readOnly: true }}
      />
    </Box>
  );
};

export default SigningInfo;
