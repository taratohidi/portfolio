import "./Header.scss";
import React from "react";

// Import Icons
import sass from "../../assets/icon/logo-sass.svg";
import express from "../../assets/icon/logo-express.svg";
import mongo from "../../assets/icon/mongodb-icon.svg";
import js from "../../assets/icon/logo-javascript.svg";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <header className="header">
      <div className="heading-3 header__logo">
        <img src={logo} alt="Tara Tohidi" className="header__img" />
      </div>
      <nav className="header__nav">
        <li className="header__nav--list">
          <a href="#story" className="header__nav--link">
            about
          </a>
        </li>
        <li className="header__nav--list">
          <a href="#projects" className="header__nav--link">
            projects
          </a>
        </li>
        <li className="header__nav--list">
          <a href="#contact" className="header__nav--link">
            contact
          </a>
        </li>
        {/* <li className="header__nav--list">
          <a href="/" className="header__nav--link">
            resume
          </a>
        </li>
        <li className="header__nav--list">
          <a href="/" className="header__nav--link">
            resources
          </a>
        </li> */}
      </nav>

      <h2 className="heading-2 heading-2--light ">This is Tara!</h2>
      <h1 className="heading-1 ">full stack developer</h1>
      <a href="#projects" className="btn header__btn">
        view my projects
      </a>

      <div className="header__skills-text">Other Skills</div>
      <div className="header__skills-logos">
        <img src={js} alt="java script" className="header__skills-icon" />
        <img src={express} alt="express.js" className="header__skills-icon" />
        <img src={mongo} alt="mongodb" className="header__skills-icon" />
        <img src={sass} alt="sass" className="header__skills-icon" />
      </div>
    </header>
  );
}

export default Header;
