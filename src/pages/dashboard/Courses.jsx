import { useState } from "react";

const Courses = () => {
  const [courses, setCourses] = useState([
    { id: 1, title: "React JS", duration: "3 Months" },
    { id: 2, title: "Node JS", duration: "2 Months" },
  ]);

  const addCourse = () => {
    const title = prompt("Course Name");

    if (!title) return;

    setCourses([
      ...courses,
      {
        id: Date.now(),
        title,
        duration: "1 Month",
      },
    ]);
  };

  const editCourse = (id) => {
    const title = prompt("Update Course");

    setCourses(
      courses.map((course) =>
        course.id === id ? { ...course, title } : course
      )
    );
  };

  const deleteCourse = (id) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  return (
    <div>
      <h1>Course Management</h1>

      <button onClick={addCourse}>Add Course</button>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Course</th>
            <th>Duration</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.id}</td>
              <td>{course.title}</td>
              <td>{course.duration}</td>

              <td>
                <button onClick={() => editCourse(course.id)}>
                  Edit
                </button>

                <button
                  onClick={() => deleteCourse(course.id)}
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

export default Courses;
