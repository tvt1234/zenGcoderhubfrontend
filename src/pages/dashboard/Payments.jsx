import { useState } from "react";

const Payments = () => {
  const [search, setSearch] = useState("");

  const payments = [
    {
      id: 1,
      student: "Rahul Sharma",
      course: "React JS",
      amount: 5000,
      status: "Paid",
      date: "10 Jun 2026",
    },
    {
      id: 2,
      student: "Amit Kumar",
      course: "Node JS",
      amount: 3000,
      status: "Pending",
      date: "12 Jun 2026",
    },
    {
      id: 3,
      student: "Priya Singh",
      course: "MongoDB",
      amount: 4500,
      status: "Paid",
      date: "15 Jun 2026",
    },
  ];

  const filteredPayments = payments.filter((payment) =>
    payment.student
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const totalRevenue = payments
    .filter((p) => p.status === "Paid")
    .reduce((sum, p) => sum + p.amount, 0);

  const paidCount = payments.filter(
    (p) => p.status === "Paid"
  ).length;

  const pendingCount = payments.filter(
    (p) => p.status === "Pending"
  ).length;

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
            "linear-gradient(135deg,#0f172a,#1e293b)",
          padding: "25px",
          borderRadius: "15px",
          color: "#fff",
          marginBottom: "25px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
        }}
      >
        <h1 style={{ margin: 0 }}>
          💳 Payment Management
        </h1>
        <p style={{ marginTop: "8px" }}>
          Track student payments and revenue
        </p>
      </div>

      {/* Stats Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
          marginBottom: "25px",
        }}
      >
        <div style={cardStyle}>
          <h2>₹{totalRevenue}</h2>
          <p>Total Revenue</p>
        </div>

        <div style={cardStyle}>
          <h2>{paidCount}</h2>
          <p>Paid Payments</p>
        </div>

        <div style={cardStyle}>
          <h2>{pendingCount}</h2>
          <p>Pending Payments</p>
        </div>
      </div>

      {/* Search */}
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "12px",
          marginBottom: "20px",
          boxShadow:
            "0 5px 15px rgba(0,0,0,0.08)",
        }}
      >
        <input
          type="text"
          placeholder="🔍 Search student..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            fontSize: "14px",
          }}
        />
      </div>

      {/* Payment Table */}
      <div
        style={{
          background: "#fff",
          borderRadius: "15px",
          overflow: "hidden",
          boxShadow:
            "0 5px 20px rgba(0,0,0,0.08)",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
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
              <th style={thStyle}>Student</th>
              <th style={thStyle}>Course</th>
              <th style={thStyle}>Amount</th>
              <th style={thStyle}>Date</th>
              <th style={thStyle}>Status</th>
              <th style={thStyle}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredPayments.map((payment) => (
              <tr
                key={payment.id}
                style={{
                  borderBottom:
                    "1px solid #e5e7eb",
                }}
              >
                <td style={tdStyle}>{payment.id}</td>

                <td style={tdStyle}>
                  {payment.student}
                </td>

                <td style={tdStyle}>
                  {payment.course}
                </td>

                <td style={tdStyle}>
                  <strong>
                    ₹{payment.amount}
                  </strong>
                </td>

                <td style={tdStyle}>
                  {payment.date}
                </td>

                <td style={tdStyle}>
                  <span
                    style={{
                      padding:
                        "6px 14px",
                      borderRadius:
                        "20px",
                      fontSize: "13px",
                      fontWeight: "600",
                      background:
                        payment.status ===
                        "Paid"
                          ? "#dcfce7"
                          : "#fee2e2",
                      color:
                        payment.status ===
                        "Paid"
                          ? "#15803d"
                          : "#dc2626",
                    }}
                  >
                    {payment.status}
                  </span>
                </td>

                <td style={tdStyle}>
                  <button
                    style={{
                      background:
                        "#2563eb",
                      color: "#fff",
                      border: "none",
                      padding:
                        "8px 14px",
                      borderRadius:
                        "6px",
                      cursor: "pointer",
                      marginRight:
                        "8px",
                    }}
                  >
                    👁 View
                  </button>

                  <button
                    style={{
                      background:
                        "#10b981",
                      color: "#fff",
                      border: "none",
                      padding:
                        "8px 14px",
                      borderRadius:
                        "6px",
                      cursor: "pointer",
                    }}
                  >
                    ⬇ Receipt
                  </button>
                </td>
              </tr>
            ))}

            {filteredPayments.length ===
              0 && (
              <tr>
                <td
                  colSpan="7"
                  style={{
                    textAlign:
                      "center",
                    padding:
                      "30px",
                    color: "#777",
                  }}
                >
                  No Payments Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const thStyle = {
  padding: "15px",
  textAlign: "left",
};

const tdStyle = {
  padding: "15px",
};

const cardStyle = {
  background: "#fff",
  padding: "25px",
  borderRadius: "15px",
  textAlign: "center",
  boxShadow:
    "0 5px 15px rgba(0,0,0,0.08)",
};

export default Payments;