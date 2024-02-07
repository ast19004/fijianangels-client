import Section from "../component/UI/Section";
import styled from "styled-components";

const StyledHeader = styled.h2`
  color: #ca4766;
`;

function CoreValues() {
  return (
    <article>
      <StyledHeader>OUR CORE VALUES</StyledHeader>
      <Section
        header="QUALITY"
        paragraph="We strive to be the best quality home care. This is accomplished by hiring, training, and retaining highly qualified caregivers."
      />
      <br />
      <Section
        header="FLEXIBILITY"
        paragraph="We provide the flexible service menu and schedule to accommodate a variety of home care needs and fulfill the individual needs of every client."
      />
      <br />
      <Section
        header="INTEGRITY"
        paragraph="We will maintain the utmost respect and honestly with our clients, employees, and community."
      />
    </article>
  );
}

export default CoreValues;
