import StyledHeader from "../component/Styling/StyledHeader";

import logo from "../assests/images/svg/fijian_angels_logo-+name.svg";
import { Box, Typography } from "@mui/material";
import Locations from "./Locations/Locations";
import PhoneLink from "../component/UI/Links/PhoneLink/PhoneLink";
import ContactLink from "../component/UI/Links/ContactLink";

// Contact 1 image
import contact1_500px from "../assests/images/contact/contact1/contact1_500px.jpg";
import contact1_800px from "../assests/images/contact/contact1/contact1_800px.jpg";
import contact1_1024px from "../assests/images/contact/contact1/contact1_1024px.jpg";
import contact1_1500px from "../assests/images/contact/contact1/contact1_1500px.jpg";

// Contact 2 Image
import contact2_500px from "../assests/images/contact/contact2/contact2_1500px.jpg";
import contact2_800px from "../assests/images/contact/contact2/contact2_800px.jpg";
import contact2_1024px from "../assests/images/contact/contact2/contact2_1024px.jpg";
import contact2_1500px from "../assests/images/contact/contact2/contact2_1500px.jpg";

function Contact() {
  return (
    <Box
      id="contact"
      sx={{
        width: "96%",
        maxWidth: "67.5rem",
        display: "grid",
        justifySelf: "center",
        alignSelf: "center",
        margin: "0 auto",
        "@media(min-width: 62rem)": {
          // border: "3px solid rgba(100, 150, 255, 0.25)",
          borderRadius: "2.2rem",
          gap: "2rem",
        },
      }}
    >
      <Box
        component="section"
        sx={{
          padding: "2rem 2rem 0 2% ",
          marginBottom: "1rem",
          borderRadius: "2rem 2rem 4rem 0",
          backgroundImage: `url(${contact1_500px})`,
          backgroundPosition: "top left 65%",
          backgroundSize: "cover",
          "@media(min-width: 30rem)": {
            backgroundImage: `url(${contact1_800px})`,
          },
          "@media(min-width: 41rem)": {
            backgroundPosition: "top left 35%",
          },
          "@media(min-width: 49rem)": {
            backgroundImage: `url(${contact1_1024px})`,
          },
          "@media(min-width: 63rem)": {
            backgroundImage: `url(${contact1_1500px})`,
          },
        }}
      >
        <StyledHeader
          sx={{
            display: "block",
            fontSize: "0.85rem",
            color: "rgba(150,150,150, 1)",
            "@media(min-width: 62rem)": {
              fontSize: "1.8rem",
              letterSpacing: "0.1rem",
              lineHeight: "0.5",
            },
          }}
        >
          We look forward to hearing from you
        </StyledHeader>
        <Typography
          id="section-hours"
          color="white"
          sx={{
            textShadow: "0px 0px 2px #111",
            marginBottom: "2rem",
            fontSize: "2rem",
            "@media(min-width: 42rem)": {
              fontSize: "2.3rem",
            },
          }}
        >
          <b>Monday-Friday 9:00am-7:00pm</b>
        </Typography>
      </Box>
      <Box
        sx={{
          display: "grid",
          gap: "2rem",
          "@media(min-width: 60rem)": { gridTemplateColumns: "1fr 2fr" },
        }}
      >
        <Locations />
        <Box
          sx={{
            width: "100%",
            height: "100%",
            minHeight: "30rem",
          }}
        >
          <iframe
            title="Fijian Angels Homecare Locations"
            src="https://www.google.com/maps/d/u/2/embed?mid=1LGXGyj9ZQwug3XS6Tedyugb_lBSVi_0&ehbc=2E312F&noprof=1"
            width="100%"
            height="100%"
          ></iframe>
        </Box>
      </Box>

      <Box
        sx={{
          display: "grid",
          justifyContent: "center",
          marginTop: "2rem",
          padding: "1rem 0",
          borderRadius: "2rem",
          backgroundColor: "rgba(255, 255, 255, 0.7)",

          "@media(min-width: 37rem)": {
            padding: "2% 12% 2% 2%",
            justifyContent: "end",
            marginTop: "1rem",
            opacity: "0.9",
            backgroundImage: `url(${contact2_800px})`,
            backgroundPosition: "top left 35%",
            backgroundSize: "cover",
          },
          "@media(min-width: 42rem)": {
            backgroundPosition: "top left 35%",
          },
          "@media(min-width: 49rem)": {
            backgroundImage: `url(${contact2_1024px})`,
          },
          "@media(min-width: 6rem)": {
            backgroundImage: `url(${contact2_1500px})`,
          },
        }}
      >
        <Box
          sx={{
            display: "block",
            margin: "0 auto",
            height: "9.5rem",
            "@media(min-width: 42rem)": {
              height: "5rem",
            },
          }}
        >
          <img
            className="image-responsive"
            src={logo}
            alt="Fijian Angels Logo"
          />
        </Box>
        <ContactLink
          href="admin@fijianangelshomecare.info"
          sx={{
            color: "#111",
            letterSpacing: "0.1rem",
          }}
        >
          <b>admin@fijianangelshomecare.info</b>
        </ContactLink>
        <Box id="section-phone">
          <Typography
            color="#111"
            lineHeight={2}
            sx={{
              textAlign: "center",
              opacity: 0.5,
              "@media(min-width(42rem))": {
                textAlign: "right",
              },
            }}
          >
            <PhoneLink tel="5106127595">(510) 612-7595</PhoneLink> /{" "}
            <PhoneLink tel="6505180532">(650) 518-0532</PhoneLink>
          </Typography>
          <Typography
            color="#111"
            lineHeight={2}
            sx={{
              textAlign: "center",
              opacity: 0.5,
              "@media(min-width(42rem))": {
                textAlign: "right",
              },
            }}
          >
            <PhoneLink tel="5108129475">(510) 812-9475</PhoneLink>{" "}
            <PhoneLink tel="7244344646">(724) 434-4646</PhoneLink>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Contact;
