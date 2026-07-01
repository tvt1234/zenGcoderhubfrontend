
import { useEffect, useState } from "react";

export default function Students() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      setLoading(true);

      const res = await fetch("http://localhost:5000/api/students");
      const data = await res.json();

      setStudents(data.data || []);
    } catch (error) {
      console.error("Error:", error);
      setStudents([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      <h2 style={styles.heading}>👨‍🎓 Students</h2>

      {loading ? (
        <p style={styles.loading}>Loading students...</p>
      ) : (
        <div style={styles.card}>
          <table style={styles.table}>
            <thead>
              <tr style={styles.headerRow}>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>Course</th>
                <th style={styles.th}>Status</th>
              </tr>
            </thead>

            <tbody>
              {students.length === 0 ? (
                <tr>
                  <td colSpan="3" style={styles.empty}>
                    No students found
                  </td>
                </tr>
              ) : (
                students.map((s) => (
                  <tr key={s._id} style={styles.row}>
                    <td style={styles.td}>{s.name}</td>
                    <td style={styles.td}>{s.course || "N/A"}</td>
                    <td style={styles.td}>
                      <span
                        style={{
                          ...styles.status,
                          background:
                            s.status === "Inactive"
                              ? "#ef4444"
                              : "#22c55e",
                        }}
                      >
                        {s.status || "Active"}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

/* ================= MODERN STYLES ================= */
const styles = {
  page: {
    padding: "30px",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #eef2ff, #f8fafc)",
    fontFamily: "Arial",
  },

  heading: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#1e3a8a",
    fontSize: "28px",
    fontWeight: "bold",
  },

  loading: {
    textAlign: "center",
    color: "#6b7280",
  },

  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "16px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
    maxWidth: "900px",
    margin: "0 auto",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
  },

  headerRow: {
    background: "linear-gradient(90deg, #2563eb, #1d4ed8)",
    color: "#fff",
  },

  th: {
    padding: "14px",
    textAlign: "center",
    fontSize: "15px",
  },

  td: {
    padding: "14px",
    textAlign: "center",
    borderBottom: "1px solid #e5e7eb",
    fontSize: "14px",
  },

  row: {
    transition: "0.3s",
    cursor: "pointer",
  },

  status: {
    color: "white",
    padding: "6px 12px",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "bold",
  },

  empty: {
    textAlign: "center",
    padding: "20px",
    color: "#6b7280",
  },
};