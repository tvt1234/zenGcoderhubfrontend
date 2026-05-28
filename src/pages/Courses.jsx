import courses from "../data/courses";

const Courses = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8 p-10">
      {courses.map((course) => (
        <div
          key={course.id}
          className="shadow-lg rounded-xl overflow-hidden"
        >
          <img
            src={course.image}
            alt={course.title}
            className="h-52 w-full object-cover"
          />

          <div className="p-5">
            <h2 className="text-xl font-bold">
              {course.title}
            </h2>

            <p className="mt-2">
              {course.description}
            </p>

            <button className="bg-blue-600 text-white px-4 py-2 rounded mt-4">
              Enroll Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Courses;