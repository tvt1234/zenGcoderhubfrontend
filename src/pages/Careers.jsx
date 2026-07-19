const Careers = () => {
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
            fontSize: "55px",
            fontWeight: "bold",
          }}
        >
          Be a part of the Digital Upskilling
          Revolution
        </h1>

        <button
          style={{
            marginTop: "30px",
            padding: "15px 35px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "10px",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Explore Opportunities
        </button>
      </section>

      {/* WHY JOIN SECTION */}
      <section
        style={{
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "45px",
            marginBottom: "50px",
          }}
        >
          Reasons to become a genZCoder
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
            maxWidth: "1200px",
            margin: "auto",
          }}
        >
          {[
            {
              title: "All Inclusive",
              desc: "We embrace diversity and open culture. Our teams bring different experiences and ideas.",
              img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
            },
            {
              title: "Innovation & Tech First",
              desc: "We constantly evolve using innovative practices and modern technology.",
              img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb",
            },
            {
              title: "People Centric",
              desc: "We prioritize people with strong support systems, forums, and employee benefits.",
              img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
            },
            {
              title: "Create Real Impact",
              desc: "We transform lives through digital upskilling and global career opportunities.",
              img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
            },
          ].map((item) => (
            <div
              key={item.title}
              style={cardStyle}
            >
              <img
                src={item.img}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "15px",
                }}
              />

              <h3 style={{ marginTop: "15px" }}>
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
      </section>

      {/* BENEFITS SECTION */}
      <section
        style={{
          background: "#ffffff",
          padding: "90px 20px",
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
              fontSize: "48px",
              textAlign: "center",
              marginBottom: "60px",
            }}
          >
            What’s in it for you?
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "30px",
            }}
          >
            {[
              {
                title: "Chart Your Career",
                desc: "We empower you to define your role and grow your career your way.",
              },
              {
                title: "Open Work Culture",
                desc: "We welcome fresh ideas and encourage innovation at every level.",
              },
              {
                title: "Upskill at Work",
                desc: "Employees can access courses and improve skills continuously.",
              },
              {
                title: "Best Facilities",
                desc: "Health insurance, flexible benefits, and supportive policies.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={benefitCard}
              >
                <h3
                  style={{
                    fontSize: "22px",
                    marginBottom: "15px",
                    color: "#2563eb",
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

      {/* FINAL CTA */}
      <section
        style={{
          background:
            "linear-gradient(to right, #1e3a8a, #06b6d4)",
          padding: "90px 20px",
          textAlign: "center",
          color: "white",
        }}
      >
        <h2 style={{ fontSize: "50px" }}>
          Join the Squad. Build the Future.
        </h2>

        <p style={{ fontSize: "20px", marginTop: "20px" }}>
          Be part of a team that transforms careers
          worldwide.
        </p>

        <button
          style={{
            marginTop: "30px",
            padding: "15px 35px",
            background: "white",
            color: "#1e3a8a",
            border: "none",
            borderRadius: "10px",
            fontSize: "18px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Apply Now
        </button>
      </section>
    </div>
  );
};

/* Styles */
const cardStyle = {
  background: "white",
  padding: "20px",
  borderRadius: "20px",
  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
};

const benefitCard = {
  background: "#f1f5f9",
  padding: "30px",
  borderRadius: "15px",
};

export default Careers;