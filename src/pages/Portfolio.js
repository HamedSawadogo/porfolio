import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import styled from "styled-components";

const RealisationsWrapper = styled.h1`
  color: ${({ theme }) => (theme === "light" ? "#333" : "#f1f1f1")};
  font-family: "Inter", sans-serif;
  text-align: center;
  padding-top: 70px;
  font-size: 1.3rem;
  text-transform: uppercase;
`;
const Portfolio = () => {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <div className="portfolio">
      <Navbar />
      <RealisationsWrapper theme={theme}>Mes Réalisations</RealisationsWrapper>
      <Projects />
    </div>
  );
};
export default Portfolio;
