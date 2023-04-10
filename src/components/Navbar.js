import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../ThemeProvider";

const Navbar = () => {
  const { theme, toogleTheme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <nav className="navbar">
      <ul>
        <a href="#propos">A propos</a>
        <a href="#form">Me contacter</a>
        <NavLink onClick={() => toogleTheme()}>
          <i className="fa-sharp fa-solid fa-lightbulb"></i>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
