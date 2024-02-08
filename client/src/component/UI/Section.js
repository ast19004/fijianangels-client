import styled from "styled-components";

const StyledHeader = styled.h3`
  color: ${(props) => (props.headerColor ? props.headerColor : "#ca4766")};
  display: ${(props) => (!props.displayBlock ? "inline" : "block")};
  font-weight: ${(props) =>
    props.headerFontWeight ? props.headerFontWeight : "bold"};
`;
const StyledParagraph = styled.p`
  color: ${(props) =>
    props.paragraphColor ? props.paragraphColor : "#066988"};
  display: inline;
`;

function Section(props) {
  return (
    <section>
      <StyledHeader
        headerColor={props.headerColor}
        displayBlock={props.displayBlock}
        headerFontWeight={props.headerFontWeight}
      >
        {props.header}
      </StyledHeader>
      &nbsp;
      <StyledParagraph
        paragraphColor={props.paragraphColor}
        displayBlock={props.displayBlock}
      >
        {props.paragraph}
      </StyledParagraph>
    </section>
  );
}

export default Section;
