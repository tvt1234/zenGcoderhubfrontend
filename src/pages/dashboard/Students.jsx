import { useState } from "react";

const Students = () => {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Amit Sharma",
      course: "React JS",
      email: "amit@gmail.com",
    },
    {
      id: 2,
      name: "Priya Verma",
      course: "Node JS",
      email: "priya@gmail.com",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingStudent, setEditingStudent] =
    useState(null);

  const [formData, setFormData] = useState({
    name: "",
    course: "",
    email: "",
  });

  const openAddModal = () => {
    setEditingStudent(null);

    setFormData({
      name: "",
      course: "",
      email: "",
    });

    setShowModal(true);
  };

  const openEditModal = (student) => {
    setEditingStudent(student);

    setFormData({
      name: student.name,
      course: student.course,
      email: student.email,
    });

    setShowModal(true);
  };

  const handleSave = () => {
    if (
      !formData.name ||
      !formData.course ||
      !formData.email
    ) {
      alert("Please fill all fields");
      return;
    }

    if (editingStudent) {
      setStudents(
        students.map((student) =>
          student.id === editingStudent.id
            ? {
                ...student,
                ...formData,
              }
            : student
        )
      );
    } else {
      setStudents([
        ...students,
        {
          id: Date.now(),
          ...formData,
        },
      ]);
    }

    setShowModal(false);
  };

  const deleteStudent = (id) => {
    if (window.confirm("Delete this student?")) {
      setStudents(
        students.filter(
          (student) => student.id !== id
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
            "linear-gradient(135deg,#ff6b6b,#ee0979)",
          color: "#fff",
          padding: "25px",
          borderRadius: "16px",
          marginBottom: "25px",
          boxShadow:
            "0 10px 25px rgba(238,9,121,0.25)",
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: "34px",
          }}
        >
          🎓 Student
        </h1>

        
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
          ➕ Add Student
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
              <th style={thStyle}>Student Name</th>
              <th style={thStyle}>Course</th>
              <th style={thStyle}>Email</th>
              <th style={thStyle}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr
                key={student.id}
                style={{
                  borderBottom:
                    "1px solid #f1f1f1",
                }}
              >
                <td style={tdStyle}>
                  {student.id}
                </td>

                <td style={tdStyle}>
                  <strong>{student.name}</strong>
                </td>

                <td style={tdStyle}>
                  {student.course}
                </td>

                <td style={tdStyle}>
                  {student.email}
                </td>

                <td style={tdStyle}>
                  <button
                    onClick={() =>
                      openEditModal(student)
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
                      deleteStudent(student.id)
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

            {students.length === 0 && (
              <tr>
                <td
                  colSpan="5"
                  style={{
                    textAlign: "center",
                    padding: "30px",
                    color: "#888",
                  }}
                >
                  No Students Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Stats Cards */}
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
          <h2>{students.length}</h2>
          <p>Total Students</p>
        </div>

        <div style={cardStyle}>
          <h2>
            {
              new Set(
                students.map(
                  (student) => student.course
                )
              ).size
            }
          </h2>
          <p>Courses Enrolled</p>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div style={overlayStyle}>
          <div style={modalStyle}>
            <h2>
              {editingStudent
                ? "✏️ Edit Student"
                : "➕ Add Student"}
            </h2>

            <input
              type="text"
              placeholder="Student Name"
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
              placeholder="Course"
              value={formData.course}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  course: e.target.value,
                })
              }
              style={inputStyle}
            />

            <input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
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
                    "linear-gradient(135deg,#ff6b6b,#ee0979)",
                  color: "#fff",
                  border: "none",
                  padding: "10px 18px",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                {editingStudent
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
  width: "500px",
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

export default Students;