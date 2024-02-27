import Article from "../component/UI/Article";
import Section from "../component/UI/Section";

function CoreValues() {
  return (
    <Article header="OUR CORE VALUES" id="corevalues">
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
    </Article>
  );
}

export default CoreValues;
