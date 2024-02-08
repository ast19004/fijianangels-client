import styled from "styled-components";

const StyledHeader = styled.h3`
  color: #ca4766;
  display: ${(props) => (!props.displayBlock ? "inline" : "block")};
`;
const StyledParagraph = styled.p`
  color: #066988;
  display: inline;
`;

function Section(props) {
  return (
    <section>
      <StyledHeader>{props.header}</StyledHeader>
      &nbsp;
      <StyledParagraph>{props.paragraph}</StyledParagraph>
    </section>
  );
}

export default Section;
