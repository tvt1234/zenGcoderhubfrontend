import { useState } from "react";

const Teachers = () => {
  const [teachers, setTeachers] = useState([
    {
      id: 1,
      name: "John",
      subject: "React",
    },
  ]);

  const addTeacher = () => {
    const name = prompt("Teacher Name");

    if (!name) return;

    setTeachers([
      ...teachers,
      {
        id: Date.now(),
        name,
        subject: "New Subject",
      },
    ]);
  };

  const editTeacher = (id) => {
    const name = prompt("Update Name");

    setTeachers(
      teachers.map((teacher) =>
        teacher.id === id
          ? { ...teacher, name }
          : teacher
      )
    );
  };

  const deleteTeacher = (id) => {
    setTeachers(
      teachers.filter((teacher) => teacher.id !== id)
    );
  };

  return (
    <div>
      <h1>Teacher Management</h1>

      <button onClick={addTeacher}>
        Add Teacher
      </button>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Subject</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {teachers.map((teacher) => (
            <tr key={teacher.id}>
              <td>{teacher.id}</td>
              <td>{teacher.name}</td>
              <td>{teacher.subject}</td>

              <td>
                <button
                  onClick={() =>
                    editTeacher(teacher.id)
                  }
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    deleteTeacher(teacher.id)
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

export default Teachers;
