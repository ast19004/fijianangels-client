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

import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Background />
        <main>
          <Routes>
            <Route exact path="/employment-form" element={<EmploymentForm />} />
            <Route
              exact
              path="/"
              element={
                <>
                  <CoreValues />
                  <Staff />
                  <Services />
                  <Pricing />
                  <Contact />
                </>
              }
            />
          </Routes>
        </main>
        <Box sx={{ height: "50px" }} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
