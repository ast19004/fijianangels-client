import { Box } from "@mui/material";
import "./App.css";
import Footer from "./component/Layout/Footer";
import Contact from "./pages/Contact";
import CoreValues from "./pages/CoreValues";
import Pricing from "./pages/Pricing";
import Services from "./pages/Services";
import Staff from "./pages/Staff";
import Header from "./component/Layout/Header";
import Background from "./component/Layout/Background";
import EmploymentForm from "./component/UI/Forms/EmploymentForm";

function App() {
  return (
    <div className="App">
      <Header />
      <Background />
      <main>
        <CoreValues />
        <Staff />
        <Services />
        <Pricing />
        <Contact />
      </main>
      <Box sx={{ height: "50px" }} />
      <Footer />
      <EmploymentForm></EmploymentForm>
    </div>
  );
}

export default App;
