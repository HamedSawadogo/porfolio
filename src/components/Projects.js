import React from "react";
import { projectsData } from "../assets/projectsData";
import Project from "./Project";
import styled from "styled-components";
import "../styles/components/_projects.scss";

const Projects = () => {
  return (
    <div className="projects-container">
      {projectsData.map((project, id) => (
        <Project data={project} key={id + new Date().getTime()} />
      ))}
    </div>
  );
};
export default Projects;
