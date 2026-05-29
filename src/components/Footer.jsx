import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{
        background: "#020617",
        color: "white",
        padding: "60px 40px 20px",
        marginTop: "50px",
      }}
    >
      {/* Top Section */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "40px",
          marginBottom: "40px",
        }}
      >
        {/* Company */}
        <div>
          <h2
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              color: "#38bdf8",
              marginBottom: "15px",
            }}
          >
            ZengCoders
          </h2>

          <p
            style={{
              lineHeight: "28px",
              color: "#cbd5e1",
            }}
          >
            Professional engineering education platform
            for students and working professionals.
            Learn modern technologies with real-world
            projects and industry experts.
          </p>

          {/* Social Icons */}
          <div
            style={{
              display: "flex",
              gap: "15px",
              marginTop: "25px",
            }}
          >
            <SocialIcon>
              <FaFacebook />
            </SocialIcon>

            <SocialIcon>
              <FaInstagram />
            </SocialIcon>

            <SocialIcon>
              <FaLinkedin />
            </SocialIcon>

            <SocialIcon>
              <FaYoutube />
            </SocialIcon>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3
            style={{
              fontSize: "22px",
              marginBottom: "20px",
            }}
          >
            Quick Links
          </h3>

          <FooterLink text="Home" />
          <FooterLink text="Courses" />
          <FooterLink text="About Us" />
          <FooterLink text="Careers" />
          <FooterLink text="Contact" />
        </div>

        {/* Courses */}
        <div>
          <h3
            style={{
              fontSize: "22px",
              marginBottom: "20px",
            }}
          >
            Popular Courses
          </h3>

          <FooterLink text="React.js" />
          <FooterLink text="Node.js" />
          <FooterLink text="Python" />
          <FooterLink text="MongoDB" />
          <FooterLink text="AWS Cloud" />
          <FooterLink text="Docker & DevOps" />
        </div>

        {/* Contact */}
        <div>
          <h3
            style={{
              fontSize: "22px",
              marginBottom: "20px",
            }}
          >
            Contact Us
          </h3>

          <ContactItem
            icon={<FaMapMarkerAlt />}
            text="ZengCoders DLF PHASE 3,GURGAON, HARYANA"
          />

          <ContactItem
            icon={<FaPhoneAlt />}
            text="+91 9211035927"
          />

          <ContactItem
            icon={<FaEnvelope />}
            text="support@zengcoders.com"
          />

          {/* Newsletter */}
          <div
            style={{
              marginTop: "25px",
            }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: "8px",
                border: "none",
                marginBottom: "12px",
                outline: "none",
              }}
            />

            <button
              style={{
                width: "100%",
                padding: "14px",
                background: "#2563eb",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontSize: "16px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div
        style={{
          borderTop: "1px solid #1e293b",
          paddingTop: "20px",
          textAlign: "center",
          color: "#94a3b8",
        }}
      >
        © 2026 ZengCoders. All Rights Reserved.
      </div>
    </footer>
  );
};

/* Footer Link */
const FooterLink = ({ text }) => {
  return (
    <p
      style={{
        marginBottom: "14px",
        color: "#cbd5e1",
        cursor: "pointer",
      }}
    >
      {text}
    </p>
  );
};

/* Contact Item */
const ContactItem = ({ icon, text }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "12px",
        marginBottom: "18px",
        alignItems: "center",
        color: "#cbd5e1",
      }}
    >
      <span
        style={{
          color: "#38bdf8",
        }}
      >
        {icon}
      </span>

      <span>{text}</span>
    </div>
  );
};

/* Social Icon */
const SocialIcon = ({ children }) => {
  return (
    <div
      style={{
        width: "42px",
        height: "42px",
        background: "#0f172a",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        fontSize: "18px",
        transition: "0.3s",
      }}
    >
      {children}
    </div>
  );
};

export default Footer;