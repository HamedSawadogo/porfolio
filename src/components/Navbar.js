import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { toogleTheme } from "../slices/Theme.slice";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import styled from "styled-components";

const NavWrapper = styled.nav`
  width: 100%;
  z-index: 10000;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1px;
  background: ${({ theme }) => (theme === "light" ? "white" : "#11c784")};
  position: fixed;
  border-bottom: 1px solid
    ${({ theme }) => (theme === "light" ? "#11c784" : "transparant")};
  transition: 0.3s ease;
`;

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);
  const selector = useSelector((state) => state.theme.theme);
  const handleToogle = () => {
    let items = document.getElementById("items");
    items.classList.toggle("nav-active");
  };
  const handleToogleTheme = () => {
    dispatch(toogleTheme());
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
    <NavWrapper theme={theme} className="navigation" id="navbar">
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
    </NavWrapper>
  );
};

export default Navbar;
