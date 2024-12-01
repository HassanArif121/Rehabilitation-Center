import React from "react";

function GenrateVoucher({ selectedPlan, formData }) {
  if (!selectedPlan || !formData) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>No Plan or Registration Data</h2>
        <p>Please go back and complete the registration process.</p>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Voucher Details</h1>
      <div
        style={{
          display: "inline-block",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          textAlign: "left",
          maxWidth: "400px",
        }}
      >
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

        <h3>Patient Registration Details</h3>
        <p>
          <strong>Full Name:</strong> {formData.fullName}
        </p>
        <p>
          <strong>Age:</strong> {formData.age}
        </p>
        <p>
          <strong>Blood Group:</strong> {formData.bloodGroup}
        </p>
        <p>
          <strong>Guardian's Contact:</strong> {formData.guardianContact}
        </p>
        <p>
          <strong>Condition:</strong> {formData.condition}
        </p>
      </div>
    </div>
  );
}

export default GenrateVoucher;
