import { Box } from "@mui/material";
import Background from "../../component/Layout/Background/Background";

import CallIcon from "../../assests/images/svg/contact.svg";

import styles from "./Home.module.css";

const Home = () => {
  return (
    <Box className={styles.home}>
      <Background className={styles.home_background} />
      <img
        className={styles["home_contact-icon"]}
        src={CallIcon}
        alt="contact icon"
      />
    </Box>
  );
};

export default Home;
