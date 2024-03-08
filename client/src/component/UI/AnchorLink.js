import { Box } from "@mui/material";

const AnchorLink = (props) => {
  const offset = props.offset || 60;
  const targetAnchor = document.querySelector(props.href);
  const elementPosition = targetAnchor.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.scrollY - offset;

  const handleClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  };
  return (
    <Box
      component="a"
      className={props.className + "anchorLink" || "anchorLink"}
      onClick={handleClick}
    >
      {props.children}
    </Box>
  );
};

export default AnchorLink;
