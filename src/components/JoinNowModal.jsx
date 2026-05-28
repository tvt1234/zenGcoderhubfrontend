import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const JoinNowModal = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application Submitted Successfully!");
    onClose();
  };

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        {/* Close Button */}
        <button onClick={onClose} style={closeBtn}>
          <FaTimes />
        </button>

        <h2 style={{ marginBottom: "20px" }}>
          Join Now
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            style={inputStyle}
            required
          />

          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            style={inputStyle}
            required
          />

          <input
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            style={inputStyle}
            required
          />

          <select
            name="course"
            onChange={handleChange}
            style={inputStyle}
            required
          >
            <option value="">Select Course</option>
            <option>Node.js</option>
            <option>React.js</option>
            <option>Python</option>
            <option>AWS</option>
            <option>Docker</option>
          </select>

          <button style={btnStyle}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

/* Styles */
const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.6)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999,
};

const modalStyle = {
  background: "white",
  padding: "30px",
  borderRadius: "15px",
  width: "400px",
  position: "relative",
};

const closeBtn = {
  position: "absolute",
  top: "10px",
  right: "10px",
  border: "none",
  background: "transparent",
  fontSize: "18px",
  cursor: "pointer",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "12px",
  borderRadius: "8px",
  border: "1px solid #ccc",
};

const btnStyle = {
  width: "100%",
  padding: "12px",
  background: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};

export default JoinNowModal;