import { TextField, FormLabel, FormControl, Box } from "@mui/material";
import FormTextInput from "../Inputs/FormTextInput";
import { useEffect, useState } from "react";

const SigningInfo = (props) => {
  const [signature, setSignature] = useState({});

  const handleInputChange = (name, value) => {
    setSignature((prevSig) => ({ ...prevSig, [name]: value }));
  };

  useEffect(() => {
    if (!props.onChange) {
      return;
    }
    props.onChange("signed", signature);
  }, [signature]);
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
