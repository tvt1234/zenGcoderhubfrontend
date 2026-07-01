export default function StudentDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f6f9",
        padding: "40px",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          background: "#fff",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{
            color: "#2563eb",
            marginBottom: "10px",
          }}
        >
          Student Dashboard
        </h1>

        <h2
          style={{
            marginBottom: "15px",
            color: "#333",
          }}
        >
          Welcome, {user?.name} 👋
        </h2>

        <p
          style={{
            color: "#666",
            fontSize: "16px",
            marginBottom: "25px",
          }}
        >
          You are successfully logged in as a Student.
        </p>

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              flex: "1",
              minWidth: "200px",
              background: "#eff6ff",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <h3>📚 Courses</h3>
            <p>Access your enrolled and available courses.</p>
          </div>

          <div
            style={{
              flex: "1",
              minWidth: "200px",
              background: "#f0fdf4",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <h3>🎓 Learning Progress</h3>
            <p>Track your course completion and progress.</p>
          </div>

          <div
            style={{
              flex: "1",
              minWidth: "200px",
              background: "#fefce8",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <h3>💳 Payments</h3>
            <p>View payment history and invoices.</p>
          </div>
        </div>
      </div>
    </div>
  );
}