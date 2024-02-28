import { Box } from "@mui/material";
import styled from "styled-components";

const StyledHeader = styled.h3`
  color: ${(props) => (props.headerColor ? props.headerColor : "#ca4766")};
  display: ${(props) => (!props.displayBlock ? "inline" : "block")};
  font-weight: ${(props) =>
    props.headerFontWeight ? props.headerFontWeight : "bold"};
`;
const StyledParagraph = styled.p`
  line-height: ${(props) => props.lineHeight || 1.7};
  color: ${(props) => props.paragraphColor || "#066988"};
  display: ${(props) => (!props.displayBlock ? "inline" : "block")};
`;

function Section(props) {
  return (
    <Box component="section" sx={{ margin: "10px 0" }}>
      <StyledHeader
        headerColor={props.headerColor}
        displayBlock={props.displayBlock}
        headerFontWeight={props.headerFontWeight}
      >
        {props.header}
      </StyledHeader>
      {props.multiParagraph ? (
        props.multiParagraph.map((paragraph) => (
          <StyledParagraph
            lineHeight={props.lineHeight}
            paragraphColor={props.paragraphColor}
            displayBlock={props.displayBlock}
          >
            {paragraph}
          </StyledParagraph>
        ))
      ) : (
        <>
          &nbsp;
          <StyledParagraph
            paragraphColor={props.paragraphColor}
            displayBlock={props.displayBlock}
          >
            {props.paragraph}
          </StyledParagraph>
        </>
      )}
    </Box>
  );
}

export default Section;
