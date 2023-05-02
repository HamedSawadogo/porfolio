import React from "react";
import profileImage from "../assets/images/image-profile.jpg";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { colors, fonts } from "../utils/styles";

const TitleEmlement = styled.h3`
  color: ${({ theme }) => (theme === "light" ? " #0a192f" : "#f1f1f1")};
  text-align: center;
  margin: 10px auto;
  border-bottom: 2px solid ${colors.color1};
  width: 160px;
  font-family: ${fonts.font3};
`;

const TextWrapper = styled.p`
  font-family: "Poppins", sans-serif;
  color: ${({ theme }) => (theme === "light" ? "#0a192f" : "#f1f1f1")};
  text-align: center;
  text-align: left;
`;
const About = () => {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <div className="about-container-block">
      <TitleEmlement theme={theme}>A propos de Moi</TitleEmlement>
      <div className="about-container">
        <div className="about">
          <div className="about-left">
            <TextWrapper theme={theme}>
              Hello! My name is Hamed and I enjoy creating things that live on
              the internet. My interest in web development started back in 2012
              when I decided to try editing custom Tumblr themes — turns out
              hacking together a custom reblog button taught me a lot about HTML
              & CSS! Fast-forward to today, and I've had the privilege of
              working at an advertising agency, a start-up, a huge corporation,
              and a student-led design studio. My main focus these days is
              building accessible, inclusive products and digital experiences at
              Upstatement for a variety of clients. I also recently launched a
              course that covers everything you need to build a web app with the
              Spotify API using Node
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
