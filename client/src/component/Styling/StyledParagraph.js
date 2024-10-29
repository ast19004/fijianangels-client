import { Box } from "@mui/material";

const StyledParagraph = (props) => {
  return (
    <Box
      className={props.className}
      component="p"
      sx={{
        lineHeight: props.lineHeight || 1.7,
        color: props.paragraphColor || "#066988",
        display: !props.displayBlock ? "inline" : "block",
        ...props.sx,
      }}
    >
      {props.children}
    </Box>
  );
};

export default StyledParagraph;
