import React from "react";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
const Portfolio = () => {
  return (
    <div className="portfolio">
      <Navbar />
      <h1>Mes Réalisations </h1>
      <Projects />
    </div>
  );
};

export default Portfolio;
