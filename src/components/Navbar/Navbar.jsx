import React, { createElement } from "react";
import "./Navbar.css";
import { navList } from "../../constants/navList.js";
const Navbar = () => {
  return (
    <nav>
      {navList.map((navlink) => (
        <a href="">{navlink}</a>
      ))}
    </nav>
  );
};

export default Navbar;
