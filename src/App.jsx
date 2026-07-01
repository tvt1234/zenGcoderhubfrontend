import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";

/* PAGES */
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

/* DASHBOARDS */
import TeacherDashboard from "./pages/dashboard/teacher-dashboard/TeacherDashboard";
import StudentDashboard from "./pages/dashboard/student-dashboard/StudentDashboard";
import AdminDashboard from "./pages/dashboard/admin-dashboard/AdminDashboard";

/* STUDENT */
import MyCourses from "./pages/dashboard/student-dashboard/MyCourses";
import StudentAttendance from "./pages/dashboard/student-dashboard/Attendance";
import StudentAssignments from "./pages/dashboard/student-dashboard/Assignments";
import StudentResults from "./pages/dashboard/student-dashboard/Results";

/* TEACHER */
import TeacherStudents from "./pages/dashboard/teacher-dashboard/Students";
import TeacherAttendance from "./pages/dashboard/teacher-dashboard/Attendance";
import TeacherAssignments from "./pages/dashboard/teacher-dashboard/Assignments";
import TeacherResults from "./pages/dashboard/teacher-dashboard/Results";
import TeacherProfile from "./pages/dashboard/teacher-dashboard/Profile";
import AllStudents from "./pages/dashboard/teacher-dashboard/AllStudents";

/* ADMIN */
import AdminCourses from "./pages/dashboard/admin-dashboard/Courses";
import Teachers from "./pages/dashboard/admin-dashboard/Teachers";
import AdminStudents from "./pages/dashboard/admin-dashboard/Students";
import Reports from "./pages/dashboard/admin-dashboard/Reports";
import Payments from "./pages/dashboard/admin-dashboard/Payments";
import Notifications from "./pages/dashboard/admin-dashboard/Notifications";
import Settings from "./pages/dashboard/admin-dashboard/Settings";
import SupportMessages from "./pages/dashboard/admin-dashboard/SupportMessages";

/* LAYOUTS */
import ProtectedRoute from "./components/ProtectedRoute";
import AdminLayout from "./components/AdminLayout";
import TeacherLayout from "./components/TeacherLayout";
import StudentLayout from "./components/StudentLayout";

import Header from "./components/Header";
import Footer from "./components/Footer";

import "./global.css";

function AppContent() {
  const location = useLocation();

  const isDashboardRoute =
    location.pathname.startsWith("/admin") ||
    location.pathname.startsWith("/teacher") ||
    location.pathname.startsWith("/student");

  const hideLayout = isDashboardRoute;

  return (
    <>
      {!hideLayout && <Header />}

      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* OLD URL SUPPORT */}
        <Route
          path="/admin-dashboard"
          element={<Navigate to="/admin" replace />}
        />
        <Route
          path="/teacher-dashboard"
          element={<Navigate to="/teacher" replace />}
        />
        <Route
          path="/student-dashboard"
          element={<Navigate to="/student" replace />}
        />

        {/* STUDENT */}
        <Route
          path="/student"
          element={
            <ProtectedRoute role="student">
              <StudentLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<StudentDashboard />} />
          <Route path="courses" element={<MyCourses />} />
          <Route path="attendance" element={<StudentAttendance />} />
          <Route path="assignments" element={<StudentAssignments />} />
          <Route path="results" element={<StudentResults />} />
        </Route>

        {/* TEACHER */}
        <Route
          path="/teacher"
          element={
            <ProtectedRoute role="teacher">
              <TeacherLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<TeacherDashboard />} />
          <Route path="students" element={<TeacherStudents />} />
          <Route path="attendance" element={<TeacherAttendance />} />
          <Route path="assignments" element={<TeacherAssignments />} />
          <Route path="results" element={<TeacherResults />} />
          <Route path="profile" element={<TeacherProfile />} />
          <Route path="/teacher/all-students" element={<AllStudents />} />
        </Route>

        {/* ADMIN */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute role="admin">
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="courses" element={<AdminCourses />} />
          <Route path="teachers" element={<Teachers />} />
          <Route path="students" element={<AdminStudents />} />
          <Route path="reports" element={<Reports />} />
          <Route path="payments" element={<Payments />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="settings" element={<Settings />} />
          <Route path="SupportMessages" element={<SupportMessages />} />
        </Route>

        {/* 404 PAGE */}
        <Route
          path="*"
          element={
            <div
              style={{
                textAlign: "center",
                padding: "80px 20px",
              }}
            >
              <h1
                style={{
                  fontSize: "80px",
                  color: "#2563eb",
                  marginBottom: "10px",
                }}
              >
                404
              </h1>

              <p
                style={{
                  fontSize: "20px",
                  marginBottom: "20px",
                }}
              >
                Page not found
              </p>

              <button
                onClick={() => (window.location.href = "/")}
                style={{
                  padding: "12px 24px",
                  background: "#2563eb",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              >
                Go Home
              </button>
            </div>
          }
        />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;