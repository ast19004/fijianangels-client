// import logo from "./logo.svg";
import { Box } from "@mui/material";
import "./App.css";
import Footer from "./component/Layout/Footer";
import Contact from "./pages/Contact";
import CoreValues from "./pages/CoreValues";
import Pricing from "./pages/Pricing";
import Services from "./pages/Services";
import Staff from "./pages/Staff";

function App() {
  return (
    <div className="App">
      <main>
        <CoreValues />
        <Staff />
        <Services />
        <Pricing />
        <Contact />
      </main>
      <Box sx={{ height: "50px" }} />
      <Footer />
    </div>
  );
}

export default App;
