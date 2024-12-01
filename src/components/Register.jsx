import React, { useEffect } from "react";
import "./Register.css";
import Navbar from "./Navbar";

function Register() {
  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "75px",
          backgroundColor: "#4e4f51",
          height: "100vh",
          width: "100vw",
        }}
      >
        <form className="form">
          <p className="title">Patient Registration</p>
          <p className="message">
            Fill in the details to register the patient.
          </p>

          {/* Full Name */}
          <label>
            <input className="input" type="text" placeholder="" required="" />
            <span>Full Name</span>
          </label>

          {/* Age */}
          <label>
            <input className="input" type="number" placeholder="" required="" />
            <span>Age</span>
          </label>

          {/* Blood Group */}
          <label>
            <input className="input" type="text" placeholder="" required="" />
            <span>Blood Group</span>
          </label>

          {/* Guardian's Contact Number */}
          <label>
            <input className="input" type="tel" placeholder="" required="" />
            <span>Guardian's Contact Number</span>
          </label>

          {/* Patient's Condition */}
          <label>
            <textarea
              className="input"
              rows="3"
              placeholder=""
              required=""
            ></textarea>
            <span>Condition</span>
          </label>

          <button className="submit">Submit</button>
          <p className="signin">
            Already registered? <a href="#">View Records</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
