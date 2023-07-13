import React, { useState } from "react";
import Networks from "./Networks";
import { useSelector } from "react-redux";
import styled from "styled-components";

const WelcomeWrapper = styled.span`
  color: ${({ theme }) => (theme === "light" ? "rgb(22, 21, 19)" : "#f1f1f1")};
  font-size: 1.1rem;
  font-family: "Poppins", sans-serif;
  margin: 0 5px;
`;
const NameWrapper = styled.h1`
  font-size: 5rem;
  color: ${({ theme }) => (theme === "light" ? "rgb(22, 21, 19)" : "#f1f1f1")}};
  font-family: "Poppins", sans-serif;
`;
const DjobWrapper = styled.h2`
  font-family: "Poppins", sans-serif;
  color: ${({ theme }) => (theme === "light" ? "rgb(22, 21, 19)" : "#f1f1f1")};
  text-align: center;
  opacity: 0.8;
  font-size: 1.3rem;
`;

const MeWrapper = styled.p`
  font-family: "Poppins", sans-serif;
  color: ${({ theme }) => (theme === "light" ? "rgb(22, 21, 19)" : "#f1f1f1")}};
  text-align: center;
  opacity: 0.7;
  width: 70%;
  margin: 0 auto;
  font-size: 1.2rem;
`;

const Button = styled.button`
  display: block;
  padding: 10px;
  margin: 16px auto;
  cursor: pointer;
  color: ${({ theme }) => (theme === "light" ? "rgb(22, 21, 19)" : "#f1f1f1")};
  font-family: "Poppins", sans-serif;
  background: ${({ theme }) => (theme === "light" ? "#333" : "#11c784")};
  border: none;
  border-radius: 15px;
  transition: 0.3s ease;
  text-decoloration: none;
  &:hover {
    transform: scale(1.088);
  }
`;

const Header = () => {
  const theme = useSelector((state) => state.theme.theme);

  const download = () => {
    const dow = document.getElementById("dow");
    dow.setAttribute("href", "cv.pdf");
    dow.innerHTML = "telechargement ...";
    setTimeout(() => {
      dow.innerHTML = "Télecharger mon CV";
    }, 2000);
  };
  return (
    <div className="profil-container">
      <div className="profil">
        <WelcomeWrapper theme={theme}>Salut! Je suis</WelcomeWrapper>
        <NameWrapper theme={theme}>SAWADOGO Hamed</NameWrapper>
        <DjobWrapper theme={theme}>développeur logiciel</DjobWrapper>
        <div className="about-profil">
          <MeWrapper theme={theme}>
            I am a student and a software engineer
          </MeWrapper>
        </div>
        <Button onClick={() => download()} theme={theme}>
          <a href="cv.pdf" download id="dow">
            Télecharger mon CV
          </a>
        </Button>
        <Networks />
      </div>
    </div>
  );
};

export default Header;
