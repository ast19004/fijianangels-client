// import logo from "./logo.svg";
import { Box } from "@mui/material";
import "./App.css";
import Footer from "./component/Layout/Footer";
import Contact from "./pages/Contact";
import CoreValues from "./pages/CoreValues";
import Pricing from "./pages/Pricing";
import Services from "./pages/Services";
import Staff from "./pages/Staff";
import Header from "./component/Layout/Header";

import flowerLogo from "./flowerLogo.svg";
function App() {
  return (
    <div className="App">
      <Header />
      <Box
        sx={{
          height: "45vw",
          width: "100vw",
          position: "sticky",
          top: "70px",
          right: "0px",
          zIndex: "-1",
          display: "flex",
          justifyContent: "end",
        }}
      >
        <img
          style={{
            display: "block",
          }}
          src={flowerLogo}
          alt="flower logo"
        />
      </Box>
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
