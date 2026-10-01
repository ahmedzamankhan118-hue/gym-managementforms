import React from "react";

import "./trainer.css";
function DeleteWorkoutPlan() {

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Workout Plan Deleted Successfully!");
  };

  return (
    <div className="trainer-section">

      <h2>Delete Workout Plan</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Workout Plan ID"
          required
        />

        <button type="submit">
          Delete Workout Plan
        </button>

      </form>

    </div>
  );
}

export default DeleteWorkoutPlan;