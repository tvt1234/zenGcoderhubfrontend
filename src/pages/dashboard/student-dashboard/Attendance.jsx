
import { useEffect, useState } from "react";

const BASE = "http://localhost:5000/api";

export default function StudentAttendance() {
  const [attendance, setAttendance] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAttendance();
  }, []);

  const fetchAttendance = async () => {
    try {
      const userData = JSON.parse(localStorage.getItem("user"));

      const studentId =
        userData?._id ||
        userData?.id ||
        userData?.user?._id;

      if (!studentId) {
        console.log("Student ID not found");
        return;
      }

      const res = await fetch(
        `${BASE}/attendance/student/${studentId}`
      );

      const data = await res.json();

      setAttendance(Array.isArray(data) ? data : []);
    } catch (error) {
      console.log("Attendance Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const totalClasses = attendance.length;

  const presentClasses = attendance.filter(
    (a) => a.status === "Present"
  ).length;

  const attendancePercentage =
    totalClasses > 0
      ? ((presentClasses / totalClasses) * 100).toFixed(1)
      : 0;

  return (
    <div
      style={{
        padding: "25px",
        minHeight: "100vh",
        background: "#f4f7fc",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <h2
        style={{
          marginBottom: "25px",
          color: "#1e293b",
        }}
      >
        📅 My Attendance
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "15px",
            textAlign: "center",
            boxShadow:
              "0 4px 12px rgba(0,0,0,0.08)",
          }}
        >
          <h3>Total Classes</h3>
          <p
            style={{
              fontSize: "28px",
              fontWeight: "bold",
              color: "#2563eb",
            }}
          >
            {totalClasses}
          </p>
        </div>

        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "15px",
            textAlign: "center",
            boxShadow:
              "0 4px 12px rgba(0,0,0,0.08)",
          }}
        >
          <h3>Present</h3>
          <p
            style={{
              fontSize: "28px",
              fontWeight: "bold",
              color: "#16a34a",
            }}
          >
            {presentClasses}
          </p>
        </div>

        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "15px",
            textAlign: "center",
            boxShadow:
              "0 4px 12px rgba(0,0,0,0.08)",
          }}
        >
          <h3>Attendance %</h3>
          <p
            style={{
              fontSize: "28px",
              fontWeight: "bold",
              color: "#f97316",
            }}
          >
            {attendancePercentage}%
          </p>
        </div>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : attendance.length === 0 ? (
        <p>No attendance found.</p>
      ) : (
        <div
          style={{
            overflowX: "auto",
            background: "#fff",
            borderRadius: "15px",
            boxShadow:
              "0 4px 12px rgba(0,0,0,0.08)",
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
                <th style={{ padding: "15px" }}>Date</th>
                <th style={{ padding: "15px" }}>Status</th>
                <th style={{ padding: "15px" }}>Remarks</th>
              </tr>
            </thead>

            <tbody>
              {attendance.map((item) => (
                <tr
                  key={item._id}
                  style={{
                    borderBottom:
                      "1px solid #e5e7eb",
                  }}
                >
                  <td
                    style={{
                      padding: "15px",
                      textAlign: "center",
                    }}
                  >
                    {new Date(
                      item.date
                    ).toLocaleDateString()}
                  </td>

                  <td
                    style={{
                      padding: "15px",
                      textAlign: "center",
                    }}
                  >
                    <span
                      style={{
                        padding: "6px 12px",
                        borderRadius: "20px",
                        fontWeight: "600",
                        background:
                          item.status ===
                          "Present"
                            ? "#dcfce7"
                            : "#fee2e2",
                        color:
                          item.status ===
                          "Present"
                            ? "#15803d"
                            : "#dc2626",
                      }}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td
                    style={{
                      padding: "15px",
                      textAlign: "center",
                    }}
                  >
                    {item.remarks || "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}