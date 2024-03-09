import { Box } from "@mui/material";

const StyledHeader = (props) => {
  return (
    <Box
      component="h3"
      sx={{
        color: props.headerColor || "#ca4766",
        display: !props.displayBlock ? "inline" : "block",
        fontWeight: props.headerFontWeight || "bold",
      }}
    >
      {props.children}
    </Box>
  );
};

export default StyledHeader;
