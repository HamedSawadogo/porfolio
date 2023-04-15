import React from "react";
import { projectsData } from "../assets/projectsData";
import Project from "./Project";
const Projects = () => {
  return (
    <section className="projects-section">
      <h2>Mes Projets</h2>
      <div className="projets">
        {projectsData.map((project, key) => (
          <Project project={project} key={key} />
        ))}
      </div>
    </section>
  );
};
export default Projects;
