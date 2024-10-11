import { Box, Typography } from "@mui/material";

import { handleRequestForm } from "../../../util/event";

import styles from "./Footer.module.css";

function Footer() {
  // const handleClick = () => {
  //   const targetAnchor = document.querySelector("#contact");
  //   const elementPosition = targetAnchor.getBoundingClientRect().top;
  //   const offsetPosition = elementPosition + window.scrollY - 240;
  //   window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  // };

  return (
    <footer className={styles.footer} onClick={handleRequestForm}>
      <Box className={styles.footer_text}>
        <Typography
          className={styles["footer_text-header"]}
          component="h3"
          color="rgba(202, 71, 101)"
          align="right"
        >
          FIJIAN ANGELS HOMECARE
        </Typography>
        <Typography
          className={styles["footer_text-subheader"]}
          component="p"
          color="rgba(202, 71, 101)"
          align="right"
        >
          Licensed & Bonded
        </Typography>
      </Box>
      <Typography
        className={styles["footer_text-action"]}
        component="p"
        color="white"
      >
        Get setup with a caregiver today!
      </Typography>
    </footer>
  );
}

export default Footer;
