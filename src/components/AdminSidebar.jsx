import { Link } from "react-router-dom";

const AdminSidebar = () => {
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
        width: "250px",
        background: "#1e293b",
        color: "#fff",
        height: "100vh",
        padding: "20px",
      }}
    >
      <h2>Admin Panel</h2>

      {menus.map((menu) => (
        <Link
          key={menu.path}
          to={menu.path}
          style={{
            display: "block",
            color: "#fff",
            textDecoration: "none",
            margin: "15px 0",
          }}
        >
          {menu.title}
        </Link>
      ))}
    </div>
  );
};

export default AdminSidebar;
