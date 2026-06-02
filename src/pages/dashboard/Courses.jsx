import { useState } from "react";

const Courses = () => {
  const [courses, setCourses] = useState([
    { id: 1, title: "React JS", duration: "3 Months" },
    { id: 2, title: "Node JS", duration: "2 Months" },
  ]);

  const addCourse = () => {
    const title = prompt("Enter Course Name");

    if (!title) return;

    setCourses([
      ...courses,
      {
        id: Date.now(),
        title,
        duration: "1 Month",
      },
    ]);
  };

  const editCourse = (id) => {
    const title = prompt("Update Course Name");

    if (!title) return;

    setCourses(
      courses.map((course) =>
        course.id === id ? { ...course, title } : course
      )
    );
  };

  const deleteCourse = (id) => {
    if (window.confirm("Delete this course?")) {
      setCourses(courses.filter((course) => course.id !== id));
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
            "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          padding: "25px",
          borderRadius: "15px",
          color: "#fff",
          marginBottom: "25px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
        }}
      >
        <h1 style={{ margin: 0 }}>📚 Course Management</h1>
        <p style={{ marginTop: "8px" }}>
          Manage all your training courses easily
        </p>
      </div>

      {/* Add Button */}
      <div style={{ marginBottom: "20px" }}>
        <button
          onClick={addCourse}
          style={{
            background: "#28a745",
            color: "#fff",
            border: "none",
            padding: "12px 20px",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "15px",
            fontWeight: "600",
            boxShadow: "0 4px 10px rgba(40,167,69,0.3)",
          }}
        >
          ➕ Add Course
        </button>
      </div>

      {/* Table Card */}
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
                background: "#343a40",
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
                  borderBottom: "1px solid #eee",
                }}
              >
                <td style={tdStyle}>{course.id}</td>

                <td style={tdStyle}>
                  <strong>{course.title}</strong>
                </td>

                <td style={tdStyle}>{course.duration}</td>

                <td style={tdStyle}>
                  <button
                    onClick={() => editCourse(course.id)}
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
                    onClick={() => deleteCourse(course.id)}
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

      {/* Stats Cards */}
      <div
        style={{
          marginTop: "25px",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        <div style={cardStyle}>
          <h3>{courses.length}</h3>
          <p>Total Courses</p>
        </div>

        <div style={cardStyle}>
          <h3>Active</h3>
          <p>Training Programs</p>
        </div>
      </div>
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
  boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
};

export default Courses;