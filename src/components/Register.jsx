import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import Navbar from "./Navbar";

function Register({ selectedPlan, onFormSubmit }) {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    bloodGroup: "",
    guardianContact: "",
    condition: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim())
      newErrors.fullName = "Full Name is required.";
    if (!formData.age || formData.age <= 0)
      newErrors.age = "Age must be a positive number.";
    if (!formData.bloodGroup.trim())
      newErrors.bloodGroup = "Blood Group is required.";
    if (!formData.guardianContact.trim())
      newErrors.guardianContact = "Guardian's contact number is required.";
    else if (!/^\d{10,15}$/.test(formData.guardianContact))
      newErrors.guardianContact = "Enter a valid contact number.";
    if (!formData.condition.trim())
      newErrors.condition = "Condition is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    onFormSubmit(formData); // Pass form data to App.js
    alert("Registration Successful!");
    setFormData({
      fullName: "",
      age: "",
      bloodGroup: "",
      guardianContact: "",
      condition: "",
    });
    setErrors({});
  };

  return (
    <div>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "75px",
          backgroundColor: "#4e4f51",
          minHeight: "100vh",
          width: "100vw",
        }}
      >
        <form className="form" onSubmit={handleSubmit}>
          <p className="title">Patient Registration</p>
          <p className="message">
            Fill in the details to register the patient.
          </p>

          {/* Display selected plan details */}
          {selectedPlan && (
            <div className="plan-summary">
              <h3>Selected Plan</h3>
              <p>
                <strong>Plan Name:</strong> {selectedPlan.name}
              </p>
              <p>
                <strong>Price:</strong> {selectedPlan.price}
              </p>
              <p>
                <strong>Duration:</strong> {selectedPlan.duration}
              </p>
            </div>
          )}

          {/* Full Name */}
          <label>
            <input
              className="input"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <span>Full Name</span>
            {errors.fullName && <p className="error">{errors.fullName}</p>}
          </label>

          {/* Age */}
          <label>
            <input
              className="input"
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
            <span>Age</span>
            {errors.age && <p className="error">{errors.age}</p>}
          </label>

          {/* Blood Group */}
          <label>
            <input
              className="input"
              type="text"
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              required
            />
            <span>Blood Group</span>
            {errors.bloodGroup && <p className="error">{errors.bloodGroup}</p>}
          </label>

          {/* Guardian's Contact Number */}
          <label>
            <input
              className="input"
              type="tel"
              name="guardianContact"
              value={formData.guardianContact}
              onChange={handleChange}
              required
            />
            <span>Guardian's Contact Number</span>
            {errors.guardianContact && (
              <p className="error">{errors.guardianContact}</p>
            )}
          </label>

          {/* Patient's Condition */}
          <label>
            <textarea
              className="input"
              rows="3"
              name="condition"
              value={formData.condition}
              onChange={handleChange}
              required
            ></textarea>
            <span>Condition</span>
            {errors.condition && <p className="error">{errors.condition}</p>}
          </label>

          <button className="submit" type="submit">
            Submit
          </button>
          <p className="signin">
            Already registered?{" "}
            <Link to="/patient" className="link">
              View Records
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
