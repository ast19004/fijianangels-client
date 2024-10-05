import { Box, Typography } from "@mui/material";

import styles from "./OfficeAddress.module.css";

const OfficeAddress = (props) => {
  return (
    <Box
      component="section"
      className={`${styles.office} ${props.className}`}
      sx={{ ...props.sx }}
    >
      <Typography
        className={`${styles.office_title} ${
          props.mainOffice && styles["office_title-main"]
        }`}
        component={"h3"}
      >
        {props.officeTitle}
      </Typography>
      <Typography className={styles.office_coverage} color="#555">
        {props.officeCoverage}
      </Typography>
      <Typography className={styles.office_address}>
        {props.officeAddress}
      </Typography>
    </Box>
  );
};

export default OfficeAddress;
