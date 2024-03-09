import { Box } from "@mui/material";

const StyledHeader = (props) => {
  return (
    <Box
      component="h3"
      sx={{
        color: `${(props) =>
          props.headerColor ? props.headerColor : "#ca4766"}`,
        display: `${(props) => (!props.displayBlock ? "inline" : "block")}`,
        fontWeight: `${(props) =>
          props.headerFontWeight ? props.headerFontWeight : "bold"}`,
      }}
    >
      {props.children}
    </Box>
  );
};

export default StyledHeader;
