import React from "react";
import "./table.css";

function MembersTable() {

  const members = [
    {
      id: 1,
      name: "Ahmed",
      email: "ahmed@gmail.com",
      phone: "03001234567"
    },
    {
      id: 2,
      name: "Ali",
      email: "ali@gmail.com",
      phone: "03111234567"
    },
    {
      id: 3,
      name: "Usman",
      email: "usman@gmail.com",
      phone: "03221234567"
    }
  ];

  return (
    <div className="table-section">

      <h2>Gym Members</h2>

      <table>

        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>

        <tbody>
          {members.map((member) => (
            <tr key={member.id}>
              <td>{member.id}</td>
              <td>{member.name}</td>
              <td>{member.email}</td>
              <td>{member.phone}</td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default MembersTable;