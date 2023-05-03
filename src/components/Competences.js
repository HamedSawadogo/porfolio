import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { colors } from "../utils/styles";

const CompetencesWrapper = styled.ul`
  display: grid;
  grid-template-columns: 25% 25% 25%;
  height: 200px;
  justify-content: center;
  margin: 50px auto;
`;
const Item = styled.li`
  font-seize: 1rem;
  font-family: "Poppins", sans-serif;
  color: #f1f1f1;
  display: flex;
  justify-content: center;
`;

const CompetenceWrapper = styled.h2`
  display: block;
  font-family: "Poppins", sans-serif;
  color: ${({ theme }) => (theme === "light" ? "rgb(22, 21, 19)" : "#f1f1f1")};
  text-align: center;
  width: 200px;
  opacity: 0.8;
  font-size: 1.2rem;
  margin: 20px auto;
  border-bottom: 3px solid ${colors.color1};
`;
const Competences = () => {
  const competences = [
    "Javascript",
    "react",
    "Redux",
    "Html| CSS",
    "Node Js",
    "Java",
    "Php",
    "Oracle",
    "SQL",
    "C++",
  ];
  const theme = useSelector((state) => state.theme.theme);
  return (
    <div>
      <CompetenceWrapper theme={theme}>Mes compétences</CompetenceWrapper>
      <CompetencesWrapper>
        {competences.map((competence, id) => (
          <div className="">
            <Item key={id}>{competence}</Item>
            {/* <LinearProgress></LinearProgress> */}
          </div>
        ))}
      </CompetencesWrapper>
    </div>
  );
};

export default Competences;
