import React from "react";
import { projectsData } from "../assets/projectsData";
import Project from "./Project";
import styled from "styled-components";

const ProjectsWrapper = styled.div`
  width: 60%;
  display: grid;
  margin: 20px auto;
  grid-template-columns: 100%;
  justify-content: center;
`;
const Projects = () => {
  return (
    <ProjectsWrapper>
      {projectsData.map((project, id) => (
        <Project data={project} key={id} />
      ))}
    </ProjectsWrapper>
  );
};
export default Projects;
