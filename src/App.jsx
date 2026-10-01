import React from "react";

// Uppercase 'Navbar' matches JSX usage
import Navbar from "./components/navbar"; 
import Sidebar from "./components/Sidebar";

// Admin (Updated to PascalCase)
import AdminDashboard from "./pages/AdminDashboard";
import CreateMember from "./forms/admin/createmember";
import UpdateMember from "./forms/admin/updatemember";
import DeleteMember from "./forms/admin/deletemember";

// Member
import MemberDashboard from "./pages/MemberDashboard";
import CreateComplaint from "./forms/member/CreateComplaint";
import UpdateComplaint from "./forms/member/UpdateComplaint";
import DeleteComplaint from "./forms/member/DeleteComplaint";

// Trainer
import TrainerDashboard from "./pages/TrainerDashboard";
import CreateWorkoutPlan from "./forms/trainer/CreateWorkoutPlan";
import UpdateWorkoutPlan from "./forms/trainer/UpdateWorkoutPlan";
import DeleteWorkoutPlan from "./forms/trainer/DeleteWorkoutPlan";

// Tables
import MembersTable from "./tables/MembersTable";
import ComplaintsTable from "./tables/ComplaintsTable";
import WorkoutPlansTable from "./tables/WorkoutPlansTable";

function App() {
  return (
    <div>
      <Navbar />
      <Sidebar />

      {/* ADMIN SECTION */}
      <AdminDashboard />

      <CreateMember />
      <UpdateMember />
      <DeleteMember />

      <MembersTable />

      <hr />

      {/* MEMBER SECTION */}
      <MemberDashboard />

      <CreateComplaint />
      <UpdateComplaint />
      <DeleteComplaint />

      <ComplaintsTable />

      <hr />

      {/* TRAINER SECTION */}
      <TrainerDashboard />

      <CreateWorkoutPlan />
      <UpdateWorkoutPlan />
      <DeleteWorkoutPlan />

      <WorkoutPlansTable />
    </div>
  );
}

export default App;