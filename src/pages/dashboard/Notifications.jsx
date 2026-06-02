import { useState } from "react";

const Notifications = () => {
  const [message, setMessage] = useState("");
  const [type, setType] = useState("General");

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "General",
      message: "Welcome to LMS Portal",
      date: "10 Jun 2026",
    },
    {
      id: 2,
      type: "Announcement",
      message: "New React Batch Starting Soon",
      date: "15 Jun 2026",
    },
  ]);

  const sendNotification = () => {
    if (!message.trim()) {
      alert("Please enter notification message");
      return;
    }

    const newNotification = {
      id: Date.now(),
      type,
      message,
      date: new Date().toLocaleDateString(),
    };

    setNotifications([
      newNotification,
      ...notifications,
    ]);

    alert("✅ Notification Sent Successfully");

    setMessage("");
    setType("General");
  };

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
            "linear-gradient(135deg,#0f172a,#334155)",
          padding: "25px",
          borderRadius: "15px",
          color: "#fff",
          marginBottom: "25px",
          boxShadow:
            "0 10px 25px rgba(0,0,0,0.15)",
        }}
      >
        <h1 style={{ margin: 0 }}>
          🔔 Notification Center
        </h1>

        <p style={{ marginTop: "10px" }}>
          Send announcements, alerts and
          updates to students & teachers
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
          <h2>{notifications.length}</h2>
          <p>Total Notifications</p>
        </div>

        <div style={cardStyle}>
          <h2>📢</h2>
          <p>Announcements</p>
        </div>

        <div style={cardStyle}>
          <h2>🚀</h2>
          <p>System Updates</p>
        </div>
      </div>

      {/* Notification Form */}
      <div style={sectionCard}>
        <h2>✉️ Send Notification</h2>

        <div style={{ marginTop: "20px" }}>
          <label
            style={{
              fontWeight: "600",
              display: "block",
              marginBottom: "8px",
            }}
          >
            Notification Type
          </label>

          <select
            value={type}
            onChange={(e) =>
              setType(e.target.value)
            }
            style={inputStyle}
          >
            <option>General</option>
            <option>Announcement</option>
            <option>Alert</option>
            <option>Promotion</option>
          </select>
        </div>

        <div style={{ marginTop: "20px" }}>
          <label
            style={{
              fontWeight: "600",
              display: "block",
              marginBottom: "8px",
            }}
          >
            Message
          </label>

          <textarea
            rows="6"
            value={message}
            onChange={(e) =>
              setMessage(e.target.value)
            }
            placeholder="Write your notification message..."
            style={{
              width: "100%",
              padding: "15px",
              borderRadius: "10px",
              border: "1px solid #ddd",
              resize: "none",
              fontSize: "15px",
              outline: "none",
            }}
          />
        </div>

        <button
          onClick={sendNotification}
          style={{
            marginTop: "20px",
            background:
              "linear-gradient(135deg,#2563eb,#7c3aed)",
            color: "#fff",
            border: "none",
            padding: "14px 24px",
            borderRadius: "10px",
            fontSize: "15px",
            fontWeight: "600",
            cursor: "pointer",
            boxShadow:
              "0 5px 15px rgba(37,99,235,0.3)",
          }}
        >
          🚀 Send Notification
        </button>
      </div>

      {/* Recent Notifications */}
      <div
        style={{
          ...sectionCard,
          marginTop: "25px",
        }}
      >
        <h2>📋 Recent Notifications</h2>

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
              <th style={thStyle}>Type</th>
              <th style={thStyle}>Message</th>
              <th style={thStyle}>Date</th>
            </tr>
          </thead>

          <tbody>
            {notifications.map((item) => (
              <tr
                key={item.id}
                style={{
                  borderBottom:
                    "1px solid #eee",
                }}
              >
                <td style={tdStyle}>
                  {item.id}
                </td>

                <td style={tdStyle}>
                  <span
                    style={{
                      padding:
                        "5px 12px",
                      borderRadius:
                        "20px",
                      background:
                        "#dbeafe",
                      color:
                        "#2563eb",
                      fontWeight:
                        "600",
                    }}
                  >
                    {item.type}
                  </span>
                </td>

                <td style={tdStyle}>
                  {item.message}
                </td>

                <td style={tdStyle}>
                  {item.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {notifications.length === 0 && (
          <div
            style={{
              textAlign: "center",
              padding: "30px",
              color: "#777",
            }}
          >
            No Notifications Found
          </div>
        )}
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

const inputStyle = {
  width: "100%",
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #ddd",
  fontSize: "14px",
  outline: "none",
};

const thStyle = {
  padding: "15px",
  textAlign: "left",
};

const tdStyle = {
  padding: "15px",
};

export default Notifications;