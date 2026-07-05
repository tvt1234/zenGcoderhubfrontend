
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;


export default function ResetPassword() {
  const location = useLocation();
  const navigate = useNavigate();

  const email = location.state?.email || "";

  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReset = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await fetch(
         `${BACKEND_URL}/api/auth/verify-otp`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            otp,
            newPassword,
          }),
        }
      );

      const data = await res.json();

      if (data.success) {
        alert("Password reset successful");
        navigate("/");
      } else {
        alert(data.message || "Reset failed");
      }
    } catch (error) {
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2 style={styles.title}>Reset Password</h2>

        <p style={styles.subtitle}>
          Enter OTP sent to your email
        </p>

        {email && (
          <p style={styles.email}>
            📧 {email}
          </p>
        )}

        <form onSubmit={handleReset}>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            style={styles.input}
            required
          />

          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            style={styles.input}
            required
          />

          <button
            type="submit"
            disabled={loading}
            style={styles.button}
          >
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const styles = {
  wrapper: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
  },

  card: {
    background: "#fff",
    padding: "40px",
    borderRadius: "12px",
    width: "360px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    textAlign: "center",
  },

  title: {
    marginBottom: "10px",
    fontSize: "24px",
    color: "#333",
  },

  subtitle: {
    fontSize: "14px",
    color: "#666",
    marginBottom: "10px",
  },

  email: {
    fontSize: "13px",
    color: "#4f46e5",
    marginBottom: "15px",
    fontWeight: "500",
  },

  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "12px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    outline: "none",
    fontSize: "14px",
  },

  button: {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    background: "#4f46e5",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "15px",
  },
};