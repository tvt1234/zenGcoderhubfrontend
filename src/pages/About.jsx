const About = () => {
  return (
    <div style={{ background: "#f8fafc" }}>
      {/* HERO SECTION */}
      <section
        style={{
          background:
            "linear-gradient(to right, #0f172a, #1e3a8a)",
          color: "white",
          padding: "100px 20px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "50px",
            fontWeight: "bold",
          }}
        >
          We Transform Lives by Empowering People Via
          Digital Skills
        </h1>

        <p
          style={{
            marginTop: "20px",
            fontSize: "20px",
            color: "#cbd5e1",
          }}
        >
          Build your career with industry-ready
          engineering & digital skills
        </p>
      </section>

      {/* STATS SECTION */}
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          padding: "60px 20px",
          flexWrap: "wrap",
        }}
      >
        {[
          { num: "8M+", label: "Careers Advanced" },
          {
            num: "1500+",
            label: "Live Classes / Month",
          },
          { num: "400+", label: "Courses" },
        ].map((item) => (
          <div
            key={item.num}
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "15px",
              textAlign: "center",
              width: "250px",
              boxShadow:
                "0 5px 15px rgba(0,0,0,0.1)",
            }}
          >
            <h2
              style={{
                fontSize: "40px",
                color: "#2563eb",
              }}
            >
              {item.num}
            </h2>
            <p>{item.label}</p>
          </div>
        ))}
      </section>

      {/* IMAGE SECTION */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(300px, 1fr))",
          alignItems: "center",
          gap: "40px",
          padding: "60px 20px",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="students"
          style={{
            width: "100%",
            borderRadius: "20px",
          }}
        />

        <div>
          <h2
            style={{
              fontSize: "40px",
              marginBottom: "20px",
            }}
          >
            Who We Are
          </h2>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "32px",
              color: "#475569",
            }}
          >
            Founded in 2026, GenZCoders is a leading industrial training provider 
specializing in IT, Computer Science, and AIML (Artificial Intelligence & Machine Learning). 

Our programs are meticulously designed in collaboration with industry experts, 
corporations, and universities. We offer live interactive classes, hands-on real-world 
projects, and practical training tailored for engineers and professionals.
          </p>

          <p
            style={{
              marginTop: "15px",
              fontSize: "18px",
              lineHeight: "32px",
              color: "#475569",
            }}
          >
            We empower learners across the globe with
            modern technologies like React, Node.js,
            AWS, Docker, Kafka, MongoDB, and more.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE US */}
<section
  style={{
    padding: "80px 20px",
    background: "#ffffff",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      textAlign: "center",
    }}
  >
    <h2
      style={{
        fontSize: "42px",
        marginBottom: "20px",
      }}
    >
      Why Choose GenZCoders?
    </h2>

    <p
      style={{
        color: "#64748b",
        fontSize: "18px",
        maxWidth: "850px",
        margin: "0 auto 50px",
        lineHeight: "32px",
      }}
    >
      We focus on practical learning instead of theoretical education. Every
      student gains real-world experience by building projects, solving coding
      challenges, and learning directly from industry professionals.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
        gap: "30px",
      }}
    >
      {[
        {
          title: "Industry Mentors",
          desc: "Learn directly from experienced software engineers working in top companies.",
        },
        {
          title: "Live Interactive Classes",
          desc: "Daily live classes with doubt sessions and practical coding exercises.",
        },
        {
          title: "Real Projects",
          desc: "Build production-level projects that strengthen your portfolio.",
        },
        {
          title: "Placement Support",
          desc: "Resume building, mock interviews and complete career guidance.",
        },
      ].map((item) => (
        <div
          key={item.title}
          style={{
            padding: "30px",
            borderRadius: "15px",
            background: "#f8fafc",
            boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
          }}
        >
          <h3
            style={{
              color: "#2563eb",
              marginBottom: "15px",
            }}
          >
            {item.title}
          </h3>

          <p
            style={{
              color: "#475569",
              lineHeight: "28px",
            }}
          >
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* OUR MISSION */}
<section
  style={{
    padding: "80px 20px",
    background: "#eff6ff",
  }}
>
  <div
    style={{
      maxWidth: "1100px",
      margin: "0 auto",
      textAlign: "center",
    }}
  >
    <h2
      style={{
        fontSize: "42px",
        marginBottom: "25px",
      }}
    >
      Our Mission
    </h2>

    <p
      style={{
        fontSize: "18px",
        color: "#475569",
        lineHeight: "34px",
      }}
    >
      Our mission is to empower students, graduates, and professionals with
      industry-ready technical skills through high-quality education, practical
      training, and personalized mentorship. We believe every learner deserves
      access to affordable education that leads to meaningful career
      opportunities.
    </p>
  </div>
</section>

{/* LEARNING PROCESS */}
<section
  style={{
    padding: "80px 20px",
    background: "#ffffff",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
    }}
  >
    <h2
      style={{
        textAlign: "center",
        fontSize: "42px",
        marginBottom: "60px",
      }}
    >
      Your Learning Journey
    </h2>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
        gap: "25px",
      }}
    >
      {[
        "Choose Your Course",
        "Attend Live Classes",
        "Practice Coding",
        "Build Projects",
        "Get Mentor Support",
        "Complete Assessments",
        "Interview Preparation",
        "Get Placement Assistance",
      ].map((step, index) => (
        <div
          key={index}
          style={{
            background: "#f8fafc",
            borderRadius: "15px",
            padding: "25px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: "55px",
              height: "55px",
              borderRadius: "50%",
              background: "#2563eb",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              margin: "0 auto 20px",
            }}
          >
            {index + 1}
          </div>

          <h4>{step}</h4>
        </div>
      ))}
    </div>
  </div>
</section>

{/* TECHNOLOGIES */}
<section
  style={{
    padding: "80px 20px",
    background: "#0f172a",
    color: "#ffffff",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      textAlign: "center",
    }}
  >
    <h2
      style={{
        fontSize: "42px",
        marginBottom: "40px",
      }}
    >
      Technologies We Teach
    </h2>

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "15px",
      }}
    >
      {[
        "React.js",
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "Docker",
        "AWS",
        "Redis",
        "GraphQL",
        "TypeScript",
        "JavaScript",
        "Python",
        "AI & ML",
        "Git & GitHub",
      ].map((tech) => (
        <span
          key={tech}
          style={{
            background: "#1e293b",
            padding: "12px 20px",
            borderRadius: "30px",
            fontSize: "16px",
          }}
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
</section>

      {/* FINAL BANNER */}
      <section
        style={{
          background:
            "linear-gradient(to right, #1e3a8a, #06b6d4)",
          padding: "80px 20px",
          textAlign: "center",
          color: "white",
        }}
      >
        <h2
          style={{
            fontSize: "45px",
            marginBottom: "20px",
          }}
        >
          Empowering Professionals With Future-Ready
          Skills
        </h2>

        <p style={{ fontSize: "20px" }}>
          Learn. Build. Grow. Get placed in top
          companies.
        </p>
      </section>
    </div>
  );
};

export default About;