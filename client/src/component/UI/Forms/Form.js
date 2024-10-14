import { Box, Typography, Button, ButtonGroup } from "@mui/material";
import { useEffect, useState } from "react";
import CustomButton from "../Buttons/CustomButton";

const Form = (props) => {
  const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState(null);

  //If a multiStep Form, receive data obtained by higher level parent
  useEffect(() => {
    setFormData(props.formData);
  }, [props.formData]);

  //If a multiStep Form, check for errors found by higher level parent
  useEffect(() => {
    props.errors && setFormErrors(props.errors);
  }, [props.errors]);

  return (
    <Box
      component="form"
      sx={{ maxWidth: "350px", margin: "0 auto", ...props.sx }}
      onSubmit={props.onSubmit}
    >
      <Typography
        component="h2"
        textAlign="center"
        sx={{ color: "#066988", marginBottom: "1rem", fontSize: "1.6rem" }}
      >
        {props.title.toUpperCase()}
      </Typography>
      {props.children}
      {props.multiStep ? (
        <ButtonGroup
          sx={{ display: "flex", justifyContent: "center", marginTop: "16px" }}
        >
          {props.hasPrevStep && (
            <Button
              type="button"
              variant="contained"
              color="primary"
              onClick={props.onPrev}
              sx={{ marginRight: "32px" }}
            >
              Back
            </Button>
          )}
          {props.hasNextStep && (
            <Button
              type="button"
              disabled={props.submitDisabled}
              variant="contained"
              color="primary"
              onClick={props.onNext}
              sx={{ marginRight: "32px" }}
            >
              Next
            </Button>
          )}
          {!props.multiStep || !props.hasNextStep ? (
            <Button
              disabled={props.submitDisabled}
              type="submit"
              variant="contained"
              color="primary"
              onClick={props.onSubmit}
            >
              Submit
            </Button>
          ) : null}
        </ButtonGroup>
      ) : null}
      {/* TODO: remove this extra submit button and consolidate it with the submit of above */}
      {props.submit && (
        <CustomButton disabled={props.submitDisabled} type="submit">
          Submit
        </CustomButton>
      )}
    </Box>
  );
};

export default Form;
