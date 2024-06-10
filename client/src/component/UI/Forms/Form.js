import { Box, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";

const Form = (props) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    setFormData(props.formData);
  }, [props.formData]);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(JSON.stringify(formData));
    // Handle form submission data here
  };

  return (
    <Box
      component="form"
      sx={{ maxWidth: "350px", margin: "0 auto", ...props.sx }}
    >
      <Typography
        component="h2"
        variant="h5"
        textAlign="center"
        sx={{ color: "#066988", marginBottom: "1rem" }}
      >
        {props.title.toUpperCase()}
      </Typography>
      {props.children}
      {props.submit && (
        <Button
          disabled={props.submitDisabled}
          type="submit"
          variant="contained"
          color="primary"
          onClick={onSubmit}
        >
          Submit
        </Button>
      )}
    </Box>
  );
};

export default Form;
