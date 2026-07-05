import { useEffect, useState } from "react";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const API = `${BACKEND_URL}/api/teachers`;


const Teachers = () => {
  const [teachers, setTeachers] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [editingTeacher, setEditingTeacher] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    experience: "",
  });

  // ================= GET =================
  const fetchTeachers = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      setTeachers(data.data || []);
    } catch (error) {
      console.log("GET ERROR:", error);
    }
  };

  useEffect(() => {
    fetchTeachers();
  }, []);

  // ================= ADD =================
  const openAddModal = () => {
    setEditingTeacher(null);
    setFormData({ name: "", subject: "", experience: "" });
    setShowModal(true);
  };

  // ================= EDIT =================
  const openEditModal = (teacher) => {
    setEditingTeacher(teacher);
    setFormData({
      name: teacher.name,
      subject: teacher.subject,
      experience: teacher.experience,
    });
    setShowModal(true);
  };

  // ================= SAVE =================
  const handleSave = async () => {
    if (!formData.name || !formData.subject || !formData.experience) {
      alert("Please fill all fields");
      return;
    }

    try {
      let url = API;
      let method = "POST";

      if (editingTeacher?._id) {
        url = `${API}/${editingTeacher._id}`;
        method = "PUT";
      }

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Error");

      setShowModal(false);
      setEditingTeacher(null);
      setFormData({ name: "", subject: "", experience: "" });

      fetchTeachers();
    } catch (error) {
      alert(error.message);
    }
  };

  // ================= DELETE =================
  const deleteTeacher = async (id) => {
    if (!window.confirm("Delete this teacher?")) return;

    try {
      const res = await fetch(`${API}/${id}`, { method: "DELETE" });
      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Delete failed");

      fetchTeachers();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div style={styles.page}>
      {/* HEADER */}
      <div style={styles.header}>
        <h1>👨‍🏫 Teacher Management</h1>
        <p>Manage all faculty members easily</p>
      </div>

      <button style={styles.addBtn} onClick={openAddModal}>
        ➕ Add Teacher
      </button>

      {/* TABLE */}
      <div style={styles.tableBox}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>ID</th>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Subject</th>
              <th style={styles.th}>Experience</th>
              <th style={styles.th}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {teachers.map((t) => (
              <tr key={t._id} style={styles.tr}>
                <td style={styles.td}>{t._id}</td>
                <td style={styles.td}><b>{t.name}</b></td>
                <td style={styles.td}>{t.subject}</td>
                <td style={styles.td}>{t.experience}</td>
                <td style={styles.td}>
                  <button onClick={() => openEditModal(t)} style={styles.editBtn}>
                    Edit
                  </button>

                  <button onClick={() => deleteTeacher(t._id)} style={styles.deleteBtn}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      {showModal && (
        <div style={styles.overlay}>
          <div style={styles.modal}>
            <h2>{editingTeacher ? "Edit Teacher" : "Add Teacher"}</h2>

            <input
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              style={styles.input}
            />

            <input
              placeholder="Subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              style={styles.input}
            />

            <input
              placeholder="Experience"
              value={formData.experience}
              onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
              style={styles.input}
            />

            <div style={{ display: "flex", justifyContent: "flex-end", gap: 10 }}>
              <button onClick={() => setShowModal(false)} style={styles.cancelBtn}>
                Cancel
              </button>

              <button onClick={handleSave} style={styles.saveBtn}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// ================= CSS =================
const styles = {
  page: { padding: 30, background: "#f4f7fc", minHeight: "100vh" },

  header: {
    background: "linear-gradient(135deg,#00c6ff,#0072ff)",
    color: "#fff",
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
  },

  addBtn: {
    background: "#28a745",
    color: "#fff",
    padding: "10px 15px",
    border: "none",
    borderRadius: 8,
    marginBottom: 20,
    cursor: "pointer",
  },

  tableBox: {
    background: "#fff",
    borderRadius: 12,
    overflow: "hidden",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
  },

  th: {
    border: "2px solid #000",
    padding: "10px",
    background: "#111",
    color: "#fff",
  },

  td: {
    border: "2px solid #000",
    padding: "10px",
  },

  tr: {
    transition: "0.2s",
  },

  editBtn: {
    marginRight: 10,
    background: "#0d6efd",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    borderRadius: 6,
  },

  deleteBtn: {
    background: "#dc3545",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    borderRadius: 6,
  },

  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  modal: {
    background: "#fff",
    padding: 20,
    borderRadius: 10,
    width: 400,
  },

  input: {
    width: "100%",
    padding: 10,
    margin: "10px 0",
    borderRadius: 6,
    border: "1px solid #ccc",
  },

  cancelBtn: {
    background: "#6c757d",
    color: "#fff",
    padding: 8,
    border: "none",
    borderRadius: 6,
  },

  saveBtn: {
    background: "#0072ff",
    color: "#fff",
    padding: 8,
    border: "none",
    borderRadius: 6,
  },
};

export default Teachers;
