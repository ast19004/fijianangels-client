import { Box, Typography, Button } from "@mui/material";

const Form = (props) => {
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
      <Button>Submit</Button>
    </Box>
  );
};

export default Form;
