import React from "react";

const Project = ({ project }) => {
  return (
    <div className="project">
      <img src={project.img} alt={`image du projet-${project.title}`} />
      <div className="content">
        <h4>{project.title}</h4>
        <p>{project.description}</p>
      </div>
      {/* {project.technos.map((tech, key) => (
        <li key={key}>{tech}</li>
      ))} */}
    </div>
  );
};

export default Project;
