import Section from "../component/UI/Section";
import Article from "../component/UI/Article";
import StyledParagraph from "../component/Styling/StyledParagraph";
import StyledHeader from "../component/Styling/StyledHeader";

import logoWithAddress from "../assests/images/svg/fijianangelslogo_address.svg";
import { Box, Link, Tooltip, tooltipClasses, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

function Contact() {
  return (
    <Article
      header=""
      id="contact"
      sx={{
        background: "white",
        width: "100%",
        maxWidth: "67.5rem",
        padding: "1rem",
        display: "grid",
        justifySelf: "center",
        alignSelf: "center",
      }}
    >
      <StyledHeader sx={{ display: "block", textAlign: "center" }}>
        We look forward to hearing from you
      </StyledHeader>
      <StyledParagraph
        paragraphColor={"#ca4766"}
        sx={{ textAlign: "center", marginBottom: "-2rem" }}
      >
        SERVING EAST BAY, SAN FRANCISCO, SAN MATEO, PALO ALTO AND MARIN COUNTY
      </StyledParagraph>
      <HtmlTooltip
        title={
          <>
            <Typography>
              <em>Navigate to:</em>
            </Typography>
            <Typography variant="h6">8784 Twinberry Way,</Typography>
            <Typography variant="h6">Elk Grove, CA, 95624</Typography>
            <Typography>
              <em>on Google Maps</em>
            </Typography>
          </>
        }
      >
        <Link
          href="https://maps.app.goo.gl/dHBcG3DWVfJFgu9z9"
          underline="none"
          sx={{ justifySelf: "center" }}
          target="_blank"
          rel="noopener"
        >
          <img
            className="image-responsive"
            src={logoWithAddress}
            alt="8784 Twinberry Way, Elk Grove, CA-95624"
          />
        </Link>
      </HtmlTooltip>
      <Box
        sx={{
          justifySelf: "center",
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: "2rem",
          marginTop: "-4rem",
        }}
      >
        <Section
          id="section-hours"
          displayBlock
          header=""
          multiParagraph={["Monday-Friday", "9:00am-7:00pm"]}
          lineHeight={1.2}
          sx={{
            textAlign: "right",
          }}
        />
        <Section
          id="section-phone"
          displayBlock
          header=""
          multiParagraph={[
            "Office # (510)612-7595 / (650)518-0532",
            "(510)812-9475 (724)434-4646",
          ]}
          lineHeight={1.2}
        />
      </Box>
    </Article>
  );
}

export default Contact;

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
    boxShadow: "5px 5px 5px #888",
  },
}));
