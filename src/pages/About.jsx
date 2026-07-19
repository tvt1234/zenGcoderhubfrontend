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
      margin: "auto",
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
        maxWidth: "800px",
        margin: "auto",
        lineHeight: "32px",
      }}
    >
      We bridge the gap between academic learning and
      industry expectations by delivering practical,
      project-based education designed by experienced
      software engineers.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit,minmax(260px,1fr))",
        gap: "30px",
        marginTop: "50px",
      }}
    >
      {[
        {
          title: "Live Interactive Classes",
          text: "Learn directly from experienced industry mentors through live sessions and real-time doubt solving.",
        },
        {
          title: "Hands-on Projects",
          text: "Build real-world applications that strengthen your portfolio and improve your practical knowledge.",
        },
        {
          title: "Industry Curriculum",
          text: "Courses are regularly updated according to current market trends and technologies.",
        },
        {
          title: "Placement Assistance",
          text: "Resume preparation, mock interviews, coding assessments, and career guidance.",
        },
      ].map((item) => (
        <div
          key={item.title}
          style={{
            padding: "30px",
            borderRadius: "16px",
            background: "#f8fafc",
            boxShadow: "0 5px 15px rgba(0,0,0,.08)",
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
            {item.text}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* OUR LEARNING PROCESS */}
<section
  style={{
    padding: "80px 20px",
    background: "#f1f5f9",
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
        fontSize: "42px",
        marginBottom: "60px",
      }}
    >
      Our Learning Journey
    </h2>

    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit,minmax(220px,1fr))",
        gap: "30px",
      }}
    >
      {[
        "Enroll in your desired course",
        "Attend live interactive classes",
        "Complete assignments & projects",
        "Receive mentor feedback",
        "Build an impressive portfolio",
        "Prepare for interviews",
        "Get placement assistance",
        "Launch your career",
      ].map((step, index) => (
        <div
          key={index}
          style={{
            background: "#fff",
            padding: "25px",
            borderRadius: "15px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: "55px",
              height: "55px",
              background: "#2563eb",
              color: "#fff",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 20px",
              fontSize: "22px",
              fontWeight: "bold",
            }}
          >
            {index + 1}
          </div>

          <p
            style={{
              lineHeight: "28px",
              color: "#475569",
            }}
          >
            {step}
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
    background: "#ffffff",
  }}
>
  <div
    style={{
      maxWidth: "1000px",
      margin: "auto",
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
      Our mission is to make high-quality technical
      education accessible to every learner regardless
      of background. We believe that practical
      knowledge, continuous mentorship, and real-world
      project experience are the foundation of a
      successful technology career. Through innovative
      teaching methodologies, industry partnerships,
      and career-focused programs, we help students
      gain confidence, master in-demand technologies,
      and secure opportunities with leading companies.
    </p>
  </div>
</section>

{/* TECHNOLOGIES */}
<section
  style={{
    padding: "80px 20px",
    background: "#0f172a",
    color: "#fff",
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
        fontSize: "42px",
        marginBottom: "40px",
      }}
    >
      Technologies We Teach
    </h2>

    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
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
        "Kafka",
        "TypeScript",
        "Python",
        "AI & ML",
        "Git & GitHub",
      ].map((tech) => (
        <span
          key={tech}
          style={{
            padding: "12px 22px",
            background: "#1e293b",
            borderRadius: "30px",
            fontSize: "17px",
          }}
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
</section>