import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";

import StudentDashboard from "./pages/dashboard/StudentDashboard";
import TeacherDashboard from "./pages/dashboard/TeacherDashboard";
import AdminDashboard from "./pages/dashboard/AdminDashboard";

import ProtectedRoute from "./components/ProtectedRoute";

import Header from "./components/Header";
import Footer from "./components/Footer";
import AdminLayout from "./components/AdminLayout";

import Users from "./pages/dashboard/Users";
import Courses from "./pages/dashboard/Courses";
import Teachers from "./pages/dashboard/Teachers";
import Students from "./pages/dashboard/Students";
import Reports from "./pages/dashboard/Reports";
import Payments from "./pages/dashboard/Payments";
import Notifications from "./pages/dashboard/Notifications";
import Settings from "./pages/dashboard/Settings";
import Logs from "./pages/dashboard/Logs";

import "./global.css";
function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />


        {/* DASHBOARDS */}
        <Route
          path="/student"
          element={
            <ProtectedRoute role="student">
              <StudentDashboard />
            </ProtectedRoute>
          }
        />
        

        <Route
          path="/teacher"
          element={
            <ProtectedRoute role="teacher">
              <TeacherDashboard />
            </ProtectedRoute>
          }
        />

       <Route
  path="/admin"
  element={
    <ProtectedRoute role="admin">
      <AdminLayout />
    </ProtectedRoute>
  }
>
  <Route path="dashboard" element={<AdminDashboard />} />
  <Route path="users" element={<Users />} />
  <Route path="courses" element={<Courses />} />
  <Route path="teachers" element={<Teachers />} />
  <Route path="students" element={<Students />} />
  <Route path="reports" element={<Reports />} />
  <Route path="payments" element={<Payments />} />
  <Route path="notifications" element={<Notifications />} />
  <Route path="settings" element={<Settings />} />
  <Route path="logs" element={<Logs />} />
</Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;