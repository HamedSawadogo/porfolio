import React from "react";
import profileImage from "../assets/images/profile-pic.png";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { colors, fonts } from "../utils/styles";

const TitleEmlement = styled.h3`
  color: ${({ theme }) => (theme === "light" ? " #0a192f" : "#f1f1f1")};
  text-align: center;
  margin: 25px auto;
  text-transform: uppercase;
  opacity: 0.8;
  font-family: ${fonts.font3};
`;

const TextWrapper = styled.p`
  font-family: "Poppins", sans-serif;
  color: ${({ theme }) => (theme === "light" ? "#0a192f" : "#f1f1f1")};
  text-align: center;
  text-align: left;
  font-size: 1.2rem;
`;
const About = () => {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <div className="about-container-block">
      <TitleEmlement theme={theme}>About</TitleEmlement>
      <div className="about-container">
        <div className="about">
          <div className="about-left">
            <TextWrapper theme={theme}>
              I am a Software Developer and Computer Science student with a
              passion for solving complex problems and creating unique and
              intuitive user experiences. I have over a year of experience in
              designing and developing dynamic and responsive websites with
              React, Redux and SCSS. As well as API REST in Node Js, and Spring
              boot I am also competent only in close collaboration with the
              members of the team.
            </TextWrapper>
          </div>
          <div className="about-right">
            <img src={profileImage} alt="image de profil" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
