

import { useState } from "react";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      setSuccess("");

      const res = await fetch(
         `${BACKEND_URL}/api/contact/send`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();

      if (data.success) {
        setSuccess("✅ Message sent successfully!");

        setForm({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setSuccess("❌ Failed to send message");
      }
    } catch (error) {
      setSuccess("❌ Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ background: "#f8fafc" }}>
      {/* HERO */}
      <section style={heroStyle}>
        <h1 style={{ fontSize: "55px" }}>
          Get in Touch With Us
        </h1>

        <p style={subHero}>
          We’re here to help you with your learning journey
        </p>
      </section>

      {/* CONTACT */}
      <section style={gridStyle}>
        {/* FORM */}
        <div style={cardStyle}>
          <h2>Send Message</h2>

          <input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            style={inputStyle}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            style={textareaStyle}
          />

          {success && (
            <p style={{ marginBottom: "10px" }}>
              {success}
            </p>
          )}

          <button
            onClick={handleSubmit}
            disabled={loading}
            style={btnStyle}
          >
            {loading ? "Sending..." : "Submit Message"}
          </button>
        </div>

        {/* INFO */}
        <div>
          <h2>Contact Information</h2>

          <p>📍 ZengCoders Tech Park, Hyderabad, India</p>
          <p>📞 +91 9211035927</p>
          <p>📧 support@zengcoders.com</p>
          <p>🕒 Mon - Sat: 9AM - 7PM</p>

          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3156!2d78.4744!3d17.3850"
            width="100%"
            height="250"
            style={{ border: 0, marginTop: "20px" }}
          ></iframe>
        </div>
      </section>
    </div>
  );
};

/* ================= STYLES ================= */

const heroStyle = {
  background: "linear-gradient(to right, #0f172a, #1e3a8a)",
  color: "white",
  padding: "90px 20px",
  textAlign: "center",
};

const subHero = {
  marginTop: "15px",
  fontSize: "20px",
  color: "#cbd5e1",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
  gap: "40px",
  padding: "80px 20px",
  maxWidth: "1200px",
  margin: "auto",
};

const cardStyle = {
  background: "white",
  padding: "40px",
  borderRadius: "20px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
};

const inputStyle = {
  width: "100%",
  padding: "14px",
  marginBottom: "15px",
  borderRadius: "10px",
  border: "1px solid #cbd5e1",
};

const textareaStyle = {
  ...inputStyle,
  resize: "none",
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

export default Contact;