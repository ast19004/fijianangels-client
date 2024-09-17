import { Box } from "@mui/material";
import Section from "../../component/UI/Section";
import styles from "./CoreValues.module.css";

import qualitySvg from "../../assests/images/svg/quality.svg";
import flexibilitySvg from "../../assests/images/svg/flexibility.svg";
import integritySvg from "../../assests/images/svg/integrity.svg";

function CoreValues(props) {
  return (
    <Box
      id="corevalues"
      class={styles.corevalues}
      sx={{
        ...props.sx,
      }}
    >
      <Box className={styles.corevalue}>
        <img className={styles.corevalue_icon} src={qualitySvg} alt="quality" />
        <Section
          id="section-quality"
          className={styles.corevalue_section}
          // header="QUALITY"
          paragraph="We strive to be the best quality home care. This is accomplished by hiring, training, and retaining highly qualified caregivers."
        />
      </Box>
      <Box className={styles.corevalue}>
        <img
          className={styles.corevalue_icon}
          src={flexibilitySvg}
          alt="flexibility"
        />
        <Section
          id="section-flexibity"
          className={styles.corevalue_section}
          // header="FLEXIBILITY"
          paragraph="We provide the flexible service menu and schedule to accommodate a variety of home care needs and fulfill the individual needs of every client."
        />
      </Box>
      <Box className={styles.corevalue}>
        <img
          className={styles.corevalue_icon}
          src={integritySvg}
          alt="integrity"
        />
        <Section
          id="section-integrity"
          className={styles.corevalue_section}
          // header="INTEGRITY"
          paragraph="We will maintain the utmost respect and honestly with our clients, employees, and community."
        />
      </Box>
    </Box>
  );
}

export default CoreValues;
