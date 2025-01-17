import React from "react";

const Header = () => {
  // Inline styles for simplicity, but you can also use CSS or CSS-in-JS libraries
  const headerStyle = {
    backgroundColor: "#333",
    color: "white",
    padding: "20px 0",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    position: "fixed",
    width: "100%",
    top: "0",
    left: "0",
    zIndex: "1000",
  };

  const navStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    listStyleType: "none",
    padding: "0",
    margin: "0",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "1.2rem",
    margin: "0 15px",
    padding: "10px 15px",
    borderRadius: "5px",
    transition: "background-color 0.3s ease",
  };

  const linkHoverStyle = {
    backgroundColor: "#444",
  };

  return (
    <header style={headerStyle}>
      <h1 style={{ textAlign: "center", fontSize: "2.5rem", marginBottom: "10px" }}>
        Welcome to My Portfolio
      </h1>
      <nav>
        <ul style={navStyle}>
          <li>
            <a
              href="#about"
              style={linkStyle}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#444")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#projects"
              style={linkStyle}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#444")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              style={linkStyle}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#444")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
