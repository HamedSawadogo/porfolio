import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const ProjectWrapper = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => (theme === "light" ? "#333" : "#f1f1f13d")};
  transition: 0.3s ease;
  min-width: 300px;
  margin: 10px auto;
  border-radius: 8px;
  padding: 1px;
  overflow: hiden;
`;

const TechnosWrapper = styled.h5`
  font-family: "Poppins", sans-serif;
  color: ${({ theme }) => (theme === "light" ? " #11c784" : "#f1f1f1")};
  font-size: 1rem;
  text-transform: lowercase;
  opacity: 0.7;
  margin: 5px 0;
`;
const Techno = styled.li`
  font-family: "Fira Sans", sans-serif;
  color: ${({ theme }) => (theme === "light" ? "rgb(22, 21, 19)" : "#f1f1f1")};
  font-size: 0.9rem;
  list-style: none;
`;

const TitleWrapper = styled.h4`
  font-family: "Inter", sans-serif;
  color: ${({ theme }) => (theme === "light" ? "rgb(22, 21, 19)" : "#f1f1f1")};
  font-size: 1.1rem;
  padding: 6px 6px 0 0;
  margin-top: 5px;
`;

const ImageWrapper = styled.img`
  height: 76%;
  width: 100%;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    opacity: 0.7;
  }
`;

const VisitWrapperContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 5px;
`;
const DescriptionWrapper = styled.p`
  font-family: "Inter", sans-serif;
  color: ${({ theme }) => (theme === "light" ? "rgb(22, 21, 19)" : "#f1f1f1")};
`;

const GithubWrapper = styled.i`
  font-size: 1.5rem;
  color: ${({ theme }) => (theme === "light" ? " #babfc6" : "#f1f1f1")};
  padding: 10px;
`;

const VisitWrapper = styled.a`
  font-family: "Inter", sans-serif;
  color: ${({ theme }) => (theme === "light" ? "rgb(22, 21, 19)" : "#f1f1f1")};
`;

const SmallWrapper = styled.small`
  font-family: "Inter", sans-serif;
  color: ${({ theme }) => (theme === "light" ? "rgb(22, 21, 19)" : "#f1f1f1")};
`;
const Project = ({ data }) => {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <ProjectWrapper theme={theme}>
      <ImageWrapper
        src={data.img}
        alt={`image du projet-${data.title}`}
      ></ImageWrapper>
      <div className="content">
        <TitleWrapper theme={theme}>{data.title}</TitleWrapper>
        <DescriptionWrapper theme={theme}>
          {data.description}
        </DescriptionWrapper>
        <TechnosWrapper theme={theme}>TECHNOLOGIES UTILISES</TechnosWrapper>
        {data.technos.map((techno, id) => (
          <Techno theme={theme} key={id}>
            ✅{techno}
          </Techno>
        ))}
        <VisitWrapperContainer>
          <GithubWrapper
            className="fa-brands fa-github"
            id="github"
            theme={theme}
          ></GithubWrapper>
          {data.url ? (
            <VisitWrapper
              theme={theme}
              href={data.url}
              target="_blank"
              id="visiter"
            >
              visiter ➡️
            </VisitWrapper>
          ) : (
            <SmallWrapper theme={theme}>hors Ligne</SmallWrapper>
          )}
        </VisitWrapperContainer>
      </div>
    </ProjectWrapper>
  );
};

export default Project;
