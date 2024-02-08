import Article from "../component/UI/Article";
import Section from "../component/UI/Section";
import styled from "styled-components";

const StyledParagraph = styled.p`
  color: #ca4766;
`;

function Pricing() {
  return (
    <Article header="Pricing">
      <Section
        header="HOURLY RATE"
        paragraph="$35/HR with MINIMUM OF 5 consecutive hours."
      />
      <Section header="24 Hour Care" paragraph="$20/HR-$25/HR" />
      <Section
        header="$35/HR for"
        headerColor="#066988"
        headerFontWeight="normal"
        paragraph="anything from 8hours-12hours"
        paragraphColor="#ca4766"
      />
      <StyledParagraph>
        Caregiver Placement Fee is a one time non-refundable fee... For placing
        a caregiver in a home of a client.
      </StyledParagraph>
    </Article>
  );
}

export default Pricing;
