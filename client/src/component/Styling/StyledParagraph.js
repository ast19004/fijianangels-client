import { Box } from "@mui/material";

const StyledParagraph = (props) => {
  return (
    <Box
      component="p"
      sx={{
        lineHeight: props.lineHeight || 1.7,
        color: props.paragraphColor || "#066988",
        display: !props.displayBlock ? "inline" : "block",
      }}
    >
      {props.children}
    </Box>
  );
};

export default StyledParagraph;
