import { useState } from "react";

const Teachers = () => {
  const [teachers, setTeachers] = useState([
    {
      id: 1,
      name: "John Smith",
      subject: "React JS",
      experience: "5 Years",
    },
    {
      id: 2,
      name: "Sarah Wilson",
      subject: "Node JS",
      experience: "3 Years",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingTeacher, setEditingTeacher] =
    useState(null);

  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    experience: "",
  });

  const openAddModal = () => {
    setEditingTeacher(null);

    setFormData({
      name: "",
      subject: "",
      experience: "",
    });

    setShowModal(true);
  };

  const openEditModal = (teacher) => {
    setEditingTeacher(teacher);

    setFormData({
      name: teacher.name,
      subject: teacher.subject,
      experience: teacher.experience,
    });

    setShowModal(true);
  };

  const handleSave = () => {
    if (
      !formData.name ||
      !formData.subject ||
      !formData.experience
    ) {
      alert("Please fill all fields");
      return;
    }

    if (editingTeacher) {
      setTeachers(
        teachers.map((teacher) =>
          teacher.id === editingTeacher.id
            ? {
                ...teacher,
                ...formData,
              }
            : teacher
        )
      );
    } else {
      setTeachers([
        ...teachers,
        {
          id: Date.now(),
          ...formData,
        },
      ]);
    }

    setShowModal(false);
  };

  const deleteTeacher = (id) => {
    if (window.confirm("Delete this teacher?")) {
      setTeachers(
        teachers.filter(
          (teacher) => teacher.id !== id
        )
      );
    }
  };

  return (
    <div
      style={{
        padding: "30px",
        background: "#f4f7fc",
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <div
        style={{
          background:
            "linear-gradient(135deg,#00c6ff,#0072ff)",
          color: "#fff",
          padding: "25px",
          borderRadius: "16px",
          marginBottom: "25px",
          boxShadow:
            "0 10px 25px rgba(0,114,255,0.25)",
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: "34px",
          }}
        >
          👨‍🏫 Teacher Management
        </h1>

        <p
          style={{
            marginTop: "8px",
            opacity: 0.9,
          }}
        >
          Manage all faculty members easily
        </p>
      </div>

      {/* Add Button */}
      <div style={{ marginBottom: "20px" }}>
        <button
          onClick={openAddModal}
          style={{
            background:
              "linear-gradient(135deg,#28a745,#20c997)",
            color: "#fff",
            border: "none",
            padding: "12px 22px",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "600",
            fontSize: "15px",
            boxShadow:
              "0 5px 15px rgba(40,167,69,0.3)",
          }}
        >
          ➕ Add Teacher
        </button>
      </div>

      {/* Table */}
      <div
        style={{
          background: "#fff",
          borderRadius: "15px",
          overflow: "hidden",
          boxShadow:
            "0 5px 20px rgba(0,0,0,0.08)",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr
              style={{
                background: "#212529",
                color: "#fff",
              }}
            >
              <th style={thStyle}>ID</th>
              <th style={thStyle}>Teacher Name</th>
              <th style={thStyle}>Subject</th>
              <th style={thStyle}>Experience</th>
              <th style={thStyle}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {teachers.map((teacher) => (
              <tr
                key={teacher.id}
                style={{
                  borderBottom:
                    "1px solid #f1f1f1",
                }}
              >
                <td style={tdStyle}>
                  {teacher.id}
                </td>

                <td style={tdStyle}>
                  <strong>{teacher.name}</strong>
                </td>

                <td style={tdStyle}>
                  {teacher.subject}
                </td>

                <td style={tdStyle}>
                  {teacher.experience}
                </td>

                <td style={tdStyle}>
                  <button
                    onClick={() =>
                      openEditModal(teacher)
                    }
                    style={{
                      background: "#0d6efd",
                      color: "#fff",
                      border: "none",
                      padding: "8px 15px",
                      borderRadius: "6px",
                      marginRight: "10px",
                      cursor: "pointer",
                    }}
                  >
                    ✏️ Edit
                  </button>

                  <button
                    onClick={() =>
                      deleteTeacher(teacher.id)
                    }
                    style={{
                      background: "#dc3545",
                      color: "#fff",
                      border: "none",
                      padding: "8px 15px",
                      borderRadius: "6px",
                      cursor: "pointer",
                    }}
                  >
                    🗑 Delete
                  </button>
                </td>
              </tr>
            ))}

            {teachers.length === 0 && (
              <tr>
                <td
                  colSpan="5"
                  style={{
                    textAlign: "center",
                    padding: "30px",
                    color: "#888",
                  }}
                >
                  No Teachers Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Stats */}
      <div
        style={{
          marginTop: "25px",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
        }}
      >
        <div style={cardStyle}>
          <h2>{teachers.length}</h2>
          <p>Total Teachers</p>
        </div>

        <div style={cardStyle}>
          <h2>
            {
              new Set(
                teachers.map(
                  (teacher) => teacher.subject
                )
              ).size
            }
          </h2>
          <p>Subjects Covered</p>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div style={overlayStyle}>
          <div style={modalStyle}>
            <h2>
              {editingTeacher
                ? "✏️ Edit Teacher"
                : "➕ Add Teacher"}
            </h2>

            <input
              type="text"
              placeholder="Teacher Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value,
                })
              }
              style={inputStyle}
            />

            <input
              type="text"
              placeholder="Subject"
              value={formData.subject}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  subject: e.target.value,
                })
              }
              style={inputStyle}
            />

            <input
              type="text"
              placeholder="Experience"
              value={formData.experience}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  experience: e.target.value,
                })
              }
              style={inputStyle}
            />

            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "10px",
                marginTop: "20px",
              }}
            >
              <button
                onClick={() =>
                  setShowModal(false)
                }
                style={{
                  background: "#6c757d",
                  color: "#fff",
                  border: "none",
                  padding: "10px 18px",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>

              <button
                onClick={handleSave}
                style={{
                  background:
                    "linear-gradient(135deg,#00c6ff,#0072ff)",
                  color: "#fff",
                  border: "none",
                  padding: "10px 18px",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                {editingTeacher
                  ? "Update"
                  : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const thStyle = {
  padding: "15px",
  textAlign: "left",
};

const tdStyle = {
  padding: "15px",
};

const cardStyle = {
  background: "#fff",
  padding: "20px",
  borderRadius: "12px",
  textAlign: "center",
  boxShadow:
    "0 5px 15px rgba(0,0,0,0.08)",
};

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
};

const modalStyle = {
  background: "#fff",
  width: "450px",
  maxWidth: "95%",
  borderRadius: "15px",
  padding: "25px",
  boxShadow:
    "0 10px 30px rgba(0,0,0,0.2)",
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "12px",
  borderRadius: "8px",
  border: "1px solid #ddd",
  fontSize: "14px",
  boxSizing: "border-box",
};

export default Teachers;