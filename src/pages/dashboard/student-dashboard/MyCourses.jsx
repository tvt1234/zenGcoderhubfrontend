import { Link } from "react-router-dom";

const StudentDashboard = () => {
  return (
    <div style={{ padding: "40px" }}>
      <h2>Student Dashboard</h2>

      {/* 📚 Courses Module Button */}
      <Link
        to="/courses"
        style={{
          display: "inline-block",
          marginTop: "20px",
          padding: "12px 20px",
          background: "#2563eb",
          color: "white",
          textDecoration: "none",
          borderRadius: "8px",
          fontWeight: "bold",
        }}
      >
        Show All Course 
      </Link>
    </div>
  );
};

export default StudentDashboard;