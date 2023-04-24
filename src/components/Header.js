import React from "react";
import Networks from "./Networks";
const Header = () => {
  return (
    <div className="profil-container">
      <div className="profil">
        <span>Salut! Je suis</span>
        <h1>Sawadogo Hamed</h1>
        <h2>Créateur et developpeur de Solutions</h2>
        <div className="about-profil">
          <p className="me">
            Je suis Développeur javacript spécialisé dans le developement
            logiciel Web et mobile je conçois sur mesure des applications sur
            mesure en utlisant des technologies de pointe utilisés par le geants
            de la Tech
          </p>
        </div>
        <button>Télecharger mon CV</button>
        <Networks />
      </div>
    </div>
  );
};

export default Header;
