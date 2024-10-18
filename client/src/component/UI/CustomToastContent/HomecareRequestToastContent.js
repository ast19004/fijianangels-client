import { Box, Typography } from "@mui/material";

const HomecareRequestToastContent = (props) => {
  return (
    <Box component="section">
      <Typography component="h3" sx={{ fontSize: "1.5rem" }}>
        Thank you {props.name} for your care request!
      </Typography>
      <p>
        <i>We will contact you soon.</i>
      </p>
    </Box>
  );
};

export default HomecareRequestToastContent;
