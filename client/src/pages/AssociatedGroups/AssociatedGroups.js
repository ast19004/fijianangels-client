import { Box, Typography } from "@mui/material";
import styles from "./AssociatedGroups.module.css";

const AssociatedGroups = (props) => {
  return (
    <Box className={styles.groups}>
      <Typography
        textAlign="center"
        fontStyle="italic"
        fontSize="1.5rem"
        color="rgba(202, 71, 101, 0.7)"
      >
        Thank you to these groups
      </Typography>
      <ul className={styles.groups_list}>
        <li className={styles.group_list_item}>
          <a
            className={styles.group_link}
            href="https://www.rceb.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="image-responsive"
              src="https://www.krjhealthcare.com/wp-content/themes/krjhealthna446/images/footer/rceb-logo.png"
              alt="RCEB logo"
            />
          </a>
        </li>
        <li className={styles.group_list_item}>
          <a
            className={styles.group_link}
            href="https://www.ggrc.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="image-responsive"
              src="https://www.krjhealthcare.com/wp-content/themes/krjhealthna446/images/footer/ggrc-logo.png"
              alt="ggrc logo"
            />
          </a>
        </li>
      </ul>
    </Box>
  );
};

export default AssociatedGroups;
