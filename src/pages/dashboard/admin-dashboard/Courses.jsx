
import { useEffect, useState } from "react";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const API_URL = `${BACKEND_URL}/api/courses`;


const AdminCourses = () => {
  const [courses, setCourses] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    title: "",
    description: "",
    originalPrice: "",
    salePrice: "",
    image: "",
  });

  const token = localStorage.getItem("token");

  const fetchCourses = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();

      setCourses(Array.isArray(data) ? data : []);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setForm({
      title: "",
      description: "",
      originalPrice: "",
      salePrice: "",
      image: "",
    });

    setEditingId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let res;

      if (editingId) {
        res = await fetch(`${API_URL}/${editingId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(form),
        });
      } else {
        res = await fetch(`${API_URL}/create`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(form),
        });
      }

      const data = await res.json();

      alert(data.msg || "Success");

      resetForm();
      fetchCourses();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (course) => {
    setEditingId(course._id);

    setForm({
      title: course.title || "",
      description: course.description || "",
      originalPrice: course.originalPrice || "",
      salePrice: course.salePrice || "",
      image: course.image || "",
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this course?"
    );

    if (!confirmDelete) return;

    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      alert(data.msg || "Deleted");

      fetchCourses();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">
        Course Management
      </h2>

      <div className="card shadow p-4 mb-5">
        <h4 className="mb-3">
          {editingId
            ? "Update Course"
            : "Create Course"}
        </h4>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Course Title"
            value={form.title}
            onChange={handleChange}
            className="form-control mb-3"
            required
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={form.image}
            onChange={handleChange}
            className="form-control mb-3"
          />

          <input
            type="number"
            name="originalPrice"
            placeholder="Original Price"
            value={form.originalPrice}
            onChange={handleChange}
            className="form-control mb-3"
          />

          <input
            type="number"
            name="salePrice"
            placeholder="Sale Price"
            value={form.salePrice}
            onChange={handleChange}
            className="form-control mb-3"
          />

          <textarea
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            className="form-control mb-3"
            rows="4"
          />

          <button
            type="submit"
            className="btn btn-primary"
          >
            {editingId
              ? "Update Course"
              : "Create Course"}
          </button>

          {editingId && (
            <button
              type="button"
              className="btn btn-secondary ms-2"
              onClick={resetForm}
            >
              Cancel
            </button>
          )}
        </form>
      </div>

      <div className="row">
        {courses.map((course) => (
          <div
            className="col-md-4 mb-4"
            key={course._id}
          >
            <div className="card h-100 shadow-sm">
              <img
                src={
                  course.image ||
                  "https://via.placeholder.com/300x200"
                }
                alt={course.title}
                className="card-img-top"
                style={{
                  height: "220px",
                  objectFit: "cover",
                }}
              />

              <div className="card-body">
                <h5 className="card-title">
                  {course.title}
                </h5>

                <p className="card-text">
                  {course.description}
                </p>

                <div className="mb-3">
                  <del className="text-danger">
                    ₹{course.originalPrice}
                  </del>

                  <span className="ms-2 fw-bold text-success">
                    ₹{course.salePrice}
                  </span>
                </div>

                <button
                  className="btn btn-warning me-2"
                  onClick={() =>
                    handleEdit(course)
                  }
                >
                  Edit
                </button>

                <button
                  className="btn btn-danger"
                  onClick={() =>
                    handleDelete(course._id)
                  }
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminCourses;




