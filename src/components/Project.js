import React from "react";
const Project = ({ project }) => {
  const handleClick = () => {
    if (project.url) {
      window.location.href = project.url;
    }
  };
  return (
    <div className="project" onClick={() => handleClick()}>
      <img src={project.img} alt={`image du projet-${project.title}`} />
      <div className="content">
        <h4>{project.title}</h4>
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default Project;
