
import { useEffect, useState, useRef } from "react";

const BASE = "http://localhost:5000/api";

export default function StudentDashboard() {
  const [results, setResults] = useState([]);
  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    fetchMyResults();
  }, []);

  const fetchMyResults = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch(`${BASE}/results/my-results`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      setResults(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>🎓 My Result Dashboard</h2>

      <table border="1" width="100%" cellPadding="10">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Exam</th>
            <th>Marks</th>
            <th>Percentage</th>
            <th>Grade</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {results.length > 0 ? (
            results.map((r) => (
              <tr key={r._id}>
                <td>{r.subject}</td>
                <td>{r.examType}</td>
                <td>
                  {r.marksObtained}/{r.totalMarks}
                </td>
                <td>
                  {((r.marksObtained / r.totalMarks) * 100).toFixed(2)}%
                </td>
                <td>{r.grade}</td>
                <td>{r.resultStatus}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: "center" }}>
                No Result Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}