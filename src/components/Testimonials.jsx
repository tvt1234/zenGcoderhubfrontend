import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Ramesh Pattnaik",
    role: "Program Manager, Merck Life Science",
    company: "MERCK",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
    text: `"Projects and case studies reinforced my learning while providing valuable real-world insights."`,
  },
  {
    name: "Aakash Raymond Datt",
    role: "Cybersecurity Analyst Level-2, Wipro",
    company: "WIPRO",
    image:
      "https://randomuser.me/api/portraits/men/45.jpg",
    text: `"Capstone projects boosted my skills & confidence. Got promoted with 40% pay rise."`,
  },
  {
    name: "Sneha Sharma",
    role: "Software Engineer, TCS",
    company: "TCS",
    image:
      "https://randomuser.me/api/portraits/women/44.jpg",
    text: `"The hands-on training helped me crack interviews and improve coding confidence."`,
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const t = testimonials[index];

  return (
    <section
      style={{
        padding: "100px 20px",
        background: "#f8fafc",
        textAlign: "center",
      }}
    >
      {/* Title */}
      <h2
        style={{
          fontSize: "48px",
          fontWeight: "bold",
          marginBottom: "50px",
          color: "#0f172a",
        }}
      >
        Real Stories, Incredible Journeys
      </h2>

      {/* Card */}
      <div
        style={{
          maxWidth: "800px",
          margin: "auto",
          background: "white",
          padding: "40px",
          borderRadius: "20px",
          boxShadow:
            "0 10px 30px rgba(0,0,0,0.1)",
          position: "relative",
        }}
      >
        {/* User Info */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "25px",
          }}
        >
          <img
            src={t.image}
            alt={t.name}
            style={{
              width: "70px",
              height: "70px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />

          <div style={{ textAlign: "left" }}>
            <h3 style={{ margin: 0 }}>{t.name}</h3>
            <p
              style={{
                margin: 0,
                color: "#64748b",
              }}
            >
              {t.role}
            </p>
            <strong style={{ color: "#2563eb" }}>
              {t.company}
            </strong>
          </div>
        </div>

        {/* Text */}
        <p
          style={{
            fontSize: "18px",
            lineHeight: "30px",
            color: "#334155",
          }}
        >
          {t.text}
        </p>

        {/* Navigation Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          <button
            onClick={prev}
            style={navBtn}
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={next}
            style={navBtn}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

const navBtn = {
  background: "#2563eb",
  color: "white",
  border: "none",
  padding: "12px 15px",
  borderRadius: "50%",
  cursor: "pointer",
  fontSize: "16px",
};

export default Testimonials;