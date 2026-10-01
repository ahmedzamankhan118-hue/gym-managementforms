import React from "react";
import "./trainer.css";

function CreateWorkoutPlan() {

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Workout Plan Created Successfully!");
  };

  return (
    <div className="trainer-section">

      <h2>Create Workout Plan</h2>

      <form onSubmit={handleSubmit}>

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
          Create Workout Plan
        </button>

      </form>

    </div>
  );
}

export default CreateWorkoutPlan;