const AdminDashboard = () => {
  return (
    <div style={{ padding: "30px" }}>
      <h1>⚙️ Admin Dashboard</h1>

      <div className="stats-grid">
        <div className="card">
          <h3>Students</h3>
          <p>1,250</p>
        </div>

        <div className="card">
          <h3>Teachers</h3>
          <p>85</p>
        </div>

        <div className="card">
          <h3>Courses</h3>
          <p>120</p>
        </div>

        <div className="card">
          <h3>Revenue</h3>
          <p>₹5,40,000</p>
        </div>
      </div>

      <div style={{ marginTop: "30px" }}>
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