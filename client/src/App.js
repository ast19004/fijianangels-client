import { Box } from "@mui/material";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./component/Layout/Footer";
import Contact from "./pages/Contact";
import CoreValues from "./pages/CoreValues";
import Pricing from "./pages/Pricing";
import Services from "./pages/Services";
import Staff from "./pages/Staff";
import Header from "./component/Layout/Header";
import Background from "./component/Layout/Background";
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
                <Background />
                <main>
                  <CoreValues sx={{ margin: "30px 0 70px 0" }} />
                  <Services />
                  {/* <Pricing /> */}
                  <Contact />
                  <Staff />
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
