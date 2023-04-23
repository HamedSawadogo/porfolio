import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navigation">
      <ul className="items-container">
        <NavLink to={"/"}>Accueil</NavLink>
        <NavLink to={"/"}>A propos</NavLink>
        <NavLink to={"/"}>Portfolio</NavLink>
        <NavLink to={"/"}>Contact</NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
