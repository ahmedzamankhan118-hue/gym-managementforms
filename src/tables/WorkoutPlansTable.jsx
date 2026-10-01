import React from "react";
import "./table.css";

function WorkoutPlansTable() {

  const workoutPlans = [
    {
      id: 1,
      memberName: "Ahmed",
      workoutName: "Chest Workout",
      duration: "60 Minutes"
    },
    {
      id: 2,
      memberName: "Ali",
      workoutName: "Back Workout",
      duration: "45 Minutes"
    },
    {
      id: 3,
      memberName: "Usman",
      workoutName: "Leg Workout",
      duration: "50 Minutes"
    }
  ];

  return (
    <div className="table-section">

      <h2>Workout Plans</h2>

      <table>

        <thead>
          <tr>
            <th>ID</th>
            <th>Member Name</th>
            <th>Workout</th>
            <th>Duration</th>
          </tr>
        </thead>

        <tbody>
          {workoutPlans.map((plan) => (
            <tr key={plan.id}>
              <td>{plan.id}</td>
              <td>{plan.memberName}</td>
              <td>{plan.workoutName}</td>
              <td>{plan.duration}</td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default WorkoutPlansTable;