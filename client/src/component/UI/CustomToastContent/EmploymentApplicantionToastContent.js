import { Box, Typography } from "@mui/material";

const EmploymentApplicationToastContent = (props) => {
  return (
    <Box component="section">
      <Typography component="h3" sx={{ fontSize: "1.5rem" }}>
        {props.name} your application has been sent!
      </Typography>
      <p>
        <i>We will review your application soon.</i>
      </p>
    </Box>
  );
};

export default EmploymentApplicationToastContent;
