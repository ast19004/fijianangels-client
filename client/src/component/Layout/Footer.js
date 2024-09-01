import { Link, Typography } from "@mui/material";

import CallIcon from "@mui/icons-material/ContactPhone";

function Footer() {
  const handleClick = () => {
    const targetAnchor = document.querySelector("#contact");
    const elementPosition = targetAnchor.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - 240;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  };

  return (
    <footer onClick={handleClick}>
      {/* <Typography>
          <CallIcon color="white" />
        </Typography> */}
      <Typography
        component="p"
        variant="h5"
        color="white"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "3px",
          letterSpacing: "1px",
          fontWeight: "500",
          marginLeft: "27px",
          marginBottom: "-5px",
        }}
      >
        FIJIAN ANGELS HOMECARE
        <CallIcon sx={{ fontSize: "inherit", opacity: "0.75" }} />
      </Typography>
      <Typography
        component="p"
        color="rgb(0,0,0, 0.9)"
        sx={{
          fontSize: "1rem",
          letterSpacing: "1px",
          transform: "scale(1, .9)",
        }}
      >
        Licenced & Bonded
      </Typography>
    </footer>
  );
}

export default Footer;
