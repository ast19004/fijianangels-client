import { Box, Typography, Button, ButtonGroup } from "@mui/material";
import { useEffect, useState } from "react";

const Form = (props) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    setFormData(props.formData);
  }, [props.formData]);

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
      <ButtonGroup
        sx={{ display: "flex", justifyContent: "center", marginTop: "16px" }}
      >
        {props.multiStep && (
          <>
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
                variant="contained"
                color="primary"
                onClick={props.onNext}
                sx={{ marginRight: "32px" }}
              >
                Next
              </Button>
            )}
          </>
        )}
        {!props.multiStep ||
          (!props.hasNextStep && (
            <Button
              disabled={props.submitDisabled}
              type="submit"
              variant="contained"
              color="primary"
              onClick={props.onSubmit}
            >
              Submit
            </Button>
          ))}
        {/* TODO: remove this extra submit button and consolidate it with the submit of above */}
        {props.submit && (
          <Button
            disabled={props.submitDisabled}
            type="submit"
            variant="contained"
            color="primary"
            onClick={props.onSubmit}
          >
            Submit
          </Button>
        )}
      </ButtonGroup>
    </Box>
  );
};

export default Form;
