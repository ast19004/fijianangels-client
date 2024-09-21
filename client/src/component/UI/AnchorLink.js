import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AnchorLink = (props) => {
  const [offset, setOffset] = useState(100);
  const mdMedia = window.innerWidth > 500;
  const lgMedia = window.innerWidth > 1000;

  useEffect(() => {
    let offsetValue;
    if (props.offsetLg && lgMedia) {
      offsetValue = props.offsetLg;
    } else if (props.offsetMd && mdMedia) {
      offsetValue = props.offsetMd;
    } else {
      props.offsetSm ? (offsetValue = props.offsetSm) : (offsetValue = 100);
    }
    setOffset(offsetValue);
  }, [props.offsetSm, props.offsetMd, props.offsetLg, lgMedia, mdMedia]);

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
