import { Box } from "@mui/material";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./component/Layout/Footer/Footer";
import Contact from "./pages/Contact";
import CoreValues from "./pages/CoreValues/CoreValues";
import Staff from "./pages/Staff/Staff";
import Pricing from "./pages/Pricing";
import Services from "./pages/Services/Services";
import Header from "./component/Layout/Header";
import Home from "./pages/Home/Home";
import EmploymentForm from "./component/UI/Forms/EmploymentForm";
import HomecareRequestForm from "./component/UI/Forms/HomecareRequestForm";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import CaregiverReviewForm from "./component/UI/Forms/CaregiverReviewForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Header />
        <Routes>
          <Route
            exact
            path="/employment-form"
            element={
              <main>
                <EmploymentForm />
              </main>
            }
          />
          <Route
            exact
            path="/homecare-request-form"
            element={
              <main>
                <HomecareRequestForm />
              </main>
            }
          />
          <Route
            exact
            path="/caregiver-review-form"
            element={
              <main>
                <CaregiverReviewForm />
              </main>
            }
          />
          <Route
            exact
            path="/"
            element={
              <Box className="body-container">
                <Home />
                <main>
                  <Services />
                  <CoreValues />
                  <Staff />
                  {/* <Pricing /> */}
                  <Contact />
                </main>
              </Box>
            }
          />
        </Routes>
        <Box className="spacingBlock" sx={{ height: "125px" }} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
