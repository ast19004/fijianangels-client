import { Box, Typography } from "@mui/material";
import styles from "./Picture.module.css";
import { useState } from "react";
import InfoIcon from "@mui/icons-material/ExpandCircleDownOutlined";

const Picture = (props) => {
  const [showTextBody, setShowTextBody] = useState(false);
  return (
    <Box sx={{ position: "relative", textAlign: "center", color: "black" }}>
      <img
        className={`${props.responsive ? styles.responsive : styles.picture} ${
          props.circle ? styles.circleImg : ""
        } `}
        src={props.src}
        alt={props.alt}
      />
      <Box
        className={`${styles.textContainer} ${
          showTextBody ? styles.slideUp : ""
        }`}
        onClick={() => setShowTextBody((prev) => !prev)}
      >
        <Typography
          className={`${styles.textHeader}`}
          component="h3"
          align="center"
        >
          {props.overlayText ? props.overlayText.header : ""}
          <sup className={styles["superscript-icon"]}>
            <InfoIcon />
          </sup>
        </Typography>
        <Typography
          className={`${styles.textBody} ${
            showTextBody ? "" : styles.disappear
          }`}
          component="p"
          align="left"
          sx={{ fontSize: "1rem", color: "rgb(50, 50, 50)" }}
        >
          {props.overlayText ? props.overlayText.body : ""}
        </Typography>
      </Box>
    </Box>
  );
};

export default Picture;
