import React from "react";
import "./Membership.css";
import { Link } from "react-router-dom";

function Membership({ onSelectPlan }) {
  const handlePlanSelection = (plan) => {
    if (onSelectPlan) {
      onSelectPlan(plan); // Pass selected plan back to App.jsx
    }
  };

  return (
    <div className="containerr">
      {/* Basic Plan */}
      <div className="plan">
        <div className="inner">
          <div className="pricing">PKR 8,000/week</div> <br />
          <div className="title">Basic Plan</div>
          <ul className="features">
            <li>
              <div className="icon">Accommodation (7 days)</div>
            </li>
            <li>
              <div className="icon">Meal</div>
            </li>
          </ul>
        </div>
        <div className="action">
          <Link
            to="/register"
            className="button"
            onClick={() =>
              handlePlanSelection({
                name: "Basic Plan",
                price: "PKR 8,000",
                duration: "1 week",
              })
            }
          >
            Choose Plan
          </Link>
        </div>
      </div>

      {/* Premium Plan */}
      <div className="plan2">
        <div className="inner">
          <div className="pricing">PKR 90,000/3mo</div> <br />
          <div className="title">Premium Plan</div>
          <ul className="features">
            <li>
              <div className="icon">Accommodation (90 days)</div>
            </li>
            <li>
              <div className="icon">Meal</div>
            </li>
            <li>
              <div className="icon">Weekly Checkup</div>
            </li>
          </ul>
        </div>
        <div className="action">
          <Link
            to="/register"
            className="button"
            onClick={() =>
              handlePlanSelection({
                name: "Premium Plan",
                price: "PKR 90,000",
                duration: "3 months",
              })
            }
          >
            Choose Plan
          </Link>
        </div>
      </div>

      {/* Exclusive Plan */}
      <div className="plan3">
        <div className="inner">
          <div className="pricing">PKR 1,500,000/6mo</div> <br />
          <div className="title">Exclusive Plan</div>
          <ul className="features">
            <li>
              <div className="icon">Accommodation (180 days)</div>
            </li>
            <li>
              <div className="icon">Meal</div>
            </li>
            <li>
              <div className="icon">Daily Checkup</div>
            </li>
            <li>
              <div className="icon">Personal Consultation</div>
            </li>
          </ul>
        </div>
        <div className="action">
          <Link
            to="/register"
            className="button"
            onClick={() =>
              handlePlanSelection({
                name: "Exclusive Plan",
                price: "PKR 1,500,000",
                duration: "6 months",
              })
            }
          >
            Choose Plan
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Membership;
