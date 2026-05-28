import StatsSection from "../components/StatsSection";
import Testimonials from "../components/Testimonials";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import JoinNowModal from "../components/JoinNowModal";

const Home = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const courses = [
    "Node.js",
    "React.js",
    "Python",
    "MongoDB",
    "AWS",
    "Docker",
    "Kafka",
    "Redis",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          background:
            "linear-gradient(to right, #020617, #1e3a8a)",
          color: "white",
          padding: "100px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1300px",
            margin: "auto",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "50px",
            alignItems: "center",
          }}
        >
          {/* Left Content */}
          <div>
            <h1
              style={{
                fontSize: "65px",
                fontWeight: "bold",
                lineHeight: "85px",
              }}
            >
              Learn Engineering Skills
              <span style={{ color: "#38bdf8" }}>
                {" "}
                From Experts
              </span>
            </h1>

            <p
              style={{
                marginTop: "25px",
                fontSize: "22px",
                lineHeight: "38px",
                color: "#cbd5e1",
              }}
            >
              Master modern technologies like Node.js,
              React.js, AWS, MongoDB, Docker, Kafka,
              Redis, and become industry ready with
              real-world projects.
            </p>

            {/* Buttons */}
            <div
              style={{
                display: "flex",
                gap: "20px",
                marginTop: "40px",
                flexWrap: "wrap",
              }}
            >
              <button style={primaryBtn} onClick={() => navigate("/explore-courses")}>
                Explore Courses
              </button>

              <button style={secondaryBtn} onClick={() => navigate("/free-demo") }>
                Free Demo
              </button>
            </div>

            {/* Stats */}
            <div
              style={{
                display: "flex",
                gap: "40px",
                marginTop: "50px",
                flexWrap: "wrap",
              }}
            >
              <div>
                <h2 style={statNumber}>15M+</h2>
                <p style={statText}>Learners</p>
              </div>

              <div>
                <h2 style={statNumber}>250+</h2>
                <p style={statText}>Courses</p>
              </div>

              <div>
                <h2 style={statNumber}>95%</h2>
                <p style={statText}>Placement Rate</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
              alt="students"
              style={{
                width: "100%",
                borderRadius: "25px",
                boxShadow:
                  "0 10px 30px rgba(0,0,0,0.4)",
              }}
            />
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section
        style={{
          padding: "80px 20px",
          background: "#ffffff",
        }}
      >
        <div
          style={{
            maxWidth: "1300px",
            margin: "auto",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "48px",
              marginBottom: "60px",
              color: "#0f172a",
            }}
          >
            Trending Technologies
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "30px",
            }}
          >
            {courses.map((course) => (
              <div
                key={course}
                style={{
                  background: "#f8fafc",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow:
                    "0 5px 15px rgba(0,0,0,0.1)",
                  transition: "0.3s",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
                  alt={course}
                  style={{
                    width: "100%",
                    height: "220px",
                    objectFit: "cover",
                  }}
                />

                <div style={{ padding: "25px" }}>
                  <h3
                    style={{
                      fontSize: "28px",
                      color: "#0f172a",
                    }}
                  >
                    {course}
                  </h3>

                  <p
                    style={{
                      marginTop: "15px",
                      color: "#475569",
                      lineHeight: "28px",
                    }}
                  >
                    Professional industry-focused
                    training with live projects.
                  </p>

                  <button
                    style={{
                      marginTop: "20px",
                      background: "#2563eb",
                      color: "white",
                      border: "none",
                      padding: "12px 25px",
                      borderRadius: "10px",
                      cursor: "pointer",
                      fontSize: "16px",
                    }}
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />
      <Testimonials />
      <JoinNowModal
  isOpen={open}
  onClose={() => setOpen(false)}
/>

      {/* CTA Section */}
      <section
        style={{
          background:
            "linear-gradient(to right, #1e3a8a, #06b6d4)",
          padding: "100px 20px",
          textAlign: "center",
          color: "white",
        }}
      >
        <h2
          style={{
            fontSize: "55px",
            marginBottom: "25px",
          }}
        >
          Ready To Start Your Tech Career?
        </h2>

        <p
          style={{
            fontSize: "22px",
            maxWidth: "800px",
            margin: "auto",
            lineHeight: "38px",
          }}
        >
          Join thousands of learners mastering modern
          engineering technologies and building
          successful careers.
        </p>

        <button
          style={{
            marginTop: "40px",
            padding: "16px 40px",
            border: "none",
            borderRadius: "12px",
            background: "#ffffff",
            color: "#1e3a8a",
            fontSize: "20px",
            fontWeight: "bold",
            cursor: "pointer",
          }}  onClick={() => setOpen(true)}
        >
          Join Now
        </button>
      </section>
    </div>
  );
};

/* Styles */

const primaryBtn = {
  background: "#2563eb",
  color: "white",
  border: "none",
  padding: "16px 35px",
  borderRadius: "12px",
  fontSize: "18px",
  cursor: "pointer",
};

const secondaryBtn = {
  background: "transparent",
  color: "white",
  border: "2px solid white",
  padding: "16px 35px",
  borderRadius: "12px",
  fontSize: "18px",
  cursor: "pointer",
};

const statNumber = {
  fontSize: "42px",
  color: "#38bdf8",
};

const statText = {
  color: "#cbd5e1",
};

export default Home;