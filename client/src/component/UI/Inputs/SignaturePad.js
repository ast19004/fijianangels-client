import { useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import { Box, Button, FormControl, FormLabel } from "@mui/material";

const SignaturePad = (props) => {
  const sigPadRef = useRef({});
  const [signature, setSignature] = useState(props.signature);

  const clear = () => {
    sigPadRef.current.clear();
    setSignature("");
  };

  const save = () => {
    if (sigPadRef.current.isEmpty()) {
      alert("Please provide a signature first.");
    } else {
      const dataUrl = sigPadRef.current
        .getTrimmedCanvas()
        .toDataURL("image/png");
      setSignature(dataUrl);
      //Save data in parent componenet & in Employment ctx
      // props.onChange("signature", signature);
    }
  };
  return (
    <Box>
      <FormControl>
        <FormLabel>Signature</FormLabel>
        <SignatureCanvas
          ref={sigPadRef}
          value={signature}
          penColor="black"
          canvasProps={{ width: 500, height: 200 }}
          className="sigCanvas"
          backgroundColor="white"
        />
      </FormControl>
      <Button onClick={clear}>Clear</Button>
      <Button onClick={save}>Save</Button>
    </Box>
  );
};

export default SignaturePad;
