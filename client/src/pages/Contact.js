import Section from "../component/UI/Section";
import Article from "../component/UI/Article";
import { Button } from "@mui/material";

function Contact() {
  return (
    <Article header="Contact" id="contact">
      <Section
        displayBlock
        header=""
        multiParagraph={[
          "Office # 510-612-7595",
          "510-812-9475",
          "650-518-0532",
          "724-434-4646",
        ]}
        lineHeight={1.2}
      />
      <Section
        displayBlock
        header="HOURS OF OPERATION"
        multiParagraph={[
          "Monday-Friday",
          "9:00am-7:00pm",
          "SERVING EAST BAY, SAN FRANCISCO, SAN MATEO, PALO ALTO AND MARIN COUNTY",
        ]}
        lineHeight={1.2}
      />
      <Button
        href="/caregiver-review-form"
        style={{
          borderColor: "#CA4766",
          color: "#CA4766",
          backgroundColor: "rgba(6,105,136, .2)",
          padding: "12px 36px",
          fontSize: "18px",
          margin: "3% 0",
        }}
        variant="outlined"
      >
        SEND CAREGIVER REVIEW
      </Button>
    </Article>
  );
}

export default Contact;
