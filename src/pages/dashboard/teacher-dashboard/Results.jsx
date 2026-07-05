
import { useEffect, useState } from "react";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const BASE = `${BACKEND_URL}/api`;


export default function ResultPage() {
  const [students, setStudents] = useState([]);
  const [results, setResults] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    student: "",
    subject: "",
    examType: "Unit Test",
    marksObtained: "",
    totalMarks: "",
  });

  const getToken = () => localStorage.getItem("token");

  useEffect(() => {
    fetchStudents();
    fetchResults();
  }, []);

  // ================= GET STUDENTS =================
  const fetchStudents = async () => {
    const token = getToken();

    const res = await fetch(`${BASE}/users/students`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await res.json();
    setStudents(Array.isArray(data) ? data : []);
  };

  // ================= GET RESULTS =================
  const fetchResults = async () => {
    const token = getToken();

    const res = await fetch(`${BASE}/results`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await res.json();
    setResults(Array.isArray(data) ? data : []);
  };

  // ================= SUBMIT (CREATE / UPDATE) =================
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = getToken();

    const url = editingId
      ? `${BASE}/results/${editingId}`
      : `${BASE}/results`;

    const method = editingId ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message || "Error");
      return;
    }

    setForm({
      student: "",
      subject: "",
      examType: "Unit Test",
      marksObtained: "",
      totalMarks: "",
    });

    setEditingId(null);
    fetchResults();
  };

  // ================= DELETE =================
  const handleDelete = async (id) => {
    const token = getToken();

    await fetch(`${BASE}/results/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });

    fetchResults();
  };

  // ================= EDIT =================
  const handleEdit = (r) => {
    setEditingId(r._id);

    setForm({
      student: r.student?._id || "",
      subject: r.subject,
      examType: r.examType,
      marksObtained: r.marksObtained,
      totalMarks: r.totalMarks,
    });
  };

  return (
    <div style={styles.container}>
      <h2>Result Dashboard</h2>

      {/* FORM */}
      <div style={styles.card}>
        <form onSubmit={handleSubmit}>
          <select
            style={styles.input}
            value={form.student}
            onChange={(e) =>
              setForm({ ...form, student: e.target.value })
            }
          >
            <option value="">Select Student</option>
            {students.map((s) => (
              <option key={s._id} value={s._id}>
                {s.name}
              </option>
            ))}
          </select>

          <input
            style={styles.input}
            placeholder="Subject"
            value={form.subject}
            onChange={(e) =>
              setForm({ ...form, subject: e.target.value })
            }
          />

          <select
            style={styles.input}
            value={form.examType}
            onChange={(e) =>
              setForm({ ...form, examType: e.target.value })
            }
          >
            <option>Unit Test</option>
            <option>Midterm</option>
            <option>Final</option>
          </select>

          <input
            style={styles.input}
            type="number"
            placeholder="Marks Obtained"
            value={form.marksObtained}
            onChange={(e) =>
              setForm({ ...form, marksObtained: e.target.value })
            }
          />

          <input
            style={styles.input}
            type="number"
            placeholder="Total Marks"
            value={form.totalMarks}
            onChange={(e) =>
              setForm({ ...form, totalMarks: e.target.value })
            }
          />

          <button style={styles.button} type="submit">
            {editingId ? "Update Result" : "Create Result"}
          </button>
        </form>
      </div>

      {/* TABLE */}
      <div style={styles.card}>
        <table style={styles.table}>
          <thead>
            <tr style={styles.headRow}>
              <th style={styles.thtd}>Student</th>
              <th style={styles.thtd}>Subject</th>
              <th style={styles.thtd}>Exam</th>
              <th style={styles.thtd}>Marks</th>
              <th style={styles.thtd}>%</th>
              <th style={styles.thtd}>Grade</th>
              <th style={styles.thtd}>Status</th>
              <th style={styles.thtd}>Action</th>
            </tr>
          </thead>

          <tbody>
            {results.map((r) => (
              <tr key={r._id}>
                <td style={styles.thtd}>{r.student?.name}</td>
                <td style={styles.thtd}>{r.subject}</td>
                <td style={styles.thtd}>{r.examType}</td>
                <td style={styles.thtd}>
                  {r.marksObtained}/{r.totalMarks}
                </td>
                <td style={styles.thtd}>
                  {r.percentage?.toFixed(2)}%
                </td>
                <td style={styles.thtd}>{r.grade}</td>
                <td style={styles.thtd}>{r.resultStatus}</td>
                <td style={styles.thtd}>
                  <button
                    style={{ ...styles.button, background: "orange" }}
                    onClick={() => handleEdit(r)}
                  >
                    Edit
                  </button>

                  <button
                    style={{ ...styles.button, background: "red" }}
                    onClick={() => handleDelete(r._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ================= STYLES =================
const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial",
    background: "#f4f6f8",
    minHeight: "100vh",
  },
  card: {
    background: "#fff",
    padding: "15px",
    borderRadius: "10px",
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    margin: "5px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  button: {
    padding: "10px 15px",
    background: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginLeft: "5px",
  },
  table: { width: "100%", borderCollapse: "collapse" },
  thtd: {
    border: "1px solid #ddd",
    padding: "10px",
    textAlign: "center",
  },
  headRow: {
    background: "#007bff",
    color: "#fff",
  },
};