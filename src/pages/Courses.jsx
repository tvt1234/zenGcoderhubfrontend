import AuthModal from "../components/AuthModal";
import { useEffect, useState } from "react";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const API_URL = `${BACKEND_URL}/api/courses`;



const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [accessMap, setAccessMap] = useState({});
  const [showAuth, setShowAuth] = useState(false);
  const [authType, setAuthType] = useState("login");

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "null");

  // 📦 FETCH COURSES
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setCourses(Array.isArray(data) ? data : []);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCourses();
  }, []);


  useEffect(() => {
  const handleAuthChange = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setAccessMap({});
    } else {
      refreshAllAccess();
    }
  };

  window.addEventListener("authChanged", handleAuthChange);

  return () => {
    window.removeEventListener("authChanged", handleAuthChange);
  };
}, [courses]);


  // 🔥 REFRESH ACCESS
  const refreshAllAccess = async () => {
    if (!token) return;

    const updated = {};

    await Promise.all(
      courses.map(async (c) => {
        try {
          const res = await fetch(
           `${BACKEND_URL}/api/enrollments/check/${c._id}`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );

          const data = await res.json();
          updated[c._id] = data.access;
        } catch (err) {
          console.log(err);
        }
      })
    );

    setAccessMap({ ...updated });
  };

  // 🔥 LOAD RAZORPAY
  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  // 💳 PAYMENT HANDLER
  const handlePayment = async (course) => {
    try {
      // 🚨 NOT LOGIN → OPEN MODAL
      if (!token) {
        localStorage.setItem(
          "pendingCourse",
          JSON.stringify({ courseId: course._id })
        );

        setAuthType("login");
        setShowAuth(true);
        return;
      }

      const ok = await loadRazorpay();
      if (!ok) return alert("Razorpay failed to load");

      const price = Number(course.salePrice || course.originalPrice || 0);
      if (!price) return alert("Invalid price");

      const orderRes = await fetch(
        `${BACKEND_URL}/api/payment/create-order`, 
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ amount: price }),
        }
      );

      const order = await orderRes.json();
      if (!order?.id) return alert("Order failed");

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: "INR",
        order_id: order.id,

        handler: async (response) => {
          try {
            const res = await fetch(
             `${BACKEND_URL}/api/payment/verify-payment`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                  ...response,
                  courseId: course._id,
                }),
              }
            );

            const data = await res.json();

            alert(data.message || "Payment Successful 🎉");

            await refreshAllAccess();
          } catch (err) {
            console.log(err);
          }
        },
      };

      new window.Razorpay(options).open();
    } catch (err) {
      console.log(err);
    }
  };

  // 📄 RECEI
  const downloadReceipt = async (courseId) => {
    try {
      const res = await fetch(
        `${BACKEND_URL}/api/payment/receipt/pdf/${courseId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res.ok) {
        alert("Receipt not found");
        return;
      }

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "receipt.pdf";
      a.click();

      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.log(err);
    }
  };

  // 🔥 AUTO ACCESS CHECK
  useEffect(() => {
    if (courses.length && token) {
      refreshAllAccess();
    }
  }, [courses]);

  return (
    <>
      <div style={{ padding: "40px" }}>

        {/* 🔥 HEADER + LOGOUT */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2>All Courses</h2>

        </div>

        {/* COURSES */}
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {courses.map((course) => (
            <div
              key={course._id}
              style={{
                width: "300px",
                border: "1px solid #ddd",
                padding: "15px",
                borderRadius: "10px",
              }}
            >
              <img
                src={course.image}
                alt="course"
                style={{ width: "100%", height: "180px" }}
              />

              <h3>{course.title}</h3>
              <p>{course.description}</p>

              <p style={{ fontSize: "16px" }}>
                <del style={{ color: "#ef4444", marginRight: "8px" }}>
                  ₹{course.originalPrice}
                </del>

                <b style={{ color: "#16a34a" }}>
                  ₹{course.salePrice}
                </b>
              </p>
              {accessMap[course._id] ? (
                <>

                  <button
                    onClick={() => downloadReceipt(course._id)}
                    style={{ width: "100%", padding: "10px" }}
                  >
                    📄  Download PDF
                  </button>
                </>
              ) : (
                <button
                  onClick={() => handlePayment(course)}
                  style={{
                    width: "100%",
                    padding: "10px",
                    background: "#2563eb", // blue color
                    color: "#fff",
                    border: "none",
                    borderRadius: "6px",
                    fontWeight: "bold",
                  }}
                >
                  💳 Pay & Enroll Now
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 🔥 AUTH MODAL */}
      <AuthModal
        type={authType}
        isOpen={showAuth}
        onClose={() => setShowAuth(false)}
      />
    </>
  );
};

export default Courses;