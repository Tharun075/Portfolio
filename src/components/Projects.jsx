import React from "react";
import projectImage from "../assets/project-pic.png";

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-card">
        <img src={projectImage} alt="Project" />
        <h3>Project Title</h3>
        <p>A short description of the project.</p>
        <a href="#">View Project</a>
      </div>
    </section>
  );
};

export default Projects;
