import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [toogle, setToogle] = useState(false);
  const handleToogle = () => {
    setToogle(!toogle);
    let items = document.getElementById("items");
    if (toogle) {
      items.classList.toggle("nav-active");
    } else {
      items.classList.remove("nav-active");
    }
  };
  return (
    <nav className="navigation">
      <ul className="items-container" id="items">
        <NavLink to={"/"}>Accueil</NavLink>
        <NavLink to={"/"}>A propos</NavLink>
        <NavLink to={"/"}>Portfolio</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
      </ul>
      <div className="fa-bar" onClick={() => handleToogle()}>
        <i class="fa-solid fa-bars"></i>
      </div>
    </nav>
  );
};

export default Navbar;
