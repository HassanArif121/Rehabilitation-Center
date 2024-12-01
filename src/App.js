import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Membership from "./components/Membership";
import Service from "./components/Service";
import SignIn from "./components/SignIn";
import About from "./components/About";
import Register from "./components/Register";
import AdminPortal from "./components/AdminPortal";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Patient from "./components/Patient";
import GenrateVoucher from "./components/GenrateVoucher";

function App() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [formData, setFormData] = useState(null); // Add state for form data

  // Function to handle plan selection
  const handlePlanSelection = (plan) => {
    setSelectedPlan(plan);
    console.log("Selected Plan:", plan);
  };

  // Function to handle form submission
  const handleFormSubmit = (data) => {
    setFormData(data); // Store the form data
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Rehabilitation-Center" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/membership"
          element={
            <>
              <Membership onSelectPlan={handlePlanSelection} />
              <Footer />
            </>
          }
        />
        <Route
          path="/register"
          element={
            <Register
              selectedPlan={selectedPlan}
              onFormSubmit={handleFormSubmit}
            />
          }
        />
        <Route
          path="/generatevoucher"
          element={
            <GenrateVoucher selectedPlan={selectedPlan} formData={formData} />
          }
        />
        <Route path="/services" element={<Service />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/about" element={<About />} />
        <Route path="/adminPortal" element={<AdminPortal />} />
      </Routes>
    </Router>
  );
}

export default App;
