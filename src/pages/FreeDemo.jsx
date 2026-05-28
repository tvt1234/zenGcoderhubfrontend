const FreeDemo = () => {
  return (
    <div style={{ background: "#f8fafc", minHeight: "100vh" }}>
      
      {/* HERO */}
      <section
        style={{
          background: "linear-gradient(to right, #0f172a, #1e3a8a)",
          color: "white",
          padding: "90px 20px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "50px" }}>
          Book Your Free Demo Class
        </h1>
        <p style={{ fontSize: "18px", marginTop: "10px" }}>
          Learn from industry experts before you enroll
        </p>
      </section>

      {/* FORM */}
      <div
        style={{
          maxWidth: "500px",
          margin: "60px auto",
          background: "white",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
        }}
      >
        <input placeholder="Full Name" style={inputStyle} />
        <input placeholder="Email" style={inputStyle} />
        <input placeholder="Phone Number" style={inputStyle} />

        <select style={inputStyle}>
          <option>Select Course</option>
          <option>Node.js</option>
          <option>React.js</option>
          <option>Python</option>
          <option>AWS</option>
        </select>

        <button style={btnStyle}>
          Request Free Demo
        </button>
      </div>
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
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

export default FreeDemo;