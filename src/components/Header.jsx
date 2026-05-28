import { useState } from "react";
import { Link } from "react-router-dom";
import courses from "../data/courses";
import AuthModal from "./AuthModal";

import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [courseOpen, setCourseOpen] = useState(false);
  const [authType, setAuthType] = useState(null);

  return (
    <header
      style={{
        background: "#0f172a",
        color: "white",
        padding: "15px 30px",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <div>
          <h2
            style={{
              fontSize: "28px",
              fontWeight: "bold",
              color: "#38bdf8",
            }}
          >
            ZengCoders
          </h2>
        </div>

        {/* Desktop Menu */}
        <nav
          style={{
            display: "flex",
            gap: "30px",
            alignItems: "center",
          }}
        >
          <Link to="/" style={linkStyle}>
            Home
          </Link>

          {/* Dropdown */}
          <div
            style={{ position: "relative" }}
            onMouseEnter={() => setCourseOpen(true)}
            onMouseLeave={() => setCourseOpen(false)}
           >
            <button
              style={{
                ...linkStyle,
                background: "transparent",
                border: "none",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer",
              }}
            >
              Courses <FaChevronDown size={12} />
            </button>

            {courseOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "22px",
                  left: 0,
                  background: "white",
                  color: "#111",
                  width: "230px",
                  borderRadius: "10px",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
                  overflow: "hidden",
                  zIndex: 9999,
                }}
              >
                {courses.map((course) => (
                  <Link
                    key={course.name}
                    to={`/course/${course.name}`}
                    style={{
                      display: "block",
                      padding: "14px 18px",
                      textDecoration: "none",
                      color: "#111",
                      borderBottom: "1px solid #f1f1f1",
                    }}
                    onClick={() => setCourseOpen(false)}
                  >
                    {course.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/about" style={linkStyle}>
            About
          </Link>

          <Link to="/careers" style={linkStyle}>
            Careers
          </Link>

          <Link to="/contact" style={linkStyle}>
            Contact
          </Link>

          <button onClick={() => setAuthType("login")} style={loginBtn}>
            Login
          </button>

          <button onClick={() => setAuthType("signup")} style={signupBtn}>
            Signup
          </button>
        </nav>

              <AuthModal
            type={authType}
            isOpen={authType !== null}
            onClose={() => setAuthType(null)}
            />

        {/* Mobile Menu Icon */}
        <div
          style={{ cursor: "pointer" }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          <Link to="/" style={linkStyle}>
            Home
          </Link>

          <Link to="/" style={linkStyle}>
            Courses
          </Link>

          <Link to="/about" style={linkStyle}>
            About
          </Link>

          <Link to="/careers" style={linkStyle}>
            Careers
          </Link>

          <Link to="/contact" style={linkStyle}>
            Contact
          </Link>

          <button style={loginBtn}>Login</button>

          <button style={signupBtn}>Signup</button>
        </div>
      )}
    </header>
  );
};

/* Styles */
const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "16px",
  fontWeight: "500",
};

const loginBtn = {
  background: "transparent",
  color: "white",
  border: "1px solid #38bdf8",
  padding: "10px 20px",
  borderRadius: "8px",
  cursor: "pointer",
};

const signupBtn = {
  background: "#2563eb",
  color: "white",
  border: "none",
  padding: "10px 20px",
  borderRadius: "8px",
  cursor: "pointer",
};

export default Header;
