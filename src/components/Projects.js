import React from "react";
import { projectsData } from "../assets/projectsData";
import Project from "./Project";
import styled from "styled-components";

const ProjectsWrapper = styled.div`
  width: 70%;
  display: flex;
  margin: 20px auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
