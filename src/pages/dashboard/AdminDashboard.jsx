const AdminDashboard = () => {
  return (
    <div>
      <h1
        style={{
          marginBottom: "30px",
          color: "#1e293b",
        }}
      >
        ⚙️ Admin Dashboard
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          marginBottom: "40px",
        }}
      >
        <div className="admin-card">
          <h3>Students</h3>
          <p>1,250</p>
        </div>
        <div className="admin-card">
          <h3>Teachers</h3>
          <p>85</p>
        </div>
        <div className="admin-card">
          <h3>Courses</h3>
          <p>120</p>
        </div>
        <div className="admin-card">
          <h3>Revenue</h3>
          <p>₹5,40,000</p>
        </div>
      </div>

      <div
        style={{
          marginTop: "40px",
          background: "#fff",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2>Recent Activities</h2>
        <ul>
          <li>New student registered</li>
          <li>Teacher approved</li>
          <li>Course published</li>
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;