import { Box } from "@mui/material";

const CustomFieldset = (props) => {
  return (
    <Box
      component="fieldset"
      id={props.id}
      sx={{
        borderWidth: 0,
        margin: 0,
        padding: 0,
        ...props.sx,
      }}
    >
      {props.children}
    </Box>
  );
};

export default CustomFieldset;
