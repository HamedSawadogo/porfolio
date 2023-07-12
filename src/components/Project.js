import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import "../styles/components/_project.scss";

const TechnosWrapper = styled.h5`
  font-family: "Poppins", sans-serif;
  color: ${({ theme }) => (theme === "light" ? " #11c784" : "#f1f1f1")};
  font-size: 1.2rem;
  text-transform: lowercase;
  opacity: 0.7;
  margin: 5px 0;
`;
const Techno = styled.li`
  font-family: "Fira Sans", sans-serif;
  color: ${({ theme }) => (theme === "light" ? "rgb(22, 21, 19)" : "#f1f1f1")};
  font-size: 1.2rem;
`;

const TitleWrapper = styled.h4`
  font-family: "Inter", sans-serif;
  color: ${({ theme }) => (theme === "light" ? "rgb(22, 21, 19)" : "#f1f1f1")};
  font-size: 1.2rem;
  padding: 6px 6px 0 0;
  text-transform: capitalize;
`;

const ImageWrapper = styled.img`
  width: 100%;
  height: 70%;
  cursor: pointer;
  transition: 0.3s ease;
  border-radious: 25px;
  &:hover {
    opacity: 0.7;
  }
`;

const VisitWrapperContainer = styled.div`
  padding: 30px 0;
`;
const DescriptionWrapper = styled.p`
  text-transform: uppercase;
  font-family: "Inter", sans-serif;
  color: ${({ theme }) => (theme === "light" ? "rgb(22, 21, 19)" : "#f1f1f1")};
`;

const GithubWrapper = styled.i`
  font-size: 2rem;
  color: ${({ theme }) => (theme === "light" ? " #babfc6" : "#f1f1f1")};
  padding: 10px;
`;

const VisitWrapper = styled.a`
  margin: 2px 0;
  font-family: "Inter", sans-serif;
  color: ${({ theme }) => (theme === "light" ? "rgb(22, 21, 19)" : "#f1f1f1")};
`;

const SmallWrapper = styled.small`
  margin: 15px 0;
  font-family: "Inter", sans-serif;
  color: ${({ theme }) => (theme === "light" ? "rgb(22, 21, 19)" : "#f1f1f1")};
`;
const ContentWrapper = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  margin: 15px 30px;
  font-size: 1.2rem;
`;

const Project = ({ data }) => {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <div className="project-item">
      {/* partie image */}
      <div className="image-block">
        <ImageWrapper
          src={data.img}
          alt={`image du projet-${data.title}`}
        ></ImageWrapper>
      </div>

      {/* partie contenu */}
      <ContentWrapper>
        <TitleWrapper theme={theme}>{data.title}</TitleWrapper>
        <DescriptionWrapper theme={theme}>
          {data.description}
        </DescriptionWrapper>
        <TechnosWrapper theme={theme}>TECHNOLOGIES UTILISES</TechnosWrapper>
        {data.technos.map((techno, id) => (
          <Techno theme={theme} key={id}>
            {techno}
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
      </ContentWrapper>
    </div>
  );
};

export default Project;
