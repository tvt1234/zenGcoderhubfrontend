import courses from "../data/courses";
import { useNavigate } from "react-router-dom";

const ExploreCourses = () => {
  const navigate = useNavigate();

  return (
    <div style={{ background: "#f8fafc", minHeight: "100vh" }}>
      
      {/* HERO */}
      <section
        style={{
          background: "linear-gradient(to right, #0f172a, #1e3a8a)",
          color: "white",
          padding: "90px 20px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "50px" }}>
          Explore Our Courses
        </h1>
        <p style={{ fontSize: "18px", marginTop: "10px" }}>
          Learn industry-ready skills and get placed in top companies
        </p>
      </section>

      {/* COURSES GRID */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "25px",
          padding: "60px 20px",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        {courses.map((course) => (
          <div
            key={course.name}
            style={{
              background: "white",
              borderRadius: "15px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
              padding: "20px",
            }}
          >
            <h2>{course.name}</h2>
            <p style={{ color: "#475569" }}>{course.desc}</p>

            <h3 style={{ color: "#2563eb" }}>
              Fee: {course.fee}
            </h3>

            <button
              onClick={() =>
                navigate(`/course/${course.name}`)
              }
              style={{
                marginTop: "10px",
                padding: "10px 20px",
                background: "#2563eb",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              View Details
            </button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ExploreCourses;