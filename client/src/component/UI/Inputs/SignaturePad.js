import { useRef } from "react";
import SignatureCanvas from "react-signature-canvas";
import { Box, Button } from "@mui/material";

const SignaturePad = () => {
  const sigPadRef = useRef(null);

  const clear = () => {
    sigPadRef.current.clear();
  };

  const save = () => {
    if (sigPadRef.current.isEmpty()) {
      alert("Please provide a signature first.");
    } else {
      const dataUrl = sigPadRef.current
        .getTrimmedCanvas()
        .toDataUrl("image/png");
      console.log(dataUrl);
      //TODO: Send data to parent component
    }
  };
  return (
    <Box>
      <Box component="span" sx={{ color: "#888" }}>
        Signature
      </Box>
      <SignatureCanvas
        ref={sigPadRef}
        penColor="black"
        canvasProps={{ width: 500, height: 200 }}
        className="sigCanvas"
        backgroundColor="white"
      />
      <Button onClick={clear}>Clear</Button>
      <Button onClick={save}>Save</Button>
    </Box>
  );
};

export default SignaturePad;
