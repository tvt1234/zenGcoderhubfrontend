const StudentDashboard = () => {
  return (
    <div style={{ padding: "30px" }}>
      <h1>🎓 Student Dashboard</h1>

      <div style={{ display: "grid", gap: "20px", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
        <div className="card">
          <h3>My Courses</h3>
          <p>3 Active Courses</p>
        </div>

        <div className="card">
          <h3>Assignments</h3>
          <p>2 Pending</p>
        </div>

        <div className="card">
          <h3>Attendance</h3>
          <p>85%</p>
        </div>

        <div className="card">
          <h3>Results</h3>
          <p>Average Score: 90%</p>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;