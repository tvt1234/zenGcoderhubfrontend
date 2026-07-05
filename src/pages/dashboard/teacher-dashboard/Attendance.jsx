
import { useEffect, useState } from "react";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const BASE = `${BACKEND_URL}/api`;

export default function AttendancePage() {
  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editStatus, setEditStatus] = useState("");

  useEffect(() => {
    fetchStudents();
    fetchAttendance();
  }, []);

const fetchStudents = async () => {
  try {
    const token = localStorage.getItem("token");

    const res = await fetch(`${BASE}/users/students`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();

    console.log("students:", data);

    setStudents(Array.isArray(data) ? data : []);
  } catch (error) {
    console.log(error);
  }
};

  const fetchAttendance = async () => {
    try {
      const res = await fetch(`${BASE}/attendance`);
      const data = await res.json();
      setAttendance(data);
    } catch (error) {
      console.log(error);
    }
  };

  const markAttendance = async (studentId, status) => {
    try {
      await fetch(`${BASE}/attendance`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          student: studentId,
          date: new Date(),
          status,
          remarks: "",
        }),
      });

      fetchAttendance();
    } catch (error) {
      console.log(error);
    }
  };

  const updateAttendance = async (id) => {
    try {
      await fetch(`${BASE}/attendance/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: editStatus,
        }),
      });

      setEditingId(null);
      setEditStatus("");
      fetchAttendance();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteAttendance = async (id) => {
    try {
      await fetch(`${BASE}/attendance/${id}`, {
        method: "DELETE",
      });

      fetchAttendance();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        padding: "25px",
        minHeight: "100vh",
        background: "#f4f7fc",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <h1
        style={{
          color: "#1e293b",
          marginBottom: "20px",
        }}
      >
        📅 Attendance Management
      </h1>

      <hr />

      <h2
        style={{
          color: "#334155",
          marginBottom: "20px",
        }}
      >
        Students
      </h2>

      {students.length === 0 ? (
        <p>No Students Found</p>
      ) : (
        students.map((student) => (
          <div
            key={student._id}
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              marginBottom: "12px",
              background: "#fff",
              padding: "15px",
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              flexWrap: "wrap",
            }}
          >
            <strong
              style={{
                minWidth: "180px",
                color: "#1e293b",
              }}
            >
              {student.name}
            </strong>

            <button
              style={{
                background: "#22c55e",
                color: "#fff",
                border: "none",
                padding: "8px 14px",
                borderRadius: "6px",
                cursor: "pointer",
              }}
              onClick={() =>
                markAttendance(student._id, "Present")
              }
            >
              Present
            </button>

            <button
              style={{
                background: "#ef4444",
                color: "#fff",
                border: "none",
                padding: "8px 14px",
                borderRadius: "6px",
                cursor: "pointer",
              }}
              onClick={() =>
                markAttendance(student._id, "Absent")
              }
            >
              Absent
            </button>

            <button
              style={{
                background: "#f59e0b",
                color: "#fff",
                border: "none",
                padding: "8px 14px",
                borderRadius: "6px",
                cursor: "pointer",
              }}
              onClick={() =>
                markAttendance(student._id, "Late")
              }
            >
              Late
            </button>

            <button
              style={{
                background: "#6366f1",
                color: "#fff",
                border: "none",
                padding: "8px 14px",
                borderRadius: "6px",
                cursor: "pointer",
              }}
              onClick={() =>
                markAttendance(student._id, "Leave")
              }
            >
              Leave
            </button>
          </div>
        ))
      )}

      <hr style={{ margin: "30px 0" }} />

      <h2
        style={{
          color: "#334155",
          marginBottom: "20px",
        }}
      >
        Attendance Records
      </h2>

      <div
        style={{
          background: "#fff",
          borderRadius: "12px",
          overflowX: "auto",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
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
                background: "#2563eb",
                color: "#fff",
              }}
            >
              <th style={{ padding: "15px" }}>Student</th>
              <th style={{ padding: "15px" }}>Status</th>
              <th style={{ padding: "15px" }}>Date</th>
              <th style={{ padding: "15px" }}>Action</th>
            </tr>
          </thead>

          <tbody>
            {attendance.length === 0 ? (
              <tr>
                <td
                  colSpan="4"
                  style={{
                    textAlign: "center",
                    padding: "20px",
                  }}
                >
                  No Attendance Records Found
                </td>
              </tr>
            ) : (
              attendance.map((a) => (
                <tr
                  key={a._id}
                  style={{
                    borderBottom: "1px solid #e5e7eb",
                  }}
                >
                  <td
                    style={{
                      padding: "15px",
                      textAlign: "center",
                    }}
                  >
                    {a.student?.name}
                  </td>

                  <td
                    style={{
                      padding: "15px",
                      textAlign: "center",
                    }}
                  >
                    {editingId === a._id ? (
                      <select
                        value={editStatus}
                        onChange={(e) =>
                          setEditStatus(e.target.value)
                        }
                        style={{
                          padding: "8px",
                          borderRadius: "6px",
                        }}
                      >
                        <option value="Present">
                          Present
                        </option>
                        <option value="Absent">
                          Absent
                        </option>
                        <option value="Late">
                          Late
                        </option>
                        <option value="Leave">
                          Leave
                        </option>
                      </select>
                    ) : (
                      <span
                        style={{
                          padding: "6px 12px",
                          borderRadius: "20px",
                          color: "#fff",
                          background:
                            a.status === "Present"
                              ? "#22c55e"
                              : a.status === "Absent"
                              ? "#ef4444"
                              : a.status === "Late"
                              ? "#f59e0b"
                              : "#6366f1",
                        }}
                      >
                        {a.status}
                      </span>
                    )}
                  </td>

                  <td
                    style={{
                      padding: "15px",
                      textAlign: "center",
                    }}
                  >
                    {new Date(
                      a.date
                    ).toLocaleDateString()}
                  </td>

                  <td
                    style={{
                      padding: "15px",
                      textAlign: "center",
                    }}
                  >
                    {editingId === a._id ? (
                      <>
                        <button
                          style={{
                            background: "#16a34a",
                            color: "#fff",
                            border: "none",
                            padding: "8px 12px",
                            borderRadius: "6px",
                            marginRight: "5px",
                            cursor: "pointer",
                          }}
                          onClick={() =>
                            updateAttendance(a._id)
                          }
                        >
                          Save
                        </button>

                        <button
                          style={{
                            background: "#64748b",
                            color: "#fff",
                            border: "none",
                            padding: "8px 12px",
                            borderRadius: "6px",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            setEditingId(null);
                            setEditStatus("");
                          }}
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          style={{
                            background: "#0ea5e9",
                            color: "#fff",
                            border: "none",
                            padding: "8px 12px",
                            borderRadius: "6px",
                            marginRight: "5px",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            setEditingId(a._id);
                            setEditStatus(a.status);
                          }}
                        >
                          Edit
                        </button>

                        <button
                          style={{
                            background: "#dc2626",
                            color: "#fff",
                            border: "none",
                            padding: "8px 12px",
                            borderRadius: "6px",
                            cursor: "pointer",
                          }}
                          onClick={() =>
                            deleteAttendance(a._id)
                          }
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}