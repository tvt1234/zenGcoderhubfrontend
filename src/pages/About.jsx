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