// App.js
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Membership from "./components/Membership";
import Service from "./components/Service";
import SignIn from "./components/SignIn";
import About from "./components/About";
import Week from "./components/Week";
import register from "./components/Register";
import Register from "./components/Register";
import AdminPortal from "./components/AdminPortal";
import Navbar from "./components/Navbar";
import Ser from "./components/Ser";
import Footer from "./components/Footer";
import Patient from "./components/Patient";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route element={<Layout />}> */}
        <Route path="/Rehabilitation-Center" element={<><Home /><About /><Service /><Footer /></>} />
        <Route path="/home" element={<><Home /><About /><Service /><Footer /></>} />
        <Route path="/contact" element={<><Contact /><Footer /></>} />
        <Route path="/membership" element={<><Membership /><Footer /></>} />
        <Route path="/services" element={<><Service /><Footer /></>} />
        <Route path="/signin" element={<SignIn />} />
        <Route part='/patient' element={<Patient/>}/>
        <Route path="/about" element={<><About /><Footer/></>} />
        {/* </Route> */}
        {/* Week route without Navbar */}
        <Route path="/register" element={<Register />} />
        <Route path="/adminPortal" element={<AdminPortal />}></Route>

      </Routes>
    </Router>




  );
}

export default App;
