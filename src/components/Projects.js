import React from "react";
import { projectsData } from "../assets/projectsData";
import Project from "./Project";
import styled from "styled-components";

const ProjectsWrapper = styled.div`
  width: 85%;
  margin: 0 auto;
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
