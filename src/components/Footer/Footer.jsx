import "./Footer.scss";
import React from "react";

// Import Icons
import github from "../../assets/icon/logo-github.svg";
import linkdin from "../../assets/icon/logo-linkedin.svg";
import email from "../../assets/icon/mail-outline.svg";
import resume from "../../assets/icon/clipboard-outline.svg";

function Footer() {
  return (
    <div className="footer">
      <nav className="nav">
        <li className="nav__item">
          <a
            href="https://github.com/taratohidi"
            target="_blank"
            rel="noreferrer"
            className="nav__link"
          >
            <img src={github} alt="github" className="nav__icon" />
          </a>
        </li>
        <li className="nav__item">
          <a
            href="https://www.linkedin.com/in/tara-tohidi/"
            target="_blank"
            rel="noreferrer"
            className="nav__link"
          >
            <img src={linkdin} alt="" className="nav__icon" />
          </a>
        </li>
        <li className="nav__item">
          <a href="/" className="nav__link">
            <img src={email} alt="" className="nav__icon" />
          </a>
        </li>
        <li className="nav__item">
          <a href="/" className="nav__link">
            <img src={resume} alt="" className="nav__icon" />
          </a>
        </li>
      </nav>
      <p className="footer__text">©️2022 Made with 🤍 by tara tohidi.</p>
    </div>
  );
}

export default Footer;
