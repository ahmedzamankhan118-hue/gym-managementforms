import React from "react";
import "./member.css";

function CreateComplaint() {
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Complaint Created Successfully!");
  };

  return (
    <div className="member-section">
      <h2>Create Complaint</h2>

      <form onSubmit={handleSubmit}>
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
          Submit Complaint
        </button>
      </form>
    </div>
  );
}

export default CreateComplaint;