import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="app__navbar" >
      {/* logo */}
      <div className="app__navbar-logo">
        <h1>Ninestars</h1>
      </div>

      {/* left nav */}
      <ul className="app__navbar-links">
        <li>Home</li>
        <li>About Us</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Team</li>
        <li>Dropdown</li>
        <li>Contact</li>
        <li>
          <button className="app__button">Get Started</button>
        </li>
      </ul>

      {/* menu */}
      <div className="app__navbar-smallscreen">
        <MenuIcon size={30} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay">
            <CloseIcon
              size={30}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>Team</li>
              <li>Dropdown</li>
              <li>Contact</li>
              <li>
                <button className="app__button">Get Started</button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
