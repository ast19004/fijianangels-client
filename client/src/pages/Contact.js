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
        borderRadius: "2rem",
        background: "rgba(70, 150, 255, 0.3)",
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
      <Box component="section">
        <StyledHeader
          sx={{
            display: "block",
            textAlign: "center",
            fontSize: "1.2rem",
            color: "white",
            "@media(min-width: 62rem)": {
              fontSize: "1.8rem",
              letterSpacing: "0.1rem",
            },
          }}
        >
          We look forward to hearing from you
        </StyledHeader>
        <Typography
          id="section-hours"
          color="white"
          sx={{
            textShadow: "1px 1px 2px rgba(70, 150, 255, 0.8)",
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
        }}
      >
        <Box sx={{ display: "block", margin: "0 auto", height: "9.5rem" }}>
          <img
            className="image-responsive"
            src={logo}
            alt="Fijian Angels Logo"
          />
        </Box>
        <ContactLink
          href="admin@fijianangelshomecare.info"
          sx={{
            color: "#444",

            letterSpacing: "0.1rem",
          }}
        >
          admin@fijianangelshomecare.info
        </ContactLink>
        <Box id="section-phone">
          <Typography
            color="rgba(2, 26, 51, 0.9)"
            lineHeight={2}
            sx={{ textAlign: "center" }}
          >
            <PhoneLink tel="5106127595">
              <b>(510) 612-7595</b>
            </PhoneLink>{" "}
            /{" "}
            <PhoneLink tel="6505180532">
              <b>(650) 518-0532</b>
            </PhoneLink>
          </Typography>
          <Typography
            color="rgba(2, 26, 51, 0.9)"
            lineHeight={2}
            sx={{ textAlign: "center" }}
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
