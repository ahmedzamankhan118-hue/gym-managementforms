import React from "react";

import "./table.css";
function ComplaintsTable() {

  const complaints = [
    {
      id: 1,
      memberName: "Ahmed",
      subject: "Equipment Problem",
      description: "Treadmill is not working"
    },
    {
      id: 2,
      memberName: "Ali",
      subject: "Cleanliness",
      description: "Need better cleaning"
    },
    {
      id: 3,
      memberName: "Usman",
      subject: "Trainer Issue",
      description: "Need help with workout"
    }
  ];

  return (
    <div className="table-section">

      <h2>Member Complaints</h2>

      <table>

        <thead>
          <tr>
            <th>ID</th>
            <th>Member Name</th>
            <th>Subject</th>
            <th>Description</th>
          </tr>
        </thead>

        <tbody>
          {complaints.map((complaint) => (
            <tr key={complaint.id}>
              <td>{complaint.id}</td>
              <td>{complaint.memberName}</td>
              <td>{complaint.subject}</td>
              <td>{complaint.description}</td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default ComplaintsTable;