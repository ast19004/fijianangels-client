import { Button } from "@mui/material";

const CustomButton = (props) => {
  return (
    <Button
      className={ props.className}
      sx={{
        display: "block",
        margin: "0.3rem auto 0 auto",
        padding: "1rem 4rem",
        backgroundColor: "rgba(202, 71, 101, 0.9)",
        fontSize: "1rem",
        borderRadius: "5rem",
        "&:hover": {
          backgroundColor: "rgba(202, 71, 101, 1)",
          transform: "scale(1.1)",
        },
        ...props.sx
      }}
      disabled={props.disabled}
      type="submit"
      variant="contained"
    >
      {props.children}
    </Button>
  );
};

export default CustomButton;
