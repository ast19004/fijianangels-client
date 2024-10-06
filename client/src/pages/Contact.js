import StyledHeader from "../component/Styling/StyledHeader";

import logo from "../assests/images/svg/fijian_angels_logo-+name.svg";
import { Box, Link, Typography } from "@mui/material";
import Locations from "./Locations/Locations";
import PhoneLink from "../component/UI/Links/PhoneLink/PhoneLink";

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
        "@media(min-width: 62rem)": { padding: "3rem" },
      }}
    >
      <StyledHeader
        sx={{
          display: "block",
          textAlign: "center",
          fontSize: "1.2rem",
          paddingBottom: "1rem",
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
        variant="h2"
        color="white"
        sx={{
          textShadow: "1px 1px 2px rgba(70, 150, 255, 0.8)",
          marginBottom: "2rem",
        }}
        textAlign="center"
      >
        <b>Monday-Friday 9:00am-7:00pm</b>
      </Typography>
      {/* <StyledParagraph
        paragraphColor={"#ca4766"}
        sx={{
          textAlign: "center",
          paddingTop: "1rem",
          "@media(min-width: 62rem)": {
            fontSize: "1.2rem",
          },
        }}
      >
        SERVING EAST BAY, SAN FRANCISCO, SAN MATEO, PALO ALTO AND MARIN COUNTY
      </StyledParagraph> */}
      <Box
        sx={{
          display: "grid",
          gap: "2rem",
          "@media(min-width: 60rem)": { gridTemplateColumns: "1fr 2fr" },
        }}
      >
        <Locations />
        <Link
          sx={{ display: "block", margin: "0 auto" }}
          href="https://maps.app.goo.gl/dHBcG3DWVfJFgu9z9"
          underline="none"
          // sx={{ justifySelf: "center" }}
          target="_blank"
          rel="noopener"
        >
          <img
            className="image-responsive"
            src={logo}
            alt="Fijian Angels Logo"
          />
        </Link>

        <Box
          sx={{
            display: "grid",
            // alignItems: "center",
          }}
        >
          <Box
            id="section-phone"
            sx={{
              marginBottom: "3rem",
            }}
          >
            <Typography
              color="rgba(2, 26, 51, 0.9)"
              lineHeight={2}
              sx={{ textAlign: "center" }}
            >
              Office # <PhoneLink tel="5106127595">(510)612-7595</PhoneLink> /{" "}
              <PhoneLink tel="6505180532">(650)518-0532</PhoneLink>
            </Typography>
            <Typography
              color="rgba(2, 26, 51, 0.9)"
              lineHeight={2}
              sx={{ textAlign: "right" }}
            >
              <PhoneLink tel="5108129475">(510)812-9475</PhoneLink>{" "}
              <PhoneLink tel="7244344646">(724)434-4646</PhoneLink>
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: "rgba(0,0,0,0.2)",
              height: "25rem",
              width: "100%",
              borderRadius: "2rem",
              "@media(min-width: 60rem)": { height: "100%" },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Contact;
