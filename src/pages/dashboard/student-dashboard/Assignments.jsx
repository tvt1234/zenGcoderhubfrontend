
import { useEffect, useState } from "react";

const BASE = "http://localhost:5000/api";

const StudentAssignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchAssignments = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch(`${BASE}/assignments`);

      if (!res.ok) {
        throw new Error(`HTTP Error ${res.status}`);
      }

      const data = await res.json();

      setAssignments(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Fetch Error:", err);
      setError(err.message || "Failed to fetch assignments");
      setAssignments([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAssignments();
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f7fc",
        padding: "30px",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        <h1
          style={{
            color: "#1e293b",
            marginBottom: "10px",
          }}
        >
             View all assignments 
        </h1>

        <p
          style={{
            color: "#64748b",
          }}
        >
        </p>
      </div>

      {error && (
        <div
          style={{
            background: "#fee2e2",
            color: "#b91c1c",
            padding: "15px",
            borderRadius: "10px",
            marginBottom: "20px",
          }}
        >
          ⚠️ {error}
        </div>
      )}

      {loading && (
        <div
          style={{
            textAlign: "center",
            padding: "20px",
            background: "#fff",
            borderRadius: "10px",
          }}
        >
          ⏳ Loading assignments...
        </div>
      )}

      {!loading && !error && assignments.length === 0 && (
        <div
          style={{
            textAlign: "center",
            padding: "20px",
            background: "#fff",
            borderRadius: "10px",
          }}
        >
          📭 No assignments found
        </div>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "20px",
        }}
      >
        {assignments.map((a) => (
          <div
            key={a._id}
            style={{
              background: "#fff",
              borderRadius: "15px",
              padding: "20px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              border: "1px solid #e2e8f0",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "15px",
              }}
            >
              <h2
                style={{
                  margin: 0,
                  color: "#1e293b",
                  fontSize: "20px",
                }}
              >
                {a.title}
              </h2>

              <span
                style={{
                  background: a.isAll ? "#dcfce7" : "#dbeafe",
                  color: a.isAll ? "#15803d" : "#1d4ed8",
                  padding: "5px 12px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                {a.isAll ? "ALL" : "PERSONAL"}
              </span>
            </div>

            <p>
              <strong>📘 Subject:</strong> {a.subject}
            </p>

            <p>
              <strong>📄 Description:</strong> {a.description}
            </p>

            <p>
              <strong>👨‍🏫 Teacher:</strong> {a.teacherName}
            </p>

            <p>
              <strong>📅 Due Date:</strong>{" "}
              {a.dueDate
                ? new Date(a.dueDate).toLocaleDateString()
                : "Not Set"}
            </p>

            <button
              onClick={() => alert(`Assignment: ${a.title}`)}
              style={{
                width: "100%",
                padding: "12px",
                marginTop: "15px",
                border: "none",
                borderRadius: "10px",
                background: "#2563eb",
                color: "#fff",
                fontWeight: "bold",
                cursor: "pointer",
                fontSize: "15px",
              }}
            >
              Open Assignment
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentAssignments;