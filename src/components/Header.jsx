
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthModal from "./AuthModal";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [authType, setAuthType] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    const updateAuth = () => {
      setToken(localStorage.getItem("token"));
    };

    window.addEventListener("authChanged", updateAuth);

    return () => {
      window.removeEventListener("authChanged", updateAuth);
    };
  }, []);

  const handleLogout = () => {
    localStorage.clear();

    setToken(null);

    window.dispatchEvent(new Event("authChanged"));
  };

  const closeMenu = () => setMenuOpen(false);

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
        <h2
          style={{
            fontSize: "28px",
            fontWeight: "bold",
            color: "#38bdf8",
            margin: 0,
          }}
        >
          ZengCoders
        </h2>

        <nav
          style={{
            display: "flex",
            gap: "25px",
            alignItems: "center",
          }}
        >
          <Link to="/" style={linkStyle}>
            Home
          </Link>

          <Link to="/courses" style={linkStyle}>
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

          {token ? (
            <button onClick={handleLogout} style={logoutBtn}>
              Logout
            </button>
          ) : (
            <>
              <button
                onClick={() => setAuthType("login")}
                style={loginBtn}
              >
                Login
              </button>

              <button
                onClick={() => setAuthType("signup")}
                style={signupBtn}
              >
                Signup
              </button>
            </>
          )}
        </nav>

        <div
          style={{ cursor: "pointer" }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      <AuthModal
        type={authType}
        isOpen={authType !== null}
        onClose={() => setAuthType(null)}
      />

      {menuOpen && (
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          <Link to="/" style={linkStyle} onClick={closeMenu}>
            Home
          </Link>

          <Link to="/courses" style={linkStyle} onClick={closeMenu}>
            Courses
          </Link>

          <Link to="/about" style={linkStyle} onClick={closeMenu}>
            About
          </Link>

          <Link to="/careers" style={linkStyle} onClick={closeMenu}>
            Careers
          </Link>

          <Link to="/contact" style={linkStyle} onClick={closeMenu}>
            Contact
          </Link>

          {token ? (
            <button onClick={handleLogout} style={logoutBtn}>
              Logout
            </button>
          ) : (
            <>
              <button
                onClick={() => {
                  setAuthType("login");
                  closeMenu();
                }}
                style={loginBtn}
              >
                Login
              </button>

              <button
                onClick={() => {
                  setAuthType("signup");
                  closeMenu();
                }}
                style={signupBtn}
              >
                Signup
              </button>
            </>
          )}
        </div>
      )}
    </header>
  );
};

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

const logoutBtn = {
  background: "#dc2626",
  color: "#fff",
  border: "none",
  padding: "10px 20px",
  borderRadius: "8px",
  cursor: "pointer",
};

export default Header;