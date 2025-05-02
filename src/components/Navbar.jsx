import React, { useState } from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="Home">
      <nav className="navbar">
        <div className="logo">
          <img src="./src/assets/logo.jpg" alt="" width={50} height={50}/>
          <h1 className="nev-heading">StartUp Co</h1>
        </div>

        <div className="menu-toggle" onClick={toggleMenu}>
          ☰
        </div>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <NavLink
              to="/Home"
              className="nav-li"
              activeClassName="active"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/About"
              className="nav-li"
              activeClassName="active"
              onClick={() => setMenuOpen(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Service"
              className="nav-li"
              activeClassName="active"
              onClick={() => setMenuOpen(false)}
            >
              Service
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Contact"
              className="nav-li"
              activeClassName="active"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
