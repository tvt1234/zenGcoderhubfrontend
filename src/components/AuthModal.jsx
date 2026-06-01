import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AuthModal = ({ type, isOpen, onClose }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
    role: "student",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (type === "signup") {
        const res = await fetch(
          "https://zengcodershub-backend.onrender.com/api/auth/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
          },
        );

        const data = await res.json();

        if (!res.ok) throw new Error(data.message || "Signup failed");
        alert("Signup successful");
      }

      // LOGIN
      else {
        const res = await fetch(
          "https://zengcodershub-backend.onrender.com/api/auth/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: form.email,
              password: form.password,
            }),
          },
        );

        const data = await res.json();

        if (!res.ok) throw new Error(data.message || "Login failed");

        // IMPORTANT: backend should return token + user role
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.user.role);
        console.log("User Role:", data.user.role);
        alert("Login successful", data.user.role);

        const role = data.user.role;

        onClose();

        if (role === "student") {
          navigate("/student");
        } else if (role === "teacher") {
          navigate("/teacher");
        } else if (role === "admin") {
         navigate("/admin");
        }
      }

      onClose();
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div style={overlay}>
      <div style={modal}>
        {/* CLOSE */}
        <button onClick={onClose} style={closeBtn}>
          <FaTimes />
        </button>

        <h2 style={{ marginBottom: "20px" }}>
          {type === "login" ? "Login" : "Signup"}
        </h2>

        <form onSubmit={handleSubmit}>
          {/* NAME ONLY FOR SIGNUP */}
          {type === "signup" && (
            <input
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              style={input}
              required
            />
          )}

          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            style={input}
            required
          />

          {/* MOBILE ONLY FOR SIGNUP */}
          {type === "signup" && (
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

          {/* ROLE ONLY FOR SIGNUP */}
          {type === "signup" && (
            <select name="role" onChange={handleChange} style={input}>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="admin">Admin</option>
            </select>
          )}

          <button style={btn}>
            {type === "login" ? "Login" : "Create Account"}
          </button>
        </form>
      </div>
    </div>
  );
};

/* STYLES */
const overlay = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.6)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999,
};

const modal = {
  background: "white",
  padding: "30px",
  borderRadius: "15px",
  width: "380px",
  position: "relative",
};

const closeBtn = {
  position: "absolute",
  top: "10px",
  right: "10px",
  background: "transparent",
  border: "none",
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
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};

export default AuthModal;
