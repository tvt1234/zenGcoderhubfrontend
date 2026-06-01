import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";

const AdminLayout = () => {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <AdminSidebar />

      <div
        style={{
          flex: 1,
          marginLeft: "260px",   // Same as sidebar width
          padding: "30px",
          background: "#f3f4f6",
          minHeight: "100vh",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;