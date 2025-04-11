import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="Home">
      <div className="navbar">
        <div className="logo">
          <h1 className="nev-heading">StartUp Co</h1>
        </div>
        <div className="li">
          <ul>
            <li>
              <NavLink to="/Home" className="nav-li" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/About" className="nav-li" activeClassName="active">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/Service" className="nav-li" activeClassName="active">
                Service
              </NavLink>
            </li>
            <li>
              <NavLink to="/Contact" className="nav-li" activeClassName="active">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        {/* <div class="group">
  <svg viewBox="0 0 24 24" aria-hidden="true" class="icon">
    <g>
      <path
        d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
      ></path>
    </g>
  </svg>
  <input class="input" type="search" placeholder="Search" />
</div> */}

      </div>
    </div>
  );
};

export default Navbar;
