import { Box } from "@mui/material";

const StyledParagraph = (props) => {
  return (
    <Box
      component="p"
      sx={{
        lineHeight: `${(props) => props.lineHeight || 1.7}`,
        color: `${(props) => props.paragraphColor || "#066988"}`,
        display: `${(props) => (!props.displayBlock ? "inline" : "block")}`,
      }}
    >
      {props.children}
    </Box>
  );
};

export default StyledParagraph;
