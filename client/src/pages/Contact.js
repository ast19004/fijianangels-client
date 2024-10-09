import StyledHeader from "../component/Styling/StyledHeader";

import logo from "../assests/images/svg/fijian_angels_logo-+name.svg";
import { Box, Typography } from "@mui/material";
import Locations from "./Locations/Locations";
import PhoneLink from "../component/UI/Links/PhoneLink/PhoneLink";
import ContactLink from "../component/UI/Links/ContactLink";

function Contact() {
  return (
    <Box
      id="contact"
      sx={{
        border: "3px solid rgba(100, 150, 255, 0.25)",
        borderRadius: "2rem",
        width: "96%",
        maxWidth: "67.5rem",
        padding: "3rem 4%",
        display: "grid",
        justifySelf: "center",
        alignSelf: "center",
        margin: "0 auto",
        "@media(min-width: 62rem)": { padding: "3rem", gap: "2rem" },
      }}
    >
      <Box
        component="section"
        sx={{
          padding: "2rem 2rem 0 0.5rem ",
          marginBottom: "1rem",
          backgroundColor: "rgba(100, 150, 255, 0.25)",
          borderRadius: "2rem 2rem 4rem 0",
        }}
      >
        <StyledHeader
          sx={{
            display: "block",
            textAlign: "center",
            fontSize: "1rem",
            color: "white",
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
            textShadow: "1px 1px 2px #888",
            marginBottom: "2rem",
            fontSize: "2.3rem",
          }}
          textAlign="center"
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
          "@media(min-width: 60rem)": {
            marginTop: "1rem",
          },
        }}
      >
        <Box
          sx={{
            display: "block",
            margin: "0 auto",
            height: "9.5rem",
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
            color: "#555",
            letterSpacing: "0.1rem",
          }}
        >
          <b>admin@fijianangelshomecare.info</b>
        </ContactLink>
        <Box id="section-phone">
          <Typography
            color="#555"
            lineHeight={2}
            sx={{ textAlign: "center", opacity: 0.5 }}
          >
            <PhoneLink tel="5106127595">(510) 612-7595</PhoneLink> /{" "}
            <PhoneLink tel="6505180532">(650) 518-0532</PhoneLink>
          </Typography>
          <Typography
            color="#555"
            lineHeight={2}
            sx={{ textAlign: "center", opacity: 0.5 }}
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
