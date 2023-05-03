import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { colors } from "../utils/styles";

const H3Wrapper = styled.h3`
  font-family: "Poppins", sans-serif;
  color: ${({ theme }) => (theme === "light" ? "#333" : "#f1f1f1")};
  text-align: center;
  opacity: 0.8;
  font-size: 1.2rem;
  margin: 70px auto;
  border-bottom: 2px solid ${colors.color1};
  width: auto;
  width: 100px;
`;
const Tools = () => {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <div className="tools-container">
      <H3Wrapper theme={theme}>Mes Outils</H3Wrapper>
      <div className="tools">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
      </div>
    </div>
  );
};

export default Tools;
