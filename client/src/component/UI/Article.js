import styled from "styled-components";

const StyledHeader = styled.h2`
  color: #ca4766;
`;

function Article(props) {
  return (
    <article>
      <StyledHeader>{props.header}</StyledHeader>
      {props.children}
    </article>
  );
}

export default Article;
