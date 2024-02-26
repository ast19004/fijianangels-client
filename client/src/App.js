import { Box } from "@mui/material";
import "./App.css";
import Footer from "./component/Layout/Footer";
import Contact from "./pages/Contact";
import CoreValues from "./pages/CoreValues";
import Pricing from "./pages/Pricing";
import Services from "./pages/Services";
import Staff from "./pages/Staff";
import Header from "./component/Layout/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
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
