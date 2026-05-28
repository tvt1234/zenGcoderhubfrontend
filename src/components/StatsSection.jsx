import {
  FaStar,
  FaUserGraduate,
  FaBriefcase,
} from "react-icons/fa";

const StatsSection = () => {
  return (
    <div>
      {/* Trust Section */}
      <section
        style={{
          padding: "80px 20px",
          background: "#ffffff",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            color: "#0f172a",
            marginBottom: "60px",
          }}
        >
          Join{" "}
          <span style={{ color: "#f59e0b" }}>
            15 Million Learners
          </span>{" "}
          Who Trust Learning With Us
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px",
            maxWidth: "1200px",
            margin: "auto",
          }}
        >
          {/* Card 1 */}
          <div style={cardStyle}>
            <h3 style={ratingStyle}>
              4.6 <FaStar color="#f59e0b" />
            </h3>

            <div style={logoBox}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png"
                alt="switchup"
                style={logoStyle}
              />
            </div>
          </div>

          {/* Card 2 */}
          <div style={cardStyle}>
            <h3 style={ratingStyle}>
              4.8 <FaStar color="#f59e0b" />
            </h3>

            <div style={logoBox}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png"
                alt="trustpilot"
                style={logoStyle}
              />
            </div>
          </div>

          {/* Card 3 */}
          <div style={cardStyle}>
            <h3 style={ratingStyle}>
              4.7 <FaStar color="#f59e0b" />
            </h3>

            <div style={logoBox}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/5968/5968520.png"
                alt="course report"
                style={logoStyle}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Success Section */}
      <section
        style={{
          background: "#dff5f3",
          padding: "90px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "auto",
          }}
        >
          <h2
            style={{
              fontSize: "52px",
              color: "#0f172a",
              marginBottom: "70px",
              fontWeight: "bold",
            }}
          >
            Real Stories,
            <br />
            Incredible Journeys
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "40px",
            }}
          >
            {/* Graduation */}
            <div style={statCard}>
              <FaUserGraduate
                size={50}
                color="#06b6d4"
              />

              <h1 style={statNumber}>80%</h1>

              <div style={line}></div>

              <p style={statText}>
                Graduation Rate
              </p>
            </div>

            {/* Rating */}
            <div style={statCard}>
              <FaStar size={50} color="#06b6d4" />

              <h1 style={statNumber}>
                4.8 <span>/5</span>
              </h1>

              <div style={line}></div>

              <p style={statText}>
                Rated by Learners
              </p>
            </div>

            {/* Salary */}
            <div style={statCard}>
              <FaBriefcase
                size={50}
                color="#06b6d4"
              />

              <h1 style={statNumber}>50%+</h1>

              <div style={line}></div>

              <p style={statText}>
                Average Salary Hike
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

/* Styles */

const cardStyle = {
  padding: "30px",
  borderRadius: "20px",
  background: "#fff",
};

const ratingStyle = {
  fontSize: "42px",
  color: "#0f172a",
  marginBottom: "25px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
};

const logoBox = {
  background: "#fff",
  borderRadius: "16px",
  padding: "25px",
  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
};

const logoStyle = {
  width: "140px",
  height: "70px",
  objectFit: "contain",
};

const statCard = {
  background: "#ffffff",
  padding: "40px",
  borderRadius: "20px",
  textAlign: "center",
  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
};

const statNumber = {
  fontSize: "70px",
  marginTop: "20px",
  color: "#0f172a",
};

const line = {
  width: "100px",
  height: "5px",
  background: "#06b6d4",
  margin: "20px auto",
  borderRadius: "20px",
};

const statText = {
  fontSize: "22px",
  color: "#334155",
};

export default StatsSection;