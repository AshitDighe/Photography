import React from "react";
import { FaAlignJustify } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Nav = () => {
  const [state, setState] = React.useState(true);
  return (
    <>
    <nav className="navbar">
      <div className="container">
        <div className="navbar__container">
          <ul className="navbar__left">
            <div className="navbar__left-logo">
              <img src="/images/logo.png" alt="logo" />
            </div>
          </ul>
          {state ? (
            <ul className="navbar__right">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
              <NavLink to="/About">About</NavLink>
               
              </li>
              <li>
              <NavLink to="/Services">Services</NavLink>
              </li>
              <li>
                <NavLink to="/Gallery">Portfolio</NavLink>
              </li>
              <li>
                <NavLink to="/Team">Team</NavLink>
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="toggle" onClick={() => setState(!state)}>
        <FaAlignJustify />
      </div>
    </nav>
    </>
  );
};

export default Nav;
