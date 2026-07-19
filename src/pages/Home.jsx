import StatsSection from "../components/StatsSection";
import Testimonials from "../components/Testimonials";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import JoinNowModal from "../components/JoinNowModal";

const Home = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const courses = [
    {
      name: "Node.js",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      path: "/courses/nodejs",
    },
    {
      name: "React.js",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      path: "/courses/reactjs",
    },
    {
      name: "JavaScript",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      path: "/courses/javascript",
    },
    {
      name: "Python",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      path: "/courses/python",
    },
    {
      name: "MongoDB",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      path: "/courses/mongodb",
    },
    {
      name: "MySQL",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      path: "/courses/mysql",
    },
    {
      name: "AWS",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
      path: "/courses/aws",
    },
    {
      name: "Docker",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      path: "/courses/docker",
    },
    {
      name: "Kafka",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      path: "/courses/kafka",
    },
    {
      name: "Redis",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
      path: "/courses/redis",
    },
  ];

  return (
    <div>
      {/* Hero Section - remains same */}
      <div
  style={{
    maxWidth: "1300px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(400px,1fr))",
    alignItems: "center",
    gap: "50px",
  }}
>
  <div>
    <h1
      style={{
        fontSize: "58px",
        lineHeight: "70px",
        fontWeight: "bold",
      }}
    >
      Learn In-Demand Tech Skills & Build Your Dream Career
    </h1>

    <p
      style={{
        marginTop: "25px",
        fontSize: "20px",
        color: "#cbd5e1",
        lineHeight: "34px",
      }}
    >
      Master Full Stack Development, Cloud Computing,
      Artificial Intelligence, Machine Learning,
      DevOps, Data Structures & Algorithms, and more
      through live classes, hands-on projects, and
      expert mentorship.
    </p>

    <div
      style={{
        display: "flex",
        gap: "20px",
        marginTop: "40px",
        flexWrap: "wrap",
      }}
    >
      <button
        style={primaryBtn}
        onClick={() => setOpen(true)}
      >
        Explore Courses
      </button>

      <button
        style={secondaryBtn}
        onClick={() => navigate("/about")}
      >
        Learn More
      </button>
    </div>
  </div>

  <img
    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900"
    alt="Learning"
    style={{
      width: "100%",
      borderRadius: "20px",
    }}
  />
</div>
      <section
  style={{
    padding: "90px 20px",
    background: "#f8fafc",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "auto",
      textAlign: "center",
    }}
  >
    <h2
      style={{
        fontSize: "45px",
        marginBottom: "20px",
      }}
    >
      Why Learn With GenZCoders?
    </h2>

    <p
      style={{
        color: "#64748b",
        maxWidth: "850px",
        margin: "auto",
        fontSize: "18px",
        lineHeight: "30px",
      }}
    >
      Learn directly from industry professionals through
      practical training, live coding sessions, and
      real-world projects.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit,minmax(250px,1fr))",
        gap: "30px",
        marginTop: "50px",
      }}
    >
      {[
        "Live Interactive Classes",
        "Hands-on Projects",
        "Industry Mentors",
        "Placement Assistance",
        "Resume Building",
        "Mock Interviews",
        "Lifetime Course Access",
        "Certificates",
      ].map((item) => (
        <div
          key={item}
          style={{
            background: "#fff",
            padding: "30px",
            borderRadius: "15px",
            boxShadow: "0 5px 15px rgba(0,0,0,.08)",
          }}
        >
          <h3>{item}</h3>
        </div>
      ))}
    </div>
  </div>
</section>
      {/* Technologies Section */}
      <section style={{ padding: "80px 20px", background: "#ffffff" }}>
        <div style={{ maxWidth: "1300px", margin: "auto" }}>
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
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "30px",
            }}
          >{courses.map((course) => (
            <div
              key={course.name}
              onClick={() => navigate(course.path)}
              style={{
                background: "#f8fafc",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <img
                src={course.image}
                alt={course.name}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "contain",
                  padding: "20px",
                  background: "#fff",
                }}
              />

              <div style={{ padding: "25px" }}>
                <h3
                  style={{
                    fontSize: "28px",
                    color: "#0f172a",
                  }}
                >
                  {course.name}
                </h3>

                <p
                  style={{
                    marginTop: "15px",
                    color: "#475569",
                    lineHeight: "28px",
                  }}
                >
                  Professional industry-focused training with live projects.
                </p>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpen(true);
                  }}
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

      <section
  style={{
    padding: "90px 20px",
    background: "#fff",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "auto",
    }}
  >
    <h2
      style={{
        textAlign: "center",
        fontSize: "45px",
        marginBottom: "60px",
      }}
    >
      Your Learning Journey
    </h2>

    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit,minmax(200px,1fr))",
        gap: "25px",
      }}
    >
      {[
        "Choose Course",
        "Live Classes",
        "Assignments",
        "Projects",
        "Mentorship",
        "Mock Interviews",
        "Certification",
        "Placement",
      ].map((step, i) => (
        <div
          key={step}
          style={{
            background: "#eff6ff",
            padding: "25px",
            borderRadius: "15px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              color: "#2563eb",
            }}
          >
            {i + 1}
          </h2>

          <h4>{step}</h4>
        </div>
      ))}
    </div>
  </div>
</section>


      <StatsSection />
      <Testimonials />
      <JoinNowModal isOpen={open} onClose={() => setOpen(false)} />

      {/* CTA Section - remains same */}
    </div>
  );
};

/* Styles - keep your existing styles */
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

const statNumber = { fontSize: "42px", color: "#38bdf8" };
const statText = { color: "#cbd5e1" };

export default Home;