import { Link } from "@mui/material";

const CustomLink = (props) => {
  return (
    <Link href={props.href} sx={{ textDecoration: "none", color: "inherit" }}>
      {props.children}
    </Link>
  );
};

export default CustomLink;
