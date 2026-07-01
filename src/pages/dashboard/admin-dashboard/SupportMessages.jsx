import { useEffect, useState } from "react";

export default function AdminContact() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/contact/all")
      .then((res) => res.json())
      .then((data) => setMessages(data.messages || []));
  }, []);

  // 🗑 DELETE MESSAGE
  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this message?");
    if (!confirm) return;

    try {
      const res = await fetch(
        `http://localhost:5000/api/contact/delete/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await res.json();

      if (data.success) {
        setMessages((prev) =>
          prev.filter((msg) => msg._id !== id)
        );
      } else {
        alert(data.message);
      }
    } catch (err) {
      alert("Delete failed");
    }
  };

  return (
    <div style={styles.page}>
      <h2 style={styles.title}>📩 Contact Messages</h2>

      <div style={styles.grid}>
        {messages.length === 0 ? (
          <p style={styles.empty}>No messages found</p>
        ) : (
          messages.map((msg) => (
            <div key={msg._id} style={styles.card}>
              
              <div style={styles.header}>
                <h3 style={styles.name}>{msg.name}</h3>

                <span
                  style={{
                    ...styles.badge,
                    background:
                      msg.status === "unread"
                        ? "#ef4444"
                        : "#22c55e",
                  }}
                >
                  {msg.status || "new"}
                </span>
              </div>

              <p style={styles.text}>📧 {msg.email}</p>
              <p style={styles.text}>📞 {msg.phone}</p>

              <div style={styles.messageBox}>
                💬 {msg.message}
              </div>

              <div style={styles.footer}>
                <small style={styles.time}>
                  {new Date(msg.createdAt).toLocaleString()}
                </small>

                <button
                  onClick={() => handleDelete(msg._id)}
                  style={styles.deleteBtn}
                >
                  🗑 Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

/* ============ PROFESSIONAL STYLES ============ */

const styles = {
  page: {
    padding: "30px",
    background: "#f4f6fb",
    minHeight: "100vh",
    fontFamily: "Arial",
  },

  title: {
    fontSize: "30px",
    fontWeight: "bold",
    marginBottom: "25px",
    color: "#111827",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "20px",
  },

  card: {
    background: "white",
    borderRadius: "14px",
    padding: "20px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
    transition: "0.3s",
    border: "1px solid #eee",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
  },

  name: {
    margin: 0,
    fontSize: "18px",
    color: "#111827",
  },

  badge: {
    padding: "4px 10px",
    borderRadius: "20px",
    color: "white",
    fontSize: "12px",
    textTransform: "capitalize",
  },

  text: {
    margin: "6px 0",
    color: "#4b5563",
    fontSize: "14px",
  },

  messageBox: {
    marginTop: "10px",
    padding: "12px",
    background: "#f9fafb",
    borderRadius: "10px",
    color: "#374151",
    fontSize: "14px",
    border: "1px solid #eee",
  },

  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "12px",
  },

  time: {
    fontSize: "12px",
    color: "#9ca3af",
  },

  deleteBtn: {
    padding: "6px 12px",
    background: "#ef4444",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "12px",
    transition: "0.2s",
  },

  empty: {
    color: "#6b7280",
  },
};