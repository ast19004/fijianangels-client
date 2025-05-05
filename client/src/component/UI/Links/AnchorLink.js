import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AnchorLink = (props) => {
  //States
  const [offset, setOffset] = useState(100);
  const mdMedia = window.innerWidth > 500;
  const lgMedia = window.innerWidth > 1000;
  const [pageSwitch, setPageSwitch] = useState(false);
  const [pastHref, setPastHref] = useState('');


  const location = useLocation();
  const navigate = useNavigate();

  // Effects
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

  useEffect(() => { 
    pageSwitch && scrollToHref();
    setPageSwitch(false);
    setPastHref('');
  }, [pageSwitch]);


  const scrollToHref = () => {
    const targetAnchor = document.querySelector(pageSwitch ? pastHref : props.href);
    if (!targetAnchor) return;
    const elementPosition = targetAnchor.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - offset;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  }

  const handleClick = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      setPageSwitch(true); 
      setPastHref(props.href);
    }
    scrollToHref();
  };

  return (
    <Box component="a" className="anchorLink" onClick={handleClick}>
      {props.children}
    </Box>
  );
};

export default AnchorLink;
