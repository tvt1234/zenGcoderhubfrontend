

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