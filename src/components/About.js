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
              Hello! My name is Hamed and I enjoy creating things that live on
              the internet. My interest in web development started back in 2012
              when I decided to try editing custom Tumblr themes — turns out
              hacking together a custom reblog button taught me a lot about HTML
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
