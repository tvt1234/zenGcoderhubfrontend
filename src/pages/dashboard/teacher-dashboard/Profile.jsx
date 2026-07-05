
import { useState } from "react";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;


export default function Profile() {
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [subject, setSubject] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [loading, setLoading] = useState(false);

  const updateProfile = async () => {
    try {
      setLoading(true);

      const res = await fetch(`${BACKEND_URL}/api/users/me`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          mobile,
          profile: {
            address,
            subject,
            class: studentClass,
          },
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Update failed");
      }

      alert("Profile updated successfully 🎉");
      localStorage.setItem("user", JSON.stringify(data));

    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.heading}>👤 Update Profile</h2>

        <input
          style={styles.input}
          placeholder="Mobile"
          onChange={(e) => setMobile(e.target.value)}
        />

        <input
          style={styles.input}
          placeholder="Address"
          onChange={(e) => setAddress(e.target.value)}
        />

        <input
          style={styles.input}
          placeholder="Subject"
          onChange={(e) => setSubject(e.target.value)}
        />

        <input
          style={styles.input}
          placeholder="Class"
          onChange={(e) => setStudentClass(e.target.value)}
        />

        <button
          style={styles.button}
          onClick={updateProfile}
          disabled={loading}
        >
          {loading ? "Updating..." : "Update Profile"}
        </button>
      </div>
    </div>
  );
}

/* ================= INLINE STYLES ================= */
const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #eef2ff, #f8fafc)",
    fontFamily: "Arial",
    padding: "20px",
  },

  card: {
    width: "100%",
    maxWidth: "420px",
    background: "rgba(255,255,255,0.95)",
    padding: "30px",
    borderRadius: "16px",
    boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
    textAlign: "center",
  },

  heading: {
    marginBottom: "20px",
    color: "#1e3a8a",
    fontSize: "22px",
    fontWeight: "700",
  },

  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "12px",
    borderRadius: "10px",
    border: "1px solid #e5e7eb",
    outline: "none",
    fontSize: "14px",
    transition: "0.3s",
  },

  button: {
    width: "100%",
    padding: "12px",
    background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    fontWeight: "600",
    cursor: "pointer",
    fontSize: "15px",
  },
};