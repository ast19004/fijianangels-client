import { Link, Typography } from "@mui/material";

function Footer() {
  return (
    <footer>
      <Link href="#" variant="h3" underline="none">
        <Typography component="p" variant="h6" color="white">
          FIJIAN ANGELS HOMECARE
        </Typography>
        <Typography component="p" color="rgb(0,0,0)">
          Licenced & Bonded
        </Typography>
      </Link>
    </footer>
  );
}

export default Footer;
