import { Box, Typography } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ContactLink from "../../component/UI/Links/ContactLink";

import love_hand_gesture_500px from "../../assests/images/love_hand_gesture/love_hand_gesture_500px.jpg";
import love_hand_gesture_800px from "../../assests/images/love_hand_gesture/love_hand_gesture_800px.jpg";
import love_hand_gesture_1024px from "../../assests/images/love_hand_gesture/love_hand_gesture_1024px.jpg";
import love_hand_gesture_1500px from "../../assests/images/love_hand_gesture/love_hand_gesture-1500px.jpg";

const Staff = (props) => {
  return (
    <Box
      sx={{
        disply: "grid",
        justifyContent: "center",
        height: "max-content",
        width: "94vw",
        maxWidth: "68rem",
        margin: "0 auto",
      }}
    >
      <Box
        sx={{
          margin: "0 auto",
          height: "12rem",
          width: "100%",
          marginBottom: "1rem",
          borderRadius: "2rem 2rem 0 0",
          backgroundImage: `url(${love_hand_gesture_500px})`,
          backgroundPosition: "top 20% left",
          backgroundSize: "cover",
          "@media(min-width: 30rem)": {
            backgroundImage: `url(${love_hand_gesture_800px})`,
          },
          "@media(min-width: 49rem)": {
            backgroundImage: `url(${love_hand_gesture_1024px})`,
          },
          "@media(min-width: 63rem)": {
            backgroundImage: `url(${love_hand_gesture_1500px})`,
          },
        }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "4rem",
          "@media(min-width: 40rem)": { flexDirection: "row", gap: "2rem" },
        }}
      >
        <Box
          sx={{
            alignSelf: "center",
            "@media(min-width: 40rem)": { alignSelf: "flex-start" },
          }}
        >
          <Box
            sx={{
              height: "15rem",
              width: "15rem",
              backgroundColor: "rgba(70, 150, 255, 0.3)",
              border: "1px solid rgba(70, 150, 255, 1)",
              borderRadius: "1rem",
              opacity: 0.5,
            }}
          />
          {/* <img src="" alt="Anaseini Coloata" /> */}
        </Box>
        <Box component="section">
          <ContactLink href="anaseini@fijianangelshomecare.info">
            <Typography
              component="h3"
              variant="h4"
              color="rgba(100, 150, 255, 1)"
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
              color="rgba(100, 150, 255, 1)"
              sx={{
                textAlign: "center",
                "@media(min-width: 40rem)": { textAlign: "left" },
              }}
            >
              Founder & Chief Executive Officer, CEO
            </Typography>
          </ContactLink>
          <Typography color="rgba(2, 26, 51, 0.9)">
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

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          "@media(min-width: 40rem)": {
            flexDirection: "row-reverse",
            gap: "2rem",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignSelf: "center",
            "@media(min-width: 40rem)": {
              flexDirection: "row",
              gap: "2rem",
              alignSelf: "flex-end",
            },
          }}
        >
          <Box
            sx={{
              height: "15rem",
              width: "15rem",
              backgroundColor: "rgba(70, 150, 255, 0.3)",
              border: "1px solid rgba(70, 150, 255, 1)",
              borderRadius: "1rem",
            }}
          />
          {/* <img src="" alt="Anaseini Coloata" /> */}
        </Box>
        <Box component="section">
          <ContactLink href="tava@fijianangelshomecare.info">
            <Typography
              component="h3"
              variant="h4"
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
            color="rgba(2, 26, 51, 0.9)"
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
