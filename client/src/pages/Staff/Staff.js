import { Box, Typography } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ContactLink from "../../component/UI/Links/ContactLink";

import styles from "./Staff.module.css";

const Staff = (props) => {
  return (
    <Box className={styles.staff}>
      <Box className={styles.staff_header}>
        <Typography
          align="center"
          sx={{
            position: "absolute",
            bottom: "2%",
            left: "2%",
            textShadow: "0px 0px 2px #111",
            color: "white",
            background: "rgba(100,100,100,0.1)",
            borderRadius: "5rem",
            padding: "2%",
            fontSize: "1.3rem",
            letterSpacing: "0.1rem",
            "@media(min-width: 49rem)": { fontSize: "1.5rem" },
            "@media(min-width: 63rem)": { fontSize: "2rem" },
          }}
        >
          <b>Providing compassionate care for your loved ones</b>
        </Typography>
      </Box>
      <Box className={`${styles.staff_member} ${styles.staff_member1}`}>
        <Box className={styles.staff_member1_img}>
          <Box className={styles.staff_img_background} />
        </Box>
        <Box component="section" className={styles.staff_member_text}>
          <ContactLink href="anaseini@fijianangelshomecare.info">
            <Typography
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
              Founder & Chief Executive Officer, CEO
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

      <Box className={`${styles.staff_member} ${styles.staff_member2}`}>
        <Box className={styles.staff_member2_img}>
          <Box className={styles.staff_img_background} />
        </Box>
        <Box component="section">
          <ContactLink href="tava@fijianangelshomecare.info">
            <Typography
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
              <b>Tava Setareki</b>
              <Typography
                component="p"
                color="rgba(100, 150, 255, 1)"
                sx={{
                  textAlign: "center",
                  "@media(min-width: 40rem)": { textAlign: "right" },
                }}
              >
                Chief Operations Officer (COO)
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
            Tava is a native of Fiji, born and raised with a deep appreciation
            for community and care. She has over twelve years of professional
            experience in the senior care industry, where she has managed care
            services, business administration, and home care operations. Tava is
            eager to embark on the next phase of her career, utilizing her
            professional expertise and education in Business Administration as
            she steps into a pivotal role as an Administrator and business
            owner. As a Certified RCFE Administrator, Tava takes pride in
            delivering high-quality care, fostering strong relationships with my
            team, the community, and healthcare professionals. Tava's passion
            lies in working with seniors, enriching their lives, and creating a
            positive, lasting impact through her work. Personally, she is am
            married and the proud mother of three wonderful children. In her
            free time, she enjoys journaling, cooking with her family, and
            listening to music.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Staff;
