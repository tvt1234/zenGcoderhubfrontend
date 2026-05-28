import { useParams } from "react-router-dom";
import courses from "../data/courses";

const CourseDetails = () => {
  const { name } = useParams();

  const course = courses.find(
    (c) => c.name === name
  );

  if (!course) {
    return <h2>Course Not Found</h2>;
  }

  return (
    <div
      style={{
        padding: "80px 20px",
        maxWidth: "900px",
        margin: "auto",
      }}
    >
      <h1 style={{ fontSize: "50px" }}>
        {course.name}
      </h1>

      <h2 style={{ color: "#2563eb" }}>
        Fee: {course.fee}
      </h2>

      <p
        style={{
          fontSize: "20px",
          marginTop: "20px",
          lineHeight: "32px",
        }}
      >
        {course.desc}
      </p>

      <button
        style={{
          marginTop: "30px",
          padding: "14px 30px",
          background: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        Enroll Now
      </button>
    </div>
  );
};

export default CourseDetails;