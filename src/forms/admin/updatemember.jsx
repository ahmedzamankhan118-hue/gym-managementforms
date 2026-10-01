import React from "react";
import "./admin.css";

function UpdateMember() {
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Member Updated Successfully!");
  };

  return (
    <div className="admin-section">
      <h2>Update Member</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Member ID"
          required
        />

        <input
          type="text"
          placeholder="Member Name"
          required
        />

        <input
          type="email"
          placeholder="Member Email"
          required
        />

        <input
          type="text"
          placeholder="Member Phone"
          required
        />

        <button type="submit">
          Update Member
        </button>
      </form>
    </div>
  );
}

export default UpdateMember;