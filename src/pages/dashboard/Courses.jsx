import { useState } from "react";

const Courses = () => {
  const [courses, setCourses] = useState([
    { id: 1, title: "React JS", duration: "3 Months" },
    { id: 2, title: "Node JS", duration: "2 Months" },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [courseName, setCourseName] = useState("");
  const [duration, setDuration] = useState("");
  const [editId, setEditId] = useState(null);

  const saveCourse = () => {
    if (!courseName.trim()) {
      alert("Course Name is required");
      return;
    }

    if (!duration) {
      alert("Please select duration");
      return;
    }

    if (editId) {
      setCourses(
        courses.map((course) =>
          course.id === editId
            ? {
                ...course,
                title: courseName,
                duration,
              }
            : course
        )
      );
    } else {
      setCourses([
        ...courses,
        {
          id: Date.now(),
          title: courseName,
          duration,
        },
      ]);
    }

    closeModal();
  };

  const editCourse = (course) => {
    setEditId(course.id);
    setCourseName(course.title);
    setDuration(course.duration);
    setShowModal(true);
  };

  const deleteCourse = (id) => {
    if (window.confirm("Delete this course?")) {
      setCourses(courses.filter((course) => course.id !== id));
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setEditId(null);
    setCourseName("");
    setDuration("");
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
            "linear-gradient(135deg,#667eea,#764ba2)",
          padding: "25px",
          borderRadius: "15px",
          color: "#fff",
          marginBottom: "25px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
        }}
      >
        <h1 style={{ margin: 0 }}>
          📚 Course 
        </h1>

        
      </div>

      {/* Add Button */}
      <div style={{ marginBottom: 20 }}>
        <button
          onClick={() => {
            setEditId(null);
            setCourseName("");
            setDuration("");
            setShowModal(true);
          }}
          style={{
            background: "#28a745",
            color: "#fff",
            border: "none",
            padding: "12px 20px",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: 600,
            fontSize: "15px",
            boxShadow:
              "0 4px 10px rgba(40,167,69,0.3)",
          }}
        >
          ➕ Add Course
        </button>
      </div>

      {/* Table */}
      <div
        style={{
          background: "#fff",
          borderRadius: "15px",
          overflow: "hidden",
          boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
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
                background: "#1f2937",
                color: "#fff",
              }}
            >
              <th style={thStyle}>ID</th>
              <th style={thStyle}>Course Name</th>
              <th style={thStyle}>Duration</th>
              <th style={thStyle}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {courses.map((course) => (
              <tr
                key={course.id}
                style={{
                  borderBottom:
                    "1px solid #e5e7eb",
                }}
              >
                <td style={tdStyle}>{course.id}</td>

                <td style={tdStyle}>
                  <strong>{course.title}</strong>
                </td>

                <td style={tdStyle}>
                  {course.duration}
                </td>

                <td style={tdStyle}>
                  <button
                    onClick={() =>
                      editCourse(course)
                    }
                    style={{
                      background: "#0d6efd",
                      color: "#fff",
                      border: "none",
                      padding: "8px 14px",
                      borderRadius: "6px",
                      marginRight: "10px",
                      cursor: "pointer",
                    }}
                  >
                    ✏️ Edit
                  </button>

                  <button
                    onClick={() =>
                      deleteCourse(course.id)
                    }
                    style={{
                      background: "#dc3545",
                      color: "#fff",
                      border: "none",
                      padding: "8px 14px",
                      borderRadius: "6px",
                      cursor: "pointer",
                    }}
                  >
                    🗑 Delete
                  </button>
                </td>
              </tr>
            ))}

            {courses.length === 0 && (
              <tr>
                <td
                  colSpan="4"
                  style={{
                    textAlign: "center",
                    padding: "30px",
                    color: "#777",
                  }}
                >
                  No Courses Available
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
            "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
        }}
      >
        <div style={cardStyle}>
          <h2>{courses.length}</h2>
          <p>Total Courses</p>
        </div>

        <div style={cardStyle}>
          <h2>Active</h2>
          <p>Training Programs</p>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div style={overlayStyle}>
          <div style={modalStyle}>
            <h2
              style={{
                marginBottom: "20px",
                color: "#333",
              }}
            >
              {editId
                ? "✏️ Edit Course"
                : "📚 Add New Course"}
            </h2>

            <div style={{ marginBottom: 15 }}>
              <label>
                <strong>Course Name</strong>
              </label>

              <input
                type="text"
                value={courseName}
                onChange={(e) =>
                  setCourseName(
                    e.target.value
                  )
                }
                placeholder="Enter Course Name"
                style={inputStyle}
              />
            </div>

            <div style={{ marginBottom: 20 }}>
              <label>
                <strong>Duration</strong>
              </label>

              <select
                value={duration}
                onChange={(e) =>
                  setDuration(
                    e.target.value
                  )
                }
                style={inputStyle}
              >
                <option value="">
                  Select Duration
                </option>
                <option value="1 Month">
                  1 Month
                </option>
                <option value="2 Months">
                  2 Months
                </option>
                <option value="3 Months">
                  3 Months
                </option>
                <option value="6 Months">
                  6 Months
                </option>
                <option value="12 Months">
                  12 Months
                </option>
              </select>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent:
                  "flex-end",
                gap: "10px",
              }}
            >
              <button
                onClick={closeModal}
                style={{
                  padding: "10px 18px",
                  background: "#6c757d",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>

              <button
                onClick={saveCourse}
                style={{
                  padding: "10px 18px",
                  background:
                    "linear-gradient(135deg,#667eea,#764ba2)",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontWeight: 600,
                }}
              >
                {editId
                  ? "Update Course"
                  : "Save Course"}
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
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999,
};

const modalStyle = {
  width: "450px",
  background: "#fff",
  padding: "25px",
  borderRadius: "15px",
  boxShadow:
    "0 10px 30px rgba(0,0,0,0.2)",
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "8px",
  borderRadius: "8px",
  border: "1px solid #ddd",
  outline: "none",
  fontSize: "14px",
  boxSizing: "border-box",
};

export default Courses;