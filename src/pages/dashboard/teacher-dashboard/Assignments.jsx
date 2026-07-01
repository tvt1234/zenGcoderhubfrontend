
import { useEffect, useState } from "react";

const BASE = "http://localhost:5000/api";

export default function AssignmentPage() {
  const [assignments, setAssignments] = useState([]);
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  const [form, setForm] = useState({
    title: "",
    subject: "python",
    description: "",
    teacherName: "",
    dueDate: "",
    students: [],
    isAll: false,
  });

  const [editId, setEditId] = useState(null);

  // ================= LOAD =================
  const loadAssignments = async () => {
    const res = await fetch(`${BASE}/assignments`);
    const data = await res.json();
    setAssignments(Array.isArray(data) ? data : []);
  };
  const loadStudents = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch(`${BASE}/users/students`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      setStudents(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
      setStudents([]);
    }
  };

  useEffect(() => {
    loadAssignments();
    loadStudents();
  }, []);

  // ================= SEARCH =================
const searchStudent = async (text) => {
  setSearch(text);

  try {
    const token = localStorage.getItem("token");

    const res = await fetch(
      `${BASE}/users/students/search?name=${text}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await res.json();

    setStudents(Array.isArray(data) ? data : []);
  } catch (err) {
    console.log(err);
    setStudents([]);
  }
};

  // ================= SELECT =================
  const toggleStudent = (id) => {
    setForm((prev) => ({
      ...prev,
      students: prev.students.includes(id)
        ? prev.students.filter((s) => s !== id)
        : [...prev.students, id],
    }));
  };

  // ================= SUBMIT =================
  const handleSubmit = async () => {
    const payload = {
      ...form,
      students: form.isAll ? [] : form.students,
    };

    const url = editId
      ? `${BASE}/assignments/${editId}`
      : `${BASE}/assignments`;

    const method = editId ? "PUT" : "POST";

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setForm({
      title: "",
      subject: "python",
      description: "",
      teacherName: "",
      dueDate: "",
      students: [],
      isAll: false,
    });

    setEditId(null);
    loadAssignments();
  };

  // ================= DELETE =================
  const deleteAssignment = async (id) => {
    await fetch(`${BASE}/assignments/${id}`, {
      method: "DELETE",
    });

    loadAssignments();
  };

  // ================= EDIT =================
  const editAssignment = (a) => {
    setForm({
      title: a.title,
      subject: a.subject,
      description: a.description,
      teacherName: a.teacherName,
      dueDate: a.dueDate?.split("T")[0],
      students: a.students?.map((s) => s._id),
      isAll: a.isAll,
    });

    setEditId(a._id);
  };

  return (
    <div
      style={{
        padding: "25px",
        minHeight: "100vh",
        background: "#f4f7fc",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <h2
        style={{
          color: "#1e293b",
          marginBottom: "20px",
        }}
      >
        📚 Teacher Dashboard
      </h2>

      {/* FORM */}
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
          marginBottom: "25px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <input
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ddd",
          }}
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <select
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ddd",
          }}
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
        >
          <option>python</option>
          <option>nodejs</option>
          <option>javascript</option>
          <option>mongodb</option>
          <option>mysql</option>
          <option>aws</option>
        </select>

        <textarea
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            minHeight: "100px",
          }}
          placeholder="Description"
          value={form.description}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
        />

        <input
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ddd",
          }}
          placeholder="Teacher Name"
          value={form.teacherName}
          onChange={(e) =>
            setForm({ ...form, teacherName: e.target.value })
          }
        />

        <input
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ddd",
          }}
          type="date"
          value={form.dueDate}
          onChange={(e) =>
            setForm({ ...form, dueDate: e.target.value })
          }
        />

        <label style={{ fontWeight: "600" }}>
          <input
            type="checkbox"
            checked={form.isAll}
            onChange={(e) =>
              setForm({ ...form, isAll: e.target.checked })
            }
          />
          {" "}Send to ALL Students
        </label>

        <input
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ddd",
          }}
          placeholder="Search Student"
          value={search}
          onChange={(e) => searchStudent(e.target.value)}
        />

        <h4>Select Students</h4>

        <div
          style={{
            maxHeight: "200px",
            overflowY: "auto",
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "10px",
          }}
        >
          {students.map((s) => (
            <div
              key={s._id}
              style={{
                marginBottom: "8px",
              }}
            >
              <input
                type="checkbox"
                disabled={form.isAll}
                checked={form.students.includes(s._id)}
                onChange={() => toggleStudent(s._id)}
              />
              {" "}
              {s.name}
            </div>
          ))}
        </div>

        <button
          style={{
            background: "#2563eb",
            color: "#fff",
            border: "none",
            padding: "12px",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
          onClick={handleSubmit}
        >
          {editId ? "Update Assignment" : "Create Assignment"}
        </button>
      </div>

      {/* ASSIGNMENTS */}
      <h3 style={{ marginBottom: "15px" }}>
        Assignments
      </h3>

      {assignments.map((a) => (
        <div
          key={a._id}
          style={{
            background: "#fff",
            padding: "15px",
            borderRadius: "12px",
            marginBottom: "15px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
          }}
        >
          <h4>{a.title}</h4>

          <p>
            <strong>Subject:</strong> {a.subject}
          </p>

          <p>{a.description}</p>

          <p>
            <strong>Teacher:</strong> {a.teacherName}
          </p>

          <p>
            <strong>Due:</strong>{" "}
            {a.dueDate
              ? new Date(a.dueDate).toDateString()
              : "No date"}
          </p>

          <p>
            <strong>Students:</strong>{" "}
            {a.isAll
              ? "All Students"
              : a.students?.map((s) => s.name).join(", ")}
          </p>

          <button
            style={{
              background: "#0ea5e9",
              color: "#fff",
              border: "none",
              padding: "8px 12px",
              borderRadius: "6px",
              marginRight: "10px",
              cursor: "pointer",
            }}
            onClick={() => editAssignment(a)}
          >
            Edit
          </button>

          <button
            style={{
              background: "#ef4444",
              color: "#fff",
              border: "none",
              padding: "8px 12px",
              borderRadius: "6px",
              cursor: "pointer",
            }}
            onClick={() => deleteAssignment(a._id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );

}


