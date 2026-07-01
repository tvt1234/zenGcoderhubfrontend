
const AdminDashboard = () => {
  return (
    <div>
      <h1
        style={{
          marginBottom: "30px",
          color: "#1e293b",
          fontWeight: "700",
        }}
      >
        ⚙️ Admin Dashboard
      </h1>

      {/* Stats Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        <Card title="👨‍🎓 Students" value="1,250" color="#2563eb" />
        <Card title="👨‍🏫 Teachers" value="85" color="#10b981" />
        <Card title="📚 Courses" value="120" color="#f59e0b" />
        <Card title="💰 Revenue" value="₹5,40,000" color="#ef4444" />
      </div>

      {/* Dashboard Content */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "20px",
        }}
      >
        {/* Recent Activities */}
        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
          }}
        >
          <h2 style={{ marginBottom: "15px" }}>📋 Recent Activities</h2>

          <ul style={{ lineHeight: "2" }}>
            <li>✅ New student registered</li>
            <li>✅ Teacher approved</li>
            <li>✅ Course published</li>
            <li>✅ Payment received</li>
            <li>✅ New batch created</li>
          </ul>
        </div>

        {/* Quick Actions */}
        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
          }}
        >
          <h2 style={{ marginBottom: "15px" }}>🚀 Quick Actions</h2>

          <button style={btn}>Add Teacher</button>
          <button style={btn}>Add Course</button>
          <button style={btn}>Manage Students</button>
          <button style={btn}>View Reports</button>
        </div>
      </div>

      {/* Bottom Section */}
      <div
        style={{
          marginTop: "25px",
          background: "#fff",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        }}
      >
        <h2>📈 System Overview</h2>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "20px",
            textAlign: "center",
          }}
        >
          <div>
            <h3>95%</h3>
            <p>Attendance Rate</p>
          </div>

          <div>
            <h3>87%</h3>
            <p>Course Completion</p>
          </div>

          <div>
            <h3>99%</h3>
            <p>System Uptime</p>
          </div>
        </div>
      </div>
    </div>
  );
};

/* Reusable Card Component */
const Card = ({ title, value, color }) => (
  <div
    style={{
      background: "#fff",
      padding: "20px",
      borderRadius: "12px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
      borderLeft: `5px solid ${color}`,
    }}
  >
    <h3 style={{ color: "#64748b", marginBottom: "10px" }}>{title}</h3>
    <h2 style={{ color }}>{value}</h2>
  </div>
);

const btn = {
  width: "100%",
  padding: "12px",
  marginBottom: "10px",
  border: "none",
  borderRadius: "8px",
  background: "#2563eb",
  color: "#fff",
  cursor: "pointer",
  fontWeight: "600",
};

export default AdminDashboard;