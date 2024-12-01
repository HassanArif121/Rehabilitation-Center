import React, { useState } from "react";
import "./Contact.css";
import Footer from "./Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    address: "",
    message: "",
    agree: false,
  });

  const [formStatus, setFormStatus] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.surname ||
      !formData.email ||
      !formData.agree
    ) {
      setFormStatus("Please fill all required fields and agree to terms.");
      return;
    }

    setFormStatus("Submitting...");

    setTimeout(() => {
      console.log(formData);
      setFormStatus("Form submitted successfully!");

      setFormData({
        name: "",
        surname: "",
        email: "",
        address: "",
        message: "",
        agree: false,
      });
    }, 2000);
  };

  return (
    <>
      <div className="contact-container">
        <div className="contact-boxx">
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  name="surname"
                  className="form-control"
                  placeholder="Surname"
                  value={formData.surname}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  name="address"
                  className="form-control"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-3">
              <textarea
                name="message"
                className="form-control"
                placeholder="Type here..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="form-check mb-3">
              <input
                type="checkbox"
                className="form-check-input"
                name="agree"
                id="agree"
                checked={formData.agree}
                onChange={handleChange}
                required
              />
              <label className="form-check-label" htmlFor="agree">
                I agree with terms and conditions
              </label>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Send Message
            </button>
          </form>

          {formStatus && <div className="form-status">{formStatus}</div>}
        </div>
      </div>
    </>
  );
};

export default Contact;
