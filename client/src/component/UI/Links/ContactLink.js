import { Box } from "@mui/material";

const ContactLink = (props) => {
  return (
    <Box
      className={props.className}
      component="a"
      href={`mailto:${props.href}`}
      sx={{
        color: `${props.color ? props.color : "inherit"}`,
        textDecoration: "none",
        letterSpacing: "0.1rem",
        ...props.sx,
      }}
    >
      {props.children}
    </Box>
  );
};

export default ContactLink;
