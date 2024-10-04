import { Box } from "@mui/material";
import Background from "../../component/Layout/Background/Background";

import CallIcon from "../../assests/images/svg/contact.svg";
import AnchorLink from "../../component/UI/Links/AnchorLink";

import styles from "./Home.module.css";

const Home = () => {
  return (
    <Box className={styles.home}>
      <Background className={styles.home_background} />
      <AnchorLink href="#contact" offsetSm="45" offsetMd="220" offsetLg="110">
        <img
          className={styles["home_contact-icon"]}
          src={CallIcon}
          alt="contact icon"
        />
      </AnchorLink>
    </Box>
  );
};

export default Home;
