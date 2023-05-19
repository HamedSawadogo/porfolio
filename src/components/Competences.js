import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const front = ["Javascript", "react", "Redux", "Html| CSS", "Sass"];
const back = ["Node Js", "Php", "Java", "C++", "Oracle", "Mysql"];

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;
const CompetencesWrapper = styled.ul`
  display: grid;
  grid-template-columns: 35% 65%;
  justity-content: center;
  height: 160px;
  margin: 20px 0;
`;
const Item = styled.li`
  font-size: 1.1rem;
  font-family: "Poppins", sans-serif;
  color: ${({ theme }) => (theme === "light" ? "#333" : "#f1f1f1")};
  margin: 1px 20px;
`;

const CompetenceWrapper = styled.h2`
  display: block;
  font-family: "Poppins", sans-serif;
  color: ${({ theme }) => (theme === "light" ? "rgb(22, 21, 19)" : "#f1f1f1")};
  text-align: center;
  width: 200px;
  opacity: 0.8;
  font-size: 1.2rem;
  padding-top: 50px;
  margin: 5px auto;
  text-transform: uppercase;
`;

const Techno = styled.div`
  display: flex;
  align-items: start;
  justify-content: right;
`;
const Technos = styled.div`
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  border-left: 1px solid #333;
  padding: 5px 40px;
`;
const Button = styled.button`
  color: ${({ theme }) => (theme === "light" ? "#333" : "#f1f1f1")};
  background: #11c784;
  border: none;
  outline: none;
  font-size: 1.1rem;
  width: 120px;
  padding: 8px;
  font-family: "Inter", sans-serif;
`;
const Competences = () => {
  const theme = useSelector((state) => state.theme.theme);

  const generateKey = (id) => new Date().getTime() + id;
  return (
    <Container>
      <CompetenceWrapper theme={theme}>Mes compétences</CompetenceWrapper>
      <CompetencesWrapper>
        <Techno>
          <Button>Front-end</Button>
        </Techno>
        <Technos>
          {front.map((competence, id) => (
            <div className="">
              <Item theme={theme} key={generateKey(id)}>
                {competence}
              </Item>
            </div>
          ))}
        </Technos>
      </CompetencesWrapper>
      {/* back-end */}
      <CompetencesWrapper>
        <Techno>
          <Button>Back-end</Button>
        </Techno>
        <Technos>
          {back.map((competence, id) => (
            <div className="">
              <Item theme={theme} key={generateKey(id)}>
                {competence}
              </Item>
            </div>
          ))}
        </Technos>
      </CompetencesWrapper>
    </Container>
  );
};
export default Competences;
