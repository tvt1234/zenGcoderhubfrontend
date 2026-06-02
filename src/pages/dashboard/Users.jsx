import { useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      role: "Student",
      email: "john@example.com",
    },
    {
      id: 2,
      name: "Sarah Smith",
      role: "Teacher",
      email: "sarah@example.com",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    role: "",
    email: "",
  });

  const openAddModal = () => {
    setEditingUser(null);

    setFormData({
      name: "",
      role: "",
      email: "",
    });

    setShowModal(true);
  };

  const openEditModal = (user) => {
    setEditingUser(user);

    setFormData({
      name: user.name,
      role: user.role,
      email: user.email,
    });

    setShowModal(true);
  };

  const saveUser = () => {
    if (!formData.name || !formData.role || !formData.email) {
      alert("Please fill all fields");
      return;
    }

    if (editingUser) {
      setUsers(
        users.map((user) =>
          user.id === editingUser.id
            ? {
                ...user,
                ...formData,
              }
            : user
        )
      );
    } else {
      setUsers([
        ...users,
        {
          id: Date.now(),
          ...formData,
        },
      ]);
    }

    setShowModal(false);
  };

  const deleteUser = (id) => {
    if (window.confirm("Delete this user?")) {
      setUsers(users.filter((user) => user.id !== id));
    }
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
            "linear-gradient(135deg,#11998e,#38ef7d)",
          padding: "25px",
          borderRadius: "15px",
          color: "#fff",
          marginBottom: "25px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
        }}
      >
        <h1 style={{ margin: 0 }}>
          👥 User 
        </h1>

        <p style={{ marginTop: "8px" }}>
          
        </p>
      </div>

      {/* Add Button */}
      <div style={{ marginBottom: "20px" }}>
        <button
          onClick={openAddModal}
          style={{
            background: "#28a745",
            color: "#fff",
            border: "none",
            padding: "12px 20px",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "15px",
            fontWeight: "600",
            boxShadow:
              "0 4px 10px rgba(40,167,69,0.3)",
          }}
        >
          ➕ Add User
        </button>
      </div>

      {/* Table */}
      <div
        style={{
          background: "#fff",
          borderRadius: "15px",
          overflow: "hidden",
          boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
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
                background: "#1f2937",
                color: "#fff",
              }}
            >
              <th style={thStyle}>ID</th>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Email</th>
              <th style={thStyle}>Role</th>
              <th style={thStyle}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                style={{
                  borderBottom: "1px solid #eee",
                }}
              >
                <td style={tdStyle}>{user.id}</td>

                <td style={tdStyle}>
                  <strong>{user.name}</strong>
                </td>

                <td style={tdStyle}>
                  {user.email}
                </td>

                <td style={tdStyle}>
                  <span
                    style={{
                      padding: "6px 12px",
                      borderRadius: "20px",
                      background:
                        user.role === "Teacher"
                          ? "#cffafe"
                          : "#dcfce7",
                      color:
                        user.role === "Teacher"
                          ? "#0c4a6e"
                          : "#166534",
                      fontSize: "13px",
                      fontWeight: "600",
                    }}
                  >
                    {user.role}
                  </span>
                </td>

                <td style={tdStyle}>
                  <button
                    onClick={() =>
                      openEditModal(user)
                    }
                    style={{
                      background: "#0d6efd",
                      color: "#fff",
                      border: "none",
                      padding: "8px 14px",
                      borderRadius: "6px",
                      marginRight: "10px",
                      cursor: "pointer",
                    }}
                  >
                    ✏️ Edit
                  </button>

                  <button
                    onClick={() =>
                      deleteUser(user.id)
                    }
                    style={{
                      background: "#dc3545",
                      color: "#fff",
                      border: "none",
                      padding: "8px 14px",
                      borderRadius: "6px",
                      cursor: "pointer",
                    }}
                  >
                    🗑 Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Stats */}
      <div
        style={{
          marginTop: "25px",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
        }}
      >
        <div style={cardStyle}>
          <h2>{users.length}</h2>
          <p>Total Users</p>
        </div>

        <div style={cardStyle}>
          <h2>
            {
              users.filter(
                (u) => u.role === "Teacher"
              ).length
            }
          </h2>
          <p>Teachers</p>
        </div>

        <div style={cardStyle}>
          <h2>
            {
              users.filter(
                (u) => u.role === "Student"
              ).length
            }
          </h2>
          <p>Students</p>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div style={overlayStyle}>
          <div style={modalStyle}>
            <h2>
              {editingUser
                ? "✏️ Edit User"
                : "➕ Add User"}
            </h2>

            <input
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value,
                })
              }
              style={inputStyle}
            />

            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
              style={inputStyle}
            />

            <select
              value={formData.role}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  role: e.target.value,
                })
              }
              style={inputStyle}
            >
              <option value="">
                Select Role
              </option>
              <option>Student</option>
              <option>Teacher</option>
              <option>Admin</option>
            </select>

            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "10px",
                marginTop: "20px",
              }}
            >
              <button
                onClick={() =>
                  setShowModal(false)
                }
                style={cancelBtn}
              >
                Cancel
              </button>

              <button
                onClick={saveUser}
                style={saveBtn}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
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
  padding: "20px",
  borderRadius: "12px",
  textAlign: "center",
  boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
};

const overlayStyle = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modalStyle = {
  background: "#fff",
  width: "450px",
  padding: "25px",
  borderRadius: "15px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "12px",
  borderRadius: "8px",
  border: "1px solid #ddd",
  fontSize: "14px",
};

const cancelBtn = {
  background: "#6c757d",
  color: "#fff",
  border: "none",
  padding: "10px 18px",
  borderRadius: "8px",
  cursor: "pointer",
};

const saveBtn = {
  background: "#28a745",
  color: "#fff",
  border: "none",
  padding: "10px 18px",
  borderRadius: "8px",
  cursor: "pointer",
};

export default Users;