import styled from "styled-components";

const StyledHeader = styled.h3`
  display: inline;
  color: #ca4766;
`;
const StyledParagraph = styled.p`
  display: inline;
  color: #066988;
`;

function Section(props) {
  return (
    <section>
      <StyledHeader> {props.header}</StyledHeader>
      &nbsp;
      <StyledParagraph>{props.paragraph}</StyledParagraph>
    </section>
  );
}

export default Section;
