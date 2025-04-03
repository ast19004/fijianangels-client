import { useState } from "react";
import { Box } from "@mui/material";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./component/Layout/Footer/Footer";
import Contact from "./pages/Contact";
import CoreValues from "./pages/CoreValues/CoreValues";
import Staff from "./pages/Staff/Staff";
import Services from "./pages/Services/Services";
import Header from "./component/Layout/Header";
import Home from "./pages/Home/Home";
import EmploymentForm from "./component/UI/Forms/EmploymentForm";
import HomecareRequestForm from "./component/UI/Forms/HomecareRequestForm";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Reviews from "../src/component/UI/Reviews";
import AssociatedGroups from "./pages/AssociatedGroups/AssociatedGroups";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Header />
        <ToastContainer
          style={{
            top: "50%",
            width: "400px",
            backgroundColor: "rgba(202, 71, 101, 0.8)",
            borderRadius: "0.5rem",
            color: "#fff",
          }}
        />
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
              // <main className="requestBg">
              <main>
                <HomecareRequestForm />
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
                  <Contact />
                  <Reviews/>
                  <AssociatedGroups />
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
