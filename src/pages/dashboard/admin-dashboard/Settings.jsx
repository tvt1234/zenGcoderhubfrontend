import { useState } from "react";

const Settings = () => {
  const [siteName, setSiteName] =
    useState("My LMS");

  const [emailNotifications, setEmailNotifications] =
    useState(true);

  const [maintenanceMode, setMaintenanceMode] =
    useState(false);

  const saveSettings = () => {
    alert("✅ Settings Saved Successfully");
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
            "linear-gradient(135deg,#0f172a,#2563eb)",
          padding: "25px",
          borderRadius: "15px",
          color: "#fff",
          marginBottom: "25px",
          boxShadow:
            "0 10px 25px rgba(0,0,0,0.15)",
        }}
      >
        <h1 style={{ margin: 0 }}>
          ⚙️ System Settings
        </h1>

        <p style={{ marginTop: "10px" }}>
          Configure your Learning Management
          System settings
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
          <h2>🌐</h2>
          <p>Website Settings</p>
        </div>

        <div style={cardStyle}>
          <h2>🔒</h2>
          <p>Security Settings</p>
        </div>

        <div style={cardStyle}>
          <h2>📧</h2>
          <p>Email Notifications</p>
        </div>
      </div>

      {/* Settings Form */}
      <div style={sectionCard}>
        <h2>General Settings</h2>

        {/* Site Name */}
        <div style={{ marginTop: "20px" }}>
          <label style={labelStyle}>
            Site Name
          </label>

          <input
            type="text"
            value={siteName}
            onChange={(e) =>
              setSiteName(e.target.value)
            }
            style={inputStyle}
            placeholder="Enter Site Name"
          />
        </div>

        {/* Email Notifications */}
        <div style={settingRow}>
          <div>
            <h4 style={{ margin: 0 }}>
              Email Notifications
            </h4>

            <p
              style={{
                margin: "5px 0",
                color: "#666",
              }}
            >
              Send notifications to users
            </p>
          </div>

          <label className="switch">
            <input
              type="checkbox"
              checked={emailNotifications}
              onChange={() =>
                setEmailNotifications(
                  !emailNotifications
                )
              }
            />
            <span className="slider"></span>
          </label>
        </div>

        {/* Maintenance Mode */}
        <div style={settingRow}>
          <div>
            <h4 style={{ margin: 0 }}>
              Maintenance Mode
            </h4>

            <p
              style={{
                margin: "5px 0",
                color: "#666",
              }}
            >
              Temporarily disable access
            </p>
          </div>

          <label className="switch">
            <input
              type="checkbox"
              checked={maintenanceMode}
              onChange={() =>
                setMaintenanceMode(
                  !maintenanceMode
                )
              }
            />
            <span className="slider"></span>
          </label>
        </div>

        <button
          onClick={saveSettings}
          style={{
            marginTop: "25px",
            background:
              "linear-gradient(135deg,#2563eb,#7c3aed)",
            color: "#fff",
            border: "none",
            padding: "14px 25px",
            borderRadius: "10px",
            fontSize: "15px",
            fontWeight: "600",
            cursor: "pointer",
            boxShadow:
              "0 5px 15px rgba(37,99,235,0.3)",
          }}
        >
          💾 Save Settings
        </button>
      </div>

      {/* System Info */}
      <div
        style={{
          marginTop: "25px",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(300px,1fr))",
          gap: "20px",
        }}
      >
        <div style={infoCard}>
          <h3>🖥 System Version</h3>
          <p>v2.0.1</p>
        </div>

        <div style={infoCard}>
          <h3>📅 Last Backup</h3>
          <p>02 June 2026</p>
        </div>

        <div style={infoCard}>
          <h3>👥 Active Users</h3>
          <p>1,285</p>
        </div>
      </div>

      {/* Toggle CSS */}
      <style>
        {`
          .switch {
            position: relative;
            display: inline-block;
            width: 55px;
            height: 28px;
          }

          .switch input {
            opacity: 0;
            width: 0;
            height: 0;
          }

          .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #ccc;
            transition: .4s;
            border-radius: 34px;
          }

          .slider:before {
            position: absolute;
            content: "";
            height: 20px;
            width: 20px;
            left: 4px;
            bottom: 4px;
            background-color: white;
            transition: .4s;
            border-radius: 50%;
          }

          input:checked + .slider {
            background-color: #2563eb;
          }

          input:checked + .slider:before {
            transform: translateX(26px);
          }
        `}
      </style>
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

const infoCard = {
  background: "#fff",
  padding: "20px",
  borderRadius: "12px",
  textAlign: "center",
  boxShadow:
    "0 5px 15px rgba(0,0,0,0.08)",
};

const labelStyle = {
  display: "block",
  marginBottom: "8px",
  fontWeight: "600",
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #ddd",
  fontSize: "14px",
  outline: "none",
};

const settingRow = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "25px",
  padding: "15px 0",
  borderBottom: "1px solid #eee",
};

export default Settings;
