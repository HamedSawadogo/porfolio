import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import { ThemeContext } from "./ThemeProvider";
import { projectsData } from "./assets/projectsData";
import Project from "./components/Project";

const HeaderWrapper = styled.div`
  color: ${({ color }) => (color == "dark" ? "white" : "#333")};
`;
const App = () => {
  const { color, toogleTheme } = useContext(ThemeContext);
  return (
    <div>
      <HeaderWrapper>
        <Navbar />
      </HeaderWrapper>

      <HeaderWrapper color={color}>
        <div className="header-container">
          <header>
            <img
              src="profil.jpeg"
              alt="image de profil"
              className="profil-img"
            />

            <h2>
              <HeaderWrapper>
                <strong>Développeur </strong> d'applications{" "}
                <strong>javascript</strong>
              </HeaderWrapper>
            </h2>
            <button>
              <a href="#" download={"./cv.pdf"}>
                <i className="fa-solid fa-circle-down"></i>Télecharger mon CV
              </a>
            </button>
            <div className="networks">
              <div className="github">
                <a href="https://github.com/Sawadogoxxx" target="_blank">
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
              <div className="linkded">
                <a
                  href="https://www.linkedin.com/in/sawadogo-hamed-4a4874267/"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>
            <div className="border"></div>
          </header>
        </div>
        <div className="propos-container">
          <div className="propos-moi" id="#propos">
            <h3>A props de Moi</h3>
            <HeaderWrapper>
              <p className="first">
                Bonjour, je m'appelle SAWADOGO Hamed et je suis{" "}
                <strong> développeur</strong> <strong>javascript</strong>
                passionné et compétent Mes objectifs à court terme sont de
                continuer à développer mes compétences en React JS et d'explorer
                de nouvelles technologies connexes. À long terme, je vise à
                devenir un leader technique dans mon domaine en partageant mes
                connaissances avec d'autres développeurs et en aidant les
                entreprises à créer des applications innovantes et utiles
                N'hésitez pas à me contacter si vous avez des questions ou si
                vous êtes intéressé par une opportunité professionnelle.
              </p>
            </HeaderWrapper>
          </div>
        </div>
        <h2>Mes Projets</h2>
        <div className="projets-container">
          {projectsData.map((project, key) => (
            <Project project={project} key={key} />
          ))}
        </div>
        <div className="contact">
          <h2>Me contacter</h2>
          <HeaderWrapper>
            <form id="form">
              <label htmlFor="name">votre nom</label>
              <input type="text" placeholder="votre nom" />
              <label htmlFor="email">votre adresse mail</label>
              <input type="email" placeholder="votre adresse mail" />
              <label htmlFor="message">votre Message</label>
              <textarea
                name=""
                id=""
                cols="10"
                rows="10"
                placeholder="votre message"
              ></textarea>

              <input type="button" value={"envoyer"} />
            </form>
          </HeaderWrapper>
        </div>
      </HeaderWrapper>
    </div>
  );
};

export default App;
