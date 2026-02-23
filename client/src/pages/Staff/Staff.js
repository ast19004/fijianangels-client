import { Box, Typography } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ContactLink from "../../component/UI/Links/ContactLink";

import styles from "./Staff.module.css";

const Staff = (props) => {
  return (
    <Box className={styles.staff}>
      <Box className={styles.staff_head}>
        <Typography
          className={`font_logo ${styles.staff_head_text}`}
          align="center"
        >
          <b>Providing compassionate care for your loved ones</b>
        </Typography>
      </Box>
      <Box className={`${styles.staff_member} ${styles.staff_member1}`}>
        <Box className={styles.staff_member1_thumbail}>
          <Box className={styles.staff_img_background} />
          <Box
            className={`${styles.staff_member_img} ${styles.staff_member1_img}`}
          />
        </Box>
        <Box component="section" className={styles.staff_member_text}>
          <ContactLink href="anaseini@fijianangelshomecare.info">
            <Typography
              className="font_logo"
              component="h3"
              variant="p"
              sx={{
                textAlign: "center",
                "@media(min-width: 40rem)": { textAlign: "left" },
              }}
            >
              <b>Anaseini Colata</b>
              <Box
                component="span"
                sx={{ display: "inline-block", padding: "0 0.25rem" }}
              >
                <EmailOutlinedIcon />
              </Box>
            </Typography>
            <Typography
              component="p"
              sx={{
                textAlign: "center",
                "@media(min-width: 40rem)": { textAlign: "left" },
              }}
            >
              Co-Founder & Chief Executive Officer, CEO
            </Typography>
          </ContactLink>
          <Typography className={styles.staff_member_desciption}>
            Originally from Fiji, Anaseini embarked on her caregiving journey
            after migrating to the United States at a young age. She grew up
            with a strong sense of family and compassion, which shaped her deep
            commitment to caring for others. Anaseini pursued higher education
            at BYU Hawaii, where she earned her degree. After graduating,
            Anaseini relocated to California, where she obtained her formal
            certification and began working as a private caregiver. Her
            experience and dedication in the field eventually inspired her to
            start her own in-home care agency, providing compassionate care and
            support to those in need.
          </Typography>
        </Box>
      </Box>

      {/* <Box className={`${styles.staff_member} ${styles.staff_member2}`}>
        <Box className={styles.staff_member2_thumbnail}>
          <Box className={styles.staff_img_background} />
          <Box
            className={`${styles.staff_member_img} ${styles.staff_member2_img}`}
          />
        </Box>
        <Box component="section">
          <ContactLink href="tava@fijianangelshomecare.info">
            <Typography
              className="font_logo"
              component="h3"
              variant="p"
              color="rgba(100, 150, 255, 1)"
              sx={{
                textAlign: "center",
                "@media(min-width: 40rem)": { textAlign: "right" },
              }}
            >
              <Box
                component="span"
                sx={{ display: "inline-block", padding: "0 0.25rem" }}
              >
                <EmailOutlinedIcon />
              </Box>
              <b>?</b>
              <Typography
                component="p"
                color="rgba(100, 150, 255, 1)"
                sx={{
                  textAlign: "center",
                  "@media(min-width: 40rem)": { textAlign: "right" },
                }}
              >
                Co-Founder & Chief Operations Officer (COO)
              </Typography>
            </Typography>
          </ContactLink>
          <Typography
            className={styles.staff_member_desciption}
            sx={{
              textAlign: "left",
              "@media(min-width: 40rem)": { textAlign: "right" },
            }}
          >
           ?
          </Typography>
        </Box>
      </Box> */}
    </Box>
  );
};

export default Staff;
