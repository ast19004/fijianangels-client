import { Box } from "@mui/material";

const PhoneLink = (props) => {
  return (
    <Box
      component="a"
      sx={{ textDecoration: "none", color: "inherit" }}
      href={`tel:${props.tel}`}
    >
      {props.children}
    </Box>
  );
};

export default PhoneLink;
