import React from "react";

const Header = () => {
  return (
    <div>
      <div className="header-container">
        <header>
          <img src="profil.jpeg" alt="image de profil" className="profil-img" />
          <h2>
            <strong>Développeur </strong> d'applications{" "}
            <strong>javascript</strong>
          </h2>
          <button>
            <a href="#" download={"../assets/cv.pdf"}>
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
          <p className="first">
            Bonjour, je m'appelle SAWADOGO Hamed et je suis{" "}
            <strong> développeur</strong> <strong>javascript</strong>
            passionné et compétent Mes objectifs à court terme sont de continuer
            à développer mes compétences en React JS et d'explorer de nouvelles
            technologies connexes. À long terme, je vise à devenir un leader
            technique dans mon domaine en partageant mes connaissances avec
            d'autres développeurs et en aidant les entreprises à créer des
            applications innovantes et utiles N'hésitez pas à me contacter si
            vous avez des questions ou si vous êtes intéressé par une
            opportunité professionnelle.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
