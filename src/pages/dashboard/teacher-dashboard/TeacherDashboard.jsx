
import { useEffect, useState } from "react";

export default function TeacherDashboard() {
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState({
    students: 0,
    assignments: 0,
    attendance: 0,
    courses: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);

    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      setLoading(true);

      const [studentsRes, assignmentsRes, attendanceRes, coursesRes] =
        await Promise.all([
          fetch("http://localhost:5000/api/students"),
          fetch("http://localhost:5000/api/assignments"),
          fetch("http://localhost:5000/api/attendance"),
          fetch("http://localhost:5000/api/courses"),
        ]);

      const students = await studentsRes.json();
      const assignments = await assignmentsRes.json();
      const attendance = await attendanceRes.json();
      const courses = await coursesRes.json();

      setStats({
        students: students?.data?.length || 0,
        assignments: assignments?.data?.length || 0,
        attendance: attendance?.data?.length || 0,
        courses: Array.isArray(courses?.data)
          ? courses.data.length
          : Array.isArray(courses)
          ? courses.length
          : 0,
      });
    } catch (error) {
      console.error("Stats error:", error);

      setStats({
        students: 0,
        assignments: 0,
        attendance: 0,
        courses: 0,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>👨‍🏫 Teacher Dashboard</h1>

      {user && (
        <div style={styles.profileCard}>
          <h2>👤 Profile</h2>
          <p><b>Name:</b> {user.name}</p>
          <p><b>Email:</b> {user.email}</p>
          <p><b>Mobile:</b> {user.mobile || "Not Added"}</p>
          <p><b>Role:</b> {user.role}</p>
        </div>
      )}

      {/* ================= LOADING ================= */}
      {loading ? (
        <p style={{ textAlign: "center" }}>Loading dashboard...</p>
      ) : (
        <div style={styles.grid}>
          <Card title="Total Students" value={stats.students} emoji="👨‍🎓" color="#2563eb" />
          <Card title="Assignments" value={stats.assignments} emoji="📝" color="#16a34a" />
          <Card title="Attendance" value={stats.attendance} emoji="📊" color="#f59e0b" />
          <Card title="Courses" value={stats.courses} emoji="📚" color="#ef4444" />
        </div>
      )}
    </div>
  );
}

/* ================= CARD ================= */
function Card({ title, value, color, emoji }) {
  return (
    <div style={{ ...styles.card, borderTop: `4px solid ${color}` }}>
      <div style={styles.cardHeader}>
        <span style={styles.emoji}>{emoji}</span>
        <h4 style={styles.cardTitle}>{title}</h4>
      </div>

      <h1 style={{ ...styles.cardValue, color }}>{value}</h1>
    </div>
  );
}

/* ================= STYLES ================= */
const styles = {
  page: {
    padding: "40px",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #eef2ff, #e0f2fe)",
    fontFamily: "Arial",
  },

  title: {
    textAlign: "center",
    fontSize: "32px",
    marginBottom: "30px",
    color: "#1e3a8a",
    fontWeight: "bold",
  },

  profileCard: {
    maxWidth: "500px",
    margin: "0 auto 30px auto",
    padding: "20px",
    background: "white",
    borderRadius: "12px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "25px",
    maxWidth: "1100px",
    margin: "0 auto",
  },

  card: {
    background: "rgba(255,255,255,0.9)",
    backdropFilter: "blur(10px)",
    padding: "25px",
    borderRadius: "18px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
    textAlign: "center",
    transition: "0.3s ease",
    cursor: "pointer",
  },

  cardHeader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    marginBottom: "10px",
  },

  emoji: {
    fontSize: "22px",
  },

  cardTitle: {
    fontSize: "15px",
    color: "#6b7280",
    margin: 0,
  },

  cardValue: {
    fontSize: "32px",
    fontWeight: "bold",
    marginTop: "10px",
  },
};