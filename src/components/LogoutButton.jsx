
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("user");

    sessionStorage.clear();

    navigate("/login");
  };

  return (
    <button
      onClick={handleLogout}
      style={{
        width: "100%",
        padding: "10px",
        border: "none",
        borderRadius: "8px",
        background: "#ef4444",
        color: "#fff",
        cursor: "pointer",
      }}
    >
      Logout
    </button>
  );
};

export default LogoutButton;