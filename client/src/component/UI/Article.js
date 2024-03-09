import { Box } from "@mui/material";
import styled from "styled-components";

const StyledHeader = styled.h2`
  color: #ca4766;
`;

function Article(props) {
  return (
    <Box
      component="article"
      id={props.id}
      key={props.id}
      sx={{ margin: "10% 0" }}
    >
      <StyledHeader>{props.header}</StyledHeader>
      {props.children}
    </Box>
  );
}

export default Article;
