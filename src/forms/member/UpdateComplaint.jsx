import React from "react";
import "./member.css";

function UpdateComplaint() {

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Complaint Updated Successfully!");
  };

  return (
    <div className="member-section">

      <h2>Update Complaint</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Complaint ID"
          required
        />

        <input
          type="text"
          placeholder="Complaint Subject"
          required
        />

        <textarea
          placeholder="Complaint Description"
          required
        ></textarea>

        <button type="submit">
          Update Complaint
        </button>

      </form>

    </div>
  );
}

export default UpdateComplaint;