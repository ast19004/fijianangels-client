import { Box } from "@mui/material";
import StyledHeader from "../Styling/StyledHeader";
import StyledParagraph from "../Styling/StyledParagraph";

function Section(props) {
  return (
    <Box
      id={props.id}
      className={props.className}
      key={props.id}
      component="section"
      sx={{ margin: "10px 0", ...props.sx }}
    >
      <StyledHeader
        headerColor={props.headerColor}
        displayBlock={props.displayBlock}
        headerFontWeight={props.headerFontWeight}
      >
        {props.header}
      </StyledHeader>
      {props.multiParagraph ? (
        props.multiParagraph.map((paragraph, index) => (
          <StyledParagraph
            key={index}
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
