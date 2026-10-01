import React from "react";
import "./admin.css";

function CreateMember() {
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Member Created Successfully!");
  };

  return (
    <div className="admin-section">
      <h2>Create Member</h2>

      <form onSubmit={handleSubmit}>
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
          Create Member
        </button>
      </form>
    </div>
  );
}

export default CreateMember;