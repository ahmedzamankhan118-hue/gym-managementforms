import React from "react";
import "./trainer.css";


function UpdateWorkoutPlan() {

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Workout Plan Updated Successfully!");
  };

  return (
    <div className="trainer-section">

      <h2>Update Workout Plan</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Workout Plan ID"
          required
        />

        <input
          type="text"
          placeholder="Member Name"
          required
        />

        <input
          type="text"
          placeholder="Workout Name"
          required
        />

        <input
          type="text"
          placeholder="Workout Duration"
          required
        />

        <button type="submit">
          Update Workout Plan
        </button>

      </form>

    </div>
  );
}

export default UpdateWorkoutPlan;