import { Box, Typography } from "@mui/material";
import styles from "./Picture.module.css";

const Picture = (props) => {
  return (
    <Box sx={{ position: "relative", textAlign: "center", color: "black" }}>
      <img
        className={`${props.responsive ? styles.responsive : styles.picture} ${
          props.circle ? styles.circleImg : ""
        } `}
        src={props.src}
        alt={props.alt}
      />
      <Box className={styles.textContainer}>
        <Typography
          className={styles.text}
          component="h3"
          align="center"
          sx={{
            fontSize: "1.7rem",
            color: "rgb(15 38 45 / 90%)",
            letterSpacing: "2px",
          }}
        >
          {props.overlayText ? props.overlayText.header : ""}
        </Typography>
        <Typography
          className={styles.text}
          component="p"
          align="center"
          sx={{ fontSize: "1rem", color: "rgb(50, 50, 50)" }}
        >
          {props.overlayText ? props.overlayText.body : ""}
        </Typography>
      </Box>
    </Box>
  );
};

export default Picture;
