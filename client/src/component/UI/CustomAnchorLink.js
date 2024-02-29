import AnchorLink from "react-anchor-link-smooth-scroll";

const CustomAnchorLink = (props) => {
  return (
    <AnchorLink
      className={props.className + "anchorLink" || "anchorLink"}
      offset={props.offset || "60"}
      href={props.href}
    >
      {props.children}
    </AnchorLink>
  );
};

export default CustomAnchorLink;
