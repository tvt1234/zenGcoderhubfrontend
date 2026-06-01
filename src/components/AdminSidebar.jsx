import { Link, useLocation } from "react-router-dom";

const AdminSidebar = () => {
  const location = useLocation();

  const menus = [
    { title: "Dashboard", path: "/admin/dashboard" },
    { title: "Users", path: "/admin/users" },
    { title: "Courses", path: "/admin/courses" },
    { title: "Teachers", path: "/admin/teachers" },
    { title: "Students", path: "/admin/students" },
    { title: "Reports", path: "/admin/reports" },
    { title: "Payments", path: "/admin/payments" },
    { title: "Notifications", path: "/admin/notifications" },
    { title: "Settings", path: "/admin/settings" },
    { title: "Logs", path: "/admin/logs" },
  ];

  return (
    <div
      style={{
        width: "260px",
        background: "#1e293b",
        color: "#fff",
        minHeight: "100vh",
        padding: "20px 0",
        position: "fixed",
        left: 0,
        top: 0,
        boxShadow: "2px 0 10px rgba(0,0,0,0.1)",
        zIndex: 100,
      }}
    >
      <div style={{ padding: "0 20px 30px" }}>
        <h2 style={{ margin: 0, color: "#60a5fa" }}>ZengCoders</h2>
        <p style={{ margin: "5px 0 0", fontSize: "14px", opacity: 0.7 }}>
          Admin Panel
        </p>
      </div>

      <div style={{ padding: "0 10px" }}>
        {menus.map((menu) => {
          const isActive = location.pathname === menu.path;
          return (
            <Link
              key={menu.path}
              to={menu.path}
              style={{
                display: "block",
                color: isActive ? "#fff" : "#cbd5e1",
                background: isActive ? "#334155" : "transparent",
                padding: "12px 20px",
                margin: "4px 0",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: isActive ? "600" : "400",
                transition: "all 0.3s",
              }}
            >
              {menu.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AdminSidebar;