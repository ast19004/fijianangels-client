import CustomLink from "../CustomLink";

const PhoneLink = (props) => {
  return <CustomLink href={`tel:${props.tel}`}>{props.children}</CustomLink>;
};

export default PhoneLink;
