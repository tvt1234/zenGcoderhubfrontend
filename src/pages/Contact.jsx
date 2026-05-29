const Contact = () => {
  return (
    <div style={{ background: "#f8fafc" }}>
      {/* HERO SECTION */}
      <section
        style={{
          background:
            "linear-gradient(to right, #0f172a, #1e3a8a)",
          color: "white",
          padding: "90px 20px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "55px" }}>
          Get in Touch With Us
        </h1>

        <p
          style={{
            marginTop: "15px",
            fontSize: "20px",
            color: "#cbd5e1",
          }}
        >
          We’re here to help you with your learning
          journey
        </p>
      </section>

      {/* CONTACT SECTION */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "40px",
          padding: "80px 20px",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        {/* FORM */}
        <div
          style={{
            background: "white",
            padding: "40px",
            borderRadius: "20px",
            boxShadow:
              "0 10px 25px rgba(0,0,0,0.1)",
          }}
        >
          <h2 style={{ marginBottom: "25px" }}>
            Send Message
          </h2>

          <input
            placeholder="Your Name"
            style={inputStyle}
          />

          <input
            placeholder="Email Address"
            style={inputStyle}
          />

          <input
            placeholder="Phone Number"
            style={inputStyle}
          />

          <textarea
            placeholder="Your Message"
            rows="5"
            style={{
              ...inputStyle,
              resize: "none",
            }}
          />

          <button style={btnStyle}>
            Submit Message
          </button>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h2 style={{ fontSize: "35px" }}>
            Contact Information
          </h2>

          <div style={{ marginTop: "25px" }}>
            <p style={infoText}>
              📍 ZengCoders Tech Park, Hyderabad,
              India
            </p>

            <p style={infoText}>
              📞 +91 9211035927
            </p>

            <p style={infoText}>
              📧 support@zengcoders.com
            </p>

            <p style={infoText}>
              🕒 Mon - Sat: 9AM - 7PM
            </p>
          </div>

          {/* MAP */}
          <div
            style={{
              marginTop: "30px",
              borderRadius: "15px",
              overflow: "hidden",
            }}
          >
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3156!2d78.4744!3d17.3850"
              width="100%"
              height="250"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section
        style={{
          background:
            "linear-gradient(to right, #1e3a8a, #06b6d4)",
          padding: "80px 20px",
          textAlign: "center",
          color: "white",
        }}
      >
        <h2 style={{ fontSize: "45px" }}>
          Let’s Build Your Career Together
        </h2>

        <p style={{ fontSize: "20px", marginTop: "15px" }}>
          Join thousands of learners growing with us
        </p>

        <button
          style={{
            marginTop: "25px",
            padding: "15px 35px",
            border: "none",
            borderRadius: "10px",
            background: "white",
            color: "#1e3a8a",
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Start Learning
        </button>
      </section>
    </div>
  );
};

/* Styles */
const inputStyle = {
  width: "100%",
  padding: "14px",
  marginBottom: "15px",
  borderRadius: "10px",
  border: "1px solid #cbd5e1",
  outline: "none",
  fontSize: "16px",
};

const btnStyle = {
  width: "100%",
  padding: "14px",
  background: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "10px",
  fontSize: "18px",
  cursor: "pointer",
};

const infoText = {
  fontSize: "18px",
  marginBottom: "15px",
  color: "#334155",
};

export default Contact;