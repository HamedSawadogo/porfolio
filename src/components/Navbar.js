import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { toogleTheme } from "../slices/Theme.slice";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const Navbar = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.theme.theme);

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
  const handleToogleTheme = () => {
    console.log("roo");
    dispatch(toogleTheme());
    console.log(selector);
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let navbar = document.getElementById("navbar");
      if (window.scrollY > window.innerHeight) {
        navbar.style.height = "30px";
      } else {
        navbar.style.height = "55px";
      }
    });
  }, []);
  return (
    <nav className="navigation" id="navbar">
      <ul className="items-container" id="items">
        <NavLink
          to={"/"}
          className={(nav) => (nav.isActive ? "nav-active" : "nav")}
        >
          Accueil
        </NavLink>
        <NavLink
          to={"/portfolio"}
          className={(nav) => (nav.isActive ? "nav-active" : "nav")}
        >
          Portfolio
        </NavLink>
        <NavLink
          to={"/contact"}
          className={(nav) => (nav.isActive ? "nav-active" : "nav")}
        >
          Contact
        </NavLink>
        <span id="toogle" onClick={() => handleToogleTheme()}>
          {selector === "dark" ? (
            <DarkModeIcon style={{ color: "whitesmoke" }} />
          ) : (
            <LightModeIcon style={{ color: " #0a192f" }} />
          )}
        </span>
      </ul>
      <div className="fa-bar" onClick={() => handleToogle()}>
        <i className="fa-solid fa-bars"></i>
      </div>
    </nav>
  );
};

export default Navbar;
