import { Link, Typography } from "@mui/material";

function Footer() {
  return (
    <Link href="#contact" variant="h3" underline="none">
      <footer>
        <Typography component="p" variant="h6" color="white">
          FIJIAN ANGELS HOMECARE
        </Typography>
        <Typography component="p" color="rgb(0,0,0)">
          Licenced & Bonded
        </Typography>
      </footer>
    </Link>
  );
}

export default Footer;
