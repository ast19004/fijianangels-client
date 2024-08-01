import Section from "../component/UI/Section";
import Article from "../component/UI/Article";
import { Button } from "@mui/material";

function Contact() {
  return (
    <Article header="Contact" id="contact">
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
      />
      <Section
        id="section-hours"
        displayBlock
        header="HOURS OF OPERATION"
        multiParagraph={[
          "Monday-Friday",
          "9:00am-7:00pm",
          "SERVING EAST BAY, SAN FRANCISCO, SAN MATEO, PALO ALTO AND MARIN COUNTY",
        ]}
        lineHeight={1.2}
      />
    </Article>
  );
}

export default Contact;
