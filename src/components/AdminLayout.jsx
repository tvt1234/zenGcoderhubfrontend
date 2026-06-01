import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";

const AdminLayout = () => {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <AdminSidebar />
      
      <div
        style={{
          flex: 1,
          marginLeft: "260px",
          padding: "30px",
          background: "#f3f4f6",
        }}
      >
        <h2 style={{color: "red", marginBottom: "20px"}}>
          ✅ Admin Layout is Working (Debug)
        </h2>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;