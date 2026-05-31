import { useState } from "react";

const Students = () => {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Amit",
      course: "React",
    },
  ]);

  const addStudent = () => {
    const name = prompt("Student Name");

    if (!name) return;

    setStudents([
      ...students,
      {
        id: Date.now(),
        name,
        course: "New Course",
      },
    ]);
  };

  const editStudent = (id) => {
    const name = prompt("Update Student");

    setStudents(
      students.map((student) =>
        student.id === id
          ? { ...student, name }
          : student
      )
    );
  };

  const deleteStudent = (id) => {
    setStudents(
      students.filter(
        (student) => student.id !== id
      )
    );
  };

  return (
    <div>
      <h1>Student Management</h1>

      <button onClick={addStudent}>
        Add Student
      </button>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Course</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.course}</td>

              <td>
                <button
                  onClick={() =>
                    editStudent(student.id)
                  }
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    deleteStudent(student.id)
                  }
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Students;
