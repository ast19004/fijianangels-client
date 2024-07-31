import Article from "../component/UI/Article";
import Section from "../component/UI/Section";

function CoreValues() {
  return (
    <Article
      header=""
      id="corevalues"
      sx={{ margin: 0, padding: "10px 0 20px 0" }}
      variant="h5"
    >
      <Section
        id="section-quality"
        header="QUALITY"
        paragraph="We strive to be the best quality home care. This is accomplished by hiring, training, and retaining highly qualified caregivers."
      />
      <Section
        id="section-flexibity"
        header="FLEXIBILITY"
        paragraph="We provide the flexible service menu and schedule to accommodate a variety of home care needs and fulfill the individual needs of every client."
      />
      <Section
        id="section-integrity"
        header="INTEGRITY"
        paragraph="We will maintain the utmost respect and honestly with our clients, employees, and community."
      />
    </Article>
  );
}

export default CoreValues;
