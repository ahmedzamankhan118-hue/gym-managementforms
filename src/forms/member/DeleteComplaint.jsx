import React from "react";
import "./member.css";

function DeleteComplaint() {

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Complaint Deleted Successfully!");
  };

  return (
    <div className="member-section">

      <h2>Delete Complaint</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Complaint ID"
          required
        />

        <button type="submit">
          Delete Complaint
        </button>

      </form>

    </div>
  );
}

export default DeleteComplaint;