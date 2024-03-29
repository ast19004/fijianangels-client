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
import HomecareRequestForm from "./component/UI/Forms/HomecareRequestForm";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import CaregiverReviewForm from "./component/UI/Forms/CaregiverReviewForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
            element={<HomecareRequestForm />}
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
              <>
                <Background />
                <main>
                  <CoreValues />
                  <Staff />
                  <Services />
                  <Pricing />
                  <Contact />
                </main>
              </>
            }
          />
        </Routes>
        <Box sx={{ height: "50px" }} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
