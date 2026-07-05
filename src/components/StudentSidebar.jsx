
import { Link, useLocation, useNavigate } from "react-router-dom";

const StudentSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const menus = [
    { title: "Dashboard", path: "/student" },
    { title: "Courses", path: "/student/courses" },
    { title: "Attendance", path: "/student/attendance" },
    { title: "Assignments", path: "/student/assignments" },
    { title: "Results", path: "/student/results" },
  ];

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <div style={sidebar}>
      {/* Header */}
      <div>
        <h2 style={logo}>ZengCoders</h2>
        <p style={subtitle}>Student Panel</p>
      </div>

      {/* Menu */}
      <nav style={nav}>
        {menus.map((menu) => {
          const isActive = location.pathname === menu.path;

          return (
            <Link
              key={menu.path}
              to={menu.path}
              style={linkStyle(isActive)}
            >
              {menu.title}
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <button onClick={handleLogout} style={logoutBtn}>
        Logout
      </button>
    </div>
  );
};

export default StudentSidebar;

/* ===== Styles ===== */

const sidebar = {
  width: "240px",
  height: "100vh",
  position: "fixed",
  left: 0,
  top: 0,
  background: "linear-gradient(180deg, #0f172a, #1e293b)",
  color: "#fff",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  boxShadow: "2px 0 10px rgba(0,0,0,0.2)",
};

const logo = {
  fontSize: "20px",
  fontWeight: "700",
  marginBottom: "4px",
  color: "#60a5fa",
};

const subtitle = {
  fontSize: "13px",
  opacity: 0.7,
  marginBottom: "20px",
};

const nav = {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  flex: 1,
};

const linkStyle = (isActive) => ({
  textDecoration: "none",
  color: isActive ? "#fff" : "#cbd5e1",
  background: isActive ? "#2563eb" : "transparent",
  padding: "10px 12px",
  borderRadius: "8px",
  fontWeight: isActive ? "600" : "400",
  transition: "0.2s",
  display: "block",
});

const logoutBtn = {
  marginTop: "20px",
  width: "100%",
  padding: "12px",
  border: "none",
  borderRadius: "8px",
  background: "#ef4444",
  color: "#fff",
  cursor: "pointer",
  fontWeight: "600",
};