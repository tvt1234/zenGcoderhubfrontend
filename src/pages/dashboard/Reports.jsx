const Reports = () => {
  const recentReports = [
    {
      id: 1,
      title: "Student Enrollment",
      value: "120 New Students",
      date: "June 2026",
    },
    {
      id: 2,
      title: "Course Completion",
      value: "350 Completed",
      date: "June 2026",
    },
    {
      id: 3,
      title: "Revenue Growth",
      value: "+18%",
      date: "June 2026",
    },
  ];

  return (
    <div
      style={{
        padding: "30px",
        background: "#f4f7fc",
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <div
        style={{
          background:
            "linear-gradient(135deg,#4f46e5,#7c3aed)",
          padding: "25px",
          borderRadius: "15px",
          color: "#fff",
          marginBottom: "25px",
          boxShadow:
            "0 10px 25px rgba(0,0,0,0.15)",
        }}
      >
        <h1 style={{ margin: 0 }}>
          📊 Reports & Analytics
        </h1>
        <p style={{ marginTop: "10px" }}>
          Overview of students, teachers,
          courses and revenue performance
        </p>
      </div>

      {/* Analytics Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        <div style={cardStyle}>
          <h2>1200</h2>
          <p>Total Students</p>
        </div>

        <div style={cardStyle}>
          <h2>85</h2>
          <p>Total Teachers</p>
        </div>

        <div style={cardStyle}>
          <h2>150</h2>
          <p>Total Courses</p>
        </div>

        <div style={cardStyle}>
          <h2>₹5,40,000</h2>
          <p>Monthly Revenue</p>
        </div>
      </div>

      {/* Revenue & Performance */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(400px,1fr))",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        {/* Revenue Card */}
        <div style={sectionCard}>
          <h2>💰 Revenue Summary</h2>

          <div style={{ marginTop: "20px" }}>
            <p>
              Monthly Target: ₹7,00,000
            </p>

            <div style={progressContainer}>
              <div
                style={{
                  ...progressBar,
                  width: "77%",
                }}
              />
            </div>

            <p
              style={{
                color: "#666",
                marginTop: "10px",
              }}
            >
              Achieved 77% of target
            </p>
          </div>
        </div>

        {/* Student Growth */}
        <div style={sectionCard}>
          <h2>🎓 Student Growth</h2>

          <div style={{ marginTop: "20px" }}>
            <p>Enrollment Progress</p>

            <div style={progressContainer}>
              <div
                style={{
                  ...progressBar,
                  width: "85%",
                }}
              />
            </div>

            <p
              style={{
                color: "#666",
                marginTop: "10px",
              }}
            >
              85% Growth This Month
            </p>
          </div>
        </div>
      </div>

      {/* Recent Reports */}
      <div style={sectionCard}>
        <h2>📋 Recent Reports</h2>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "20px",
          }}
        >
          <thead>
            <tr
              style={{
                background: "#1e293b",
                color: "#fff",
              }}
            >
              <th style={thStyle}>ID</th>
              <th style={thStyle}>Report</th>
              <th style={thStyle}>Value</th>
              <th style={thStyle}>Date</th>
            </tr>
          </thead>

          <tbody>
            {recentReports.map((report) => (
              <tr
                key={report.id}
                style={{
                  borderBottom:
                    "1px solid #eee",
                }}
              >
                <td style={tdStyle}>
                  {report.id}
                </td>

                <td style={tdStyle}>
                  {report.title}
                </td>

                <td style={tdStyle}>
                  {report.value}
                </td>

                <td style={tdStyle}>
                  {report.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bottom Summary Cards */}
      <div
        style={{
          marginTop: "30px",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
        }}
      >
        <div style={summaryCard}>
          <h3>🏆 Best Course</h3>
          <p>React JS Masterclass</p>
        </div>

        <div style={summaryCard}>
          <h3>👨‍🏫 Top Teacher</h3>
          <p>John Smith</p>
        </div>

        <div style={summaryCard}>
          <h3>📈 Revenue Growth</h3>
          <p>+18% This Month</p>
        </div>
      </div>
    </div>
  );
};

const cardStyle = {
  background: "#fff",
  padding: "25px",
  borderRadius: "15px",
  textAlign: "center",
  boxShadow:
    "0 5px 15px rgba(0,0,0,0.08)",
};

const sectionCard = {
  background: "#fff",
  padding: "25px",
  borderRadius: "15px",
  boxShadow:
    "0 5px 15px rgba(0,0,0,0.08)",
};

const summaryCard = {
  background: "#fff",
  padding: "20px",
  borderRadius: "12px",
  textAlign: "center",
  boxShadow:
    "0 5px 15px rgba(0,0,0,0.08)",
};

const progressContainer = {
  width: "100%",
  height: "12px",
  background: "#e5e7eb",
  borderRadius: "10px",
  overflow: "hidden",
};

const progressBar = {
  height: "100%",
  background:
    "linear-gradient(90deg,#4f46e5,#7c3aed)",
};

const thStyle = {
  padding: "15px",
  textAlign: "left",
};

const tdStyle = {
  padding: "15px",
};

export default Reports;