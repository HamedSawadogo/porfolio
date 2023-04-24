import React from "react";
import { projectsData } from "../assets/projectsData";
import Project from "./Project";
const Projects = () => {
  return (
    <div className="projects-container">
      {projectsData.map((project, id) => (
        <Project data={project} key={id} />
      ))}
    </div>
  );
};

export default Projects;
