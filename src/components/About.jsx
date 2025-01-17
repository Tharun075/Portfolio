import React from "react";
import profilePic from "../assets/profile-pic.jpg";

const About = () => {
  const sectionStyle = {
    padding: "30px",
    margin: "40px auto",
    maxWidth: "1100px",
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  };

  const headingStyle = {
    fontSize: "2.5rem",
    color: "#333",
    marginBottom: "20px",
  };

  const aboutContentStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "left",
    maxWidth: "800px",
    margin: "0 auto",
  };

  const profilePicStyle = {
    width: "250px",
    height: "250px",
    borderRadius: "50%",
    marginBottom: "20px",
    objectFit: "cover",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  };

  const paragraphStyle = {
    fontSize: "1.2rem",
    color: "#666",
    lineHeight: "1.8",
    maxWidth: "700px",
  };

  const mediaQueries = {
    '@media (max-width: 768px)': {
      aboutContentStyle: {
        flexDirection: "column",
        textAlign: "center",
      },
      profilePicStyle: {
        width: "200px",
        height: "200px",
      },
      paragraphStyle: {
        fontSize: "1rem",
      },
    },
    '@media (max-width: 480px)': {
      sectionStyle: {
        padding: "20px",
        margin: "10px",
      },
      profilePicStyle: {
        width: "180px",
        height: "180px",
      },
      paragraphStyle: {
        fontSize: "0.9rem",
      },
    },
  };

  return (
    <section id="about" style={sectionStyle}>
      <h2 style={headingStyle}>About Me</h2>
      <div style={aboutContentStyle}>
        <img style={profilePicStyle} src={profilePic} alt="Profile" />
        <p style={paragraphStyle}>
          Hello, I'm a MERN stack developer with a passion for creating dynamic and interactive web applications. I specialize in building full-stack applications using MongoDB, Express, React, and Node.js. I enjoy solving complex problems and continuously learning new technologies to enhance the user experience.
        </p>
      </div>
    </section>
  );
};

export default About;
