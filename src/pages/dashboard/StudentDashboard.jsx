import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from "recharts";


const StudentDashboard = () => {
  const performanceData = [
    { month: "Jan", score: 72 },
    { month: "Feb", score: 80 },
    { month: "Mar", score: 76 },
    { month: "Apr", score: 88 },
    { month: "May", score: 92 },
    { month: "Jun", score: 95 },
  ];

  const attendanceData = [
    { name: "Present", value: 85 },
    { name: "Absent", value: 15 },
  ];

  const courseProgress = [
    { course: "React JS", progress: 80 },
    { course: "Node JS", progress: 60 },
    { course: "MongoDB", progress: 90 },
  ];

  const COLORS = ["#22c55e", "#ef4444"];

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
            "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          padding: "25px",
          borderRadius: "18px",
          color: "#fff",
          marginBottom: "25px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
        }}
      >
        <h1 style={{ margin: 0 }}>
          🎓 Student Dashboard
        </h1>
        <p style={{ marginTop: "8px" }}>
          Welcome back! Track your learning progress.
        </p>
      </div>

      {/* Stats Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(240px,1fr))",
          gap: "20px",
          marginBottom: "25px",
        }}
      >
        <StatCard
          title="📚 My Courses"
          value="3"
          color="#2563eb"
        />

        <StatCard
          title="📝 Assignments"
          value="2 Pending"
          color="#f59e0b"
        />

        <StatCard
          title="✅ Attendance"
          value="85%"
          color="#22c55e"
        />

        <StatCard
          title="🏆 Average Score"
          value="90%"
          color="#8b5cf6"
        />
      </div>

      {/* Charts */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(450px,1fr))",
          gap: "20px",
          marginBottom: "25px",
        }}
      >
        {/* Performance Chart */}
        <div style={cardStyle}>
          <h3>📈 Performance Trend</h3>

          <ResponsiveContainer
            width="100%"
            height={300}
          >
            <LineChart data={performanceData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="score"
                stroke="#2563eb"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Attendance Chart */}
        <div style={cardStyle}>
          <h3>🎯 Attendance Overview</h3>

          <ResponsiveContainer
            width="100%"
            height={300}
          >
            <PieChart>
              <Pie
                data={attendanceData}
                dataKey="value"
                outerRadius={100}
                label
              >
                {attendanceData.map(
                  (entry, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index]}
                    />
                  )
                )}
              </Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Course Progress */}
      <div style={cardStyle}>
        <h3>📚 Course Progress</h3>

        <ResponsiveContainer
          width="100%"
          height={300}
        >
          <BarChart data={courseProgress}>
            <XAxis dataKey="course" />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey="progress"
              fill="#6366f1"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Bottom Section */}
      <div
        style={{
          marginTop: "25px",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(350px,1fr))",
          gap: "20px",
        }}
      >
        {/* Recent Activities */}
        <div style={cardStyle}>
          <h3>🕒 Recent Activities</h3>

          <ul style={{ lineHeight: "2" }}>
            <li>
              Completed React Hooks Assignment
            </li>
            <li>
              Scored 95% in JavaScript Quiz
            </li>
            <li>
              Attended MongoDB Live Session
            </li>
            <li>
              Submitted Node.js Project
            </li>
          </ul>
        </div>

        {/* Upcoming Classes */}
        <div style={cardStyle}>
          <h3>📅 Upcoming Classes</h3>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
            }}
          >
            <thead>
              <tr>
                <th style={tableHead}>Course</th>
                <th style={tableHead}>Time</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td style={tableCell}>
                  React Advanced
                </td>
                <td style={tableCell}>10:00 AM</td>
              </tr>

              <tr>
                <td style={tableCell}>
                  Node.js API
                </td>
                <td style={tableCell}>02:00 PM</td>
              </tr>

              <tr>
                <td style={tableCell}>
                  MongoDB Masterclass
                </td>
                <td style={tableCell}>05:00 PM</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, color }) => (
  <div
    style={{
      background: "#fff",
      padding: "20px",
      borderRadius: "15px",
      boxShadow:
        "0 5px 15px rgba(0,0,0,0.08)",
      borderLeft: `5px solid ${color}`,
    }}
  >
    <h4
      style={{
        marginBottom: "10px",
        color: "#555",
      }}
    >
      {title}
    </h4>

    <h2
      style={{
        margin: 0,
        color,
      }}
    >
      {value}
    </h2>
  </div>
);

const cardStyle = {
  background: "#fff",
  padding: "20px",
  borderRadius: "15px",
  boxShadow:
    "0 5px 15px rgba(0,0,0,0.08)",
};

const tableHead = {
  padding: "12px",
  textAlign: "left",
  borderBottom: "1px solid #ddd",
};

const tableCell = {
  padding: "12px",
  borderBottom: "1px solid #eee",
};

export default StudentDashboard;