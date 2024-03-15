import { Box } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const AnchorLink = (props) => {
  const offset = props.offset || 60;
  const targetAnchor = document.querySelector(props.href);
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
    }
    if (!targetAnchor) return;
    const elementPosition = targetAnchor.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - offset;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  };
  return (
    <Box component="a" className="anchorLink" onClick={handleClick}>
      {props.children}
    </Box>
  );
};

export default AnchorLink;
