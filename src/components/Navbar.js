import React from "react";
import { NavLink } from "react-router-dom";
import Form from "./Form";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <NavLink
          to={"/"}
          className={(nav) => (nav.isActive ? "nav-item" : "nav-active")}
        >
          Home
        </NavLink>
        {/* <NavLink
          to={"#propos"}
          className={(nav) => (nav.isActive ? "nav-item" : "nav-active")}
        >
          About
        </NavLink> */}
        <NavLink
          to={"/portfolio"}
          className={(nav) => (nav.isActive ? "nav-item" : "nav-active")}
        >
          Porfolio
        </NavLink>
        <NavLink
          to={"/contact"}
          className={(nav) => (nav.isActive ? "nav-item" : "nav-active")}
        >
          Contact Me
        </NavLink>
      </ul>
    </nav>
  );
};
export default Navbar;
