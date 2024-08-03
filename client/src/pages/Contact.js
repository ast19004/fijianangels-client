import Section from "../component/UI/Section";
import Article from "../component/UI/Article";
import StyledParagraph from "../component/Styling/StyledParagraph";
import StyledHeader from "../component/Styling/StyledHeader";

function Contact() {
  return (
    <Article
      header=""
      id="contact"
      sx={{
        "@media(min-width: 660px)": {
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          maxWidth: "725px",
          justifySelf: "center",
          alignSelf: "center",
        },
      }}
    >
      <StyledHeader
        sx={{ gridColumn: "1 / 3", display: "block", textAlign: "center" }}
      >
        We look forward to hearing from you
      </StyledHeader>
      <StyledParagraph paragraphColor={"#ca4766"} sx={{ gridColumn: "1 / 3" }}>
        SERVING EAST BAY, SAN FRANCISCO, SAN MATEO, PALO ALTO AND MARIN COUNTY
      </StyledParagraph>
      <Section
        id="section-hours"
        displayBlock
        header=""
        multiParagraph={["Monday-Friday", "9:00am-7:00pm"]}
        lineHeight={1.2}
        sx={{ gridColumn: "1/2" }}
      />
      <Section
        id="section-phone"
        displayBlock
        header=""
        multiParagraph={[
          "Office # 510-612-7595 / 650-518-0532",
          "510-812-9475",
          "724-434-4646",
        ]}
        lineHeight={1.2}
        sx={{ alignSelf: "end" }}
      />
    </Article>
  );
}

export default Contact;
