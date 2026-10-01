import React from "react";
import "./sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h3>Menu</h3>

      <button>Dashboard</button>
      <button>Members</button>
      <button>Complaints</button>
      <button>Workout Plans</button>
    </aside>
  );
}

export default Sidebar;