import { Box } from "@mui/material";

const StyledHeader = (props) => {
  return (
    <Box
      className={props.className}
      component="h3"
      sx={{
        color: props.headerColor || "#ca4766",
        display: !props.displayBlock ? "inline" : "block",
        fontWeight: props.headerFontWeight || "bold",
        ...props.sx,
      }}
    >
      {props.children}
    </Box>
  );
};

export default StyledHeader;
