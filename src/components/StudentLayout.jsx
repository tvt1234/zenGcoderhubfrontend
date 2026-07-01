
import { Outlet } from "react-router-dom";
import StudentSidebar from "./StudentSidebar";

const StudentLayout = () => {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <StudentSidebar />

      <div
        style={{
          flex: 1,
          marginLeft: "260px",
          padding: "30px",
          background: "#f3f4f6",
        }}
      >
        <h2
          style={{
            color: "#2563eb",
            marginBottom: "20px",
          }}
        >
          
        </h2>

        <Outlet />
      </div>
    </div>
  );
};

export default StudentLayout;