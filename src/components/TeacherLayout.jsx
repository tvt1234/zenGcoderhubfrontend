
import { Outlet } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";

const TeacherLayout = () => {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <TeacherSidebar />

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
          Teacher Dashboard
        </h2>

        <Outlet />
      </div>
    </div>
  );
};

export default TeacherLayout;