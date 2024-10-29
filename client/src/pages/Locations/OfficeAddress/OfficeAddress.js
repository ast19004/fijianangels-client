import { Box, Typography } from "@mui/material";

import styles from "./OfficeAddress.module.css";

const OfficeAddress = (props) => {
  return (
    <Box
      component="section"
      className={`${styles.office} ${props.mainOffice && styles.office_main} ${
        props.className
      }`}
      sx={{ ...props.sx }}
    >
      <Typography className={styles.office_title} component={"h3"}>
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
