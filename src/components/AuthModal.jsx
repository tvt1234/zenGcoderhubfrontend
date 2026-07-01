import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AuthModal = ({ type = "login", isOpen, onClose }) => {
  const navigate = useNavigate();

  const [mode, setMode] = useState(type);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
    role: "student",
  });

  useEffect(() => {
    setMode(type);
  }, [type]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const url =
        mode === "signup"
          ? "http://localhost:5000/api/auth/register"
          : "http://localhost:5000/api/auth/login";

      const payload =
        mode === "signup"
          ? form
          : { email: form.email, password: form.password };

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Request failed");
      }

      // ================= SIGNUP =================
      if (mode === "signup") {
        alert("Signup successful! Please login now.");
        setMode("login");
        setLoading(false);
        return;
      }

      // ================= LOGIN =================
      localStorage.setItem("userId", data.user._id);
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.user.role);
      localStorage.setItem("user", JSON.stringify(data.user));

      window.dispatchEvent(new Event("authChanged"));

      // pending course flow
      const pending = localStorage.getItem("pendingCourse");

      onClose();

      if (pending) {
        localStorage.removeItem("pendingCourse");
        navigate("/courses");
        return;
      }

      if (data.user.role === "admin") navigate("/admin");
      else if (data.user.role === "teacher") navigate("/teacher");
      else navigate("/student");

    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={overlay}>
      <div style={modal}>
        <button onClick={onClose} style={closeBtn}>
          <FaTimes />
        </button>

        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          {mode === "login" ? "Login" : "Signup"}
        </h2>

        <form onSubmit={handleSubmit}>
          {mode === "signup" && (
            <input
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              style={input}
              required
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            style={input}
            required
          />

          {mode === "signup" && (
            <input
              name="mobile"
              placeholder="Mobile Number"
              onChange={handleChange}
              style={input}
              required
            />
          )}

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            style={input}
            required
          />

          {/* Forgot Password */}
          {mode === "login" && (
            <div
              style={{
                textAlign: "right",
                marginBottom: "12px",
              }}
            >
              <span
                onClick={() => {
                  onClose(); // modal close
                  navigate("/forgot-password"); // page open
                }}
                style={{
                  color: "#2563eb",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                Forgot Password?
              </span>
            </div>
          )}


          {mode === "signup" && (
            <select name="role" onChange={handleChange} style={input}>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="admin">Admin</option>
            </select>
          )}

          <button style={btn} disabled={loading}>
            {loading ? "Please wait..." : mode === "login" ? "Login" : "Create Account"}
          </button>
        </form>

        {/* SWITCH */}
        <p style={{ textAlign: "center", marginTop: "15px" }}>
          {mode === "login" ? (
            <>
              Don’t have an account?{" "}
              <span style={link} onClick={() => setMode("signup")}>
                Signup
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span style={link} onClick={() => setMode("login")}>
                Login
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthModal;

/* ================= STYLES ================= */

const overlay = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.6)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999,
};

const modal = {
  background: "#fff",
  padding: "30px",
  borderRadius: "15px",
  width: "400px",
  maxWidth: "90%",
  position: "relative",
};

const closeBtn = {
  position: "absolute",
  top: "10px",
  right: "10px",
  border: "none",
  background: "transparent",
  cursor: "pointer",
  fontSize: "18px",
};

const input = {
  width: "100%",
  padding: "12px",
  marginBottom: "12px",
  borderRadius: "8px",
  border: "1px solid #ccc",
};

const btn = {
  width: "100%",
  padding: "12px",
  background: "#2563eb",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  fontWeight: "bold",
  cursor: "pointer",
};

const link = {
  color: "blue",
  cursor: "pointer",
  fontWeight: "500",
};