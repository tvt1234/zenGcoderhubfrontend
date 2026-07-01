

import { useEffect, useState } from "react";

export default function AllStudents() {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/teacher/students");
      const data = await res.json();
      setStudents(data.students || []);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchStudents();
    const interval = setInterval(fetchStudents, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{css}</style>

      <div className="dashboard">
        <h3 className="subtitle">All Students</h3>

        {students.length === 0 ? (
          <p className="empty">No students found</p>
        ) : (
          <div className="grid">
            {students.map((s) => (
              <div key={s._id} className="card">
                <div className="avatar">
                  {s.name?.charAt(0).toUpperCase()}
                </div>

                <div className="info">
                  <h3>{s.name}</h3>
                  <p>📧 {s.email}</p>
                  <p>📱 {s.mobile}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

const css = `
.dashboard {
  padding: 30px;
  font-family: Arial;
  background: #f4f6f8;
  min-height: 100vh;
}

.title {
  font-size: 32px;
  font-weight: bold;
  color: #222;
  margin-bottom: 5px;
}

.subtitle {
  font-size: 18px;
  color: #666;
  margin-bottom: 20px;
}

.empty {
  color: gray;
  font-size: 18px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.card {
  background: white;
  padding: 18px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  display: flex;
  gap: 15px;
  align-items: center;
  transition: 0.3s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.15);
}

.avatar {
  width: 50px;
  height: 50px;
  background: #4f46e5;
  color: white;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.info h3 {
  margin: 0;
  font-size: 18px;
}

.info p {
  margin: 2px 0;
  font-size: 14px;
  color: #555;
}
`;