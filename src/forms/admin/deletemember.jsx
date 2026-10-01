import React from "react";
import "./admin.css";

function DeleteMember() {
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Member Deleted Successfully!");
  };

  return (
    <div className="admin-section">
      <h2>Delete Member</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Member ID"
          required
        />

        <button type="submit">
          Delete Member
        </button>
      </form>
    </div>
  );
}

export default DeleteMember;